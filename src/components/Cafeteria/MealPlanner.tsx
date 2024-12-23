import React from 'react';
import { Utensils, Apple, Coffee } from 'lucide-react';

const weeklyMenu = [
  {
    day: 'Monday',
    breakfast: 'Paratha with Curd',
    lunch: 'Rice, Dal, Vegetables',
    snack: 'Fruit Salad'
  },
  {
    day: 'Tuesday',
    breakfast: 'Poha',
    lunch: 'Roti, Curry, Salad',
    snack: 'Samosa'
  }
];

export default function MealPlanner() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <Utensils className="h-6 w-6 text-blue-600 mr-2" />
        Weekly Menu
      </h3>
      <div className="space-y-6">
        {weeklyMenu.map((menu) => (
          <div key={menu.day} className="border-b pb-4">
            <h4 className="font-medium mb-3">{menu.day}</h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <Coffee className="h-4 w-4 mr-2" />
                  <span className="text-sm">Breakfast</span>
                </div>
                <p className="text-sm">{menu.breakfast}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <Utensils className="h-4 w-4 mr-2" />
                  <span className="text-sm">Lunch</span>
                </div>
                <p className="text-sm">{menu.lunch}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <Apple className="h-4 w-4 mr-2" />
                  <span className="text-sm">Snack</span>
                </div>
                <p className="text-sm">{menu.snack}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}