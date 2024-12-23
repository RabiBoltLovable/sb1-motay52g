/*
  # Add Row Level Security to applications table
  
  1. Security
    - Enable RLS on applications table
    - Add policies for:
      - Anonymous application submission
      - Authenticated users viewing their own applications
*/

-- Enable RLS
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- Create policies
DO $$ 
BEGIN
  -- Policy for anonymous submissions
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'applications' 
    AND policyname = 'Anyone can submit an application'
  ) THEN
    CREATE POLICY "Anyone can submit an application"
      ON applications
      FOR INSERT
      TO anon
      WITH CHECK (true);
  END IF;

  -- Policy for viewing own applications
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'applications' 
    AND policyname = 'Users can view their own applications'
  ) THEN
    CREATE POLICY "Users can view their own applications"
      ON applications
      FOR SELECT
      TO authenticated
      USING (auth.jwt() ->> 'email' = email);
  END IF;
END $$;