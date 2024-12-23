/*
  # Create applications table
  
  1. New Tables
    - `applications` - Stores student application data
      - Basic student and parent information
      - Application status tracking
      - Document references
  
  2. Changes
    - Creates the initial applications table structure
*/

-- Create the applications table
CREATE TABLE IF NOT EXISTS applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name text NOT NULL,
  date_of_birth date NOT NULL,
  grade_applying_for text NOT NULL,
  parent_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  address text NOT NULL,
  previous_school text,
  status text DEFAULT 'pending',
  documents jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);