import React from 'react';
import { Trophy, Users, Calendar } from 'lucide-react';

interface SportEvent {
  sport: string;
  event: string;
  date: string;
  venue: string;
  teams: string[];
}

const sportsEvents: SportEvent[] = [
  {
    sport: 'Football',
    event: 'Inter-School Tournament',
    date: '2024-03-25',
    venue: 'Main Ground',
    teams: ['Ashokam', 'St. Mary\'s', 'DPS']
  },
  {
    sport: 'Cricket',
    event: 'House Match',
    date: '2024-03-28',
    venue: 'Cricket Ground',
    teams: ['Red House', 'Blue House']
  }
];

export default function SportsSchedule() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <Trophy className="h-6 w-6 text-blue-600 mr-2" />
        Sports Events
      </h3>
      <div className="space-y-4">
        {sportsEvents.map((event, index) => (
          <div key={index} className="border p-4 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium">{event.sport} - {event.event}</h4>
                <p className="text-sm text-gray-600">Venue: {event.venue}</p>
                <div className="flex items-center mt-2">
                  <Users className="h-4 w-4 text-gray-400 mr-1" />
                  <p className="text-sm text-gray-600">{event.teams.join(' vs ')}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                <span className="text-sm text-gray-600">{event.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}