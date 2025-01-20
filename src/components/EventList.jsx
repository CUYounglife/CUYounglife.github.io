import React from 'react';

const events = [
  { date: '1/22', time: '11-2', event: 'Be Involved', location: 'Ballroom', talk: '', leaders: '', staff: '', foodDrink: '', notes: '' },
  { date: '1/22', time: '7', event: 'Trivia', location: 'Bella', talk: '', leaders: 'Allen', staff: 'Simon Abby', foodDrink: '', notes: '' },
  { date: '1/29', time: '7', event: 'Gamer Night', location: 'Bella', talk: 'Jaben', leaders: 'AJ Nate', staff: 'Brennen, Steven Jaben', foodDrink: '', notes: '' },
  { date: '2/5', time: 'X', event: 'Volunteer Fair', location: '', talk: '', leaders: '', staff: '', foodDrink: '', notes: '' },
  { date: '2/5', time: '7', event: 'Bowling', location: 'UMC', talk: 'No', leaders: 'Brennan', staff: 'Allen', foodDrink: '', notes: '' },
  { date: '2/12', time: '7', event: 'Casino night', location: 'Bella', talk: 'Hannah Nate', leaders: 'AJ Hannah', staff: 'Tipsey Trey', foodDrink: '', notes: '' },
  { date: '2/19', time: '7', event: 'Brinner', location: 'Bella', talk: 'Abby Raina', leaders: 'Abby Hannah Ben', staff: 'Jaben', foodDrink: '', notes: '' },
  { date: '2/26', time: '7', event: 'Short Film night', location: 'Bella', talk: 'Ben Steven', leaders: 'AJ Simon Ben Brennan', staff: '', foodDrink: '', notes: '' },
  { date: '3/5', time: '7', event: 'MR YLC', location: 'Bella', talk: 'No', leaders: 'Lily Remi Abby', staff: 'Steven', foodDrink: '', notes: '' },
  { date: '3/12', time: '6', event: 'Soccer and VB', location: 'Business Field', talk: 'No', leaders: 'Simon Ben', staff: 'Steven Jaben', foodDrink: '', notes: '' },
  { date: '2/22', time: '', event: 'Start of Spring Break', location: '', talk: '', leaders: '', staff: '', foodDrink: '', notes: '' },
  { date: '3/26', time: '', event: 'Spring Break', location: '', talk: '', leaders: '', staff: '', foodDrink: '', notes: '' },
  { date: '3/28', time: '', event: 'End of Spring Break', location: '', talk: '', leaders: '', staff: '', foodDrink: '', notes: '' },
  { date: '4/2', time: '6', event: 'Fry and Fly', location: 'Bella', talk: 'Yes', leaders: 'AJ', staff: 'Trey Jaben, Steven', foodDrink: '', notes: '' },
  { date: '4/9', time: '6', event: 'Chimney', location: 'Chimney', talk: 'Yes', leaders: 'Remi Lily', staff: 'Trey Jaben, Kelby', foodDrink: '', notes: '' },
  { date: '4/16', time: '6', event: 'Amazing Race', location: 'Bella', talk: 'No', leaders: 'Brennan Nate', staff: 'Steven', foodDrink: '', notes: '' },
  { date: '4/23', time: '6', event: 'Spikeball and cookout', location: 'Business Field', talk: 'Yes', leaders: 'Raina', staff: '', foodDrink: '', notes: '' },
  { date: '5/19', time: '', event: 'Golf Tournament', location: '', talk: '', leaders: '', staff: '', foodDrink: '', notes: '' },
];

const EventList = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Young Life Events</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Time</th>
              <th className="px-4 py-3 text-left">Event</th>
              <th className="px-4 py-3 text-left">Location</th>
              <th className="px-4 py-3 text-left">Talk</th>
              <th className="px-4 py-3 text-left">Leaders</th>
              <th className="px-4 py-3 text-left">Staff</th>
              <th className="px-4 py-3 text-left">Food/Drink</th>
              <th className="px-4 py-3 text-left">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {events.map((event, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-3">{event.date}</td>
                <td className="px-4 py-3">{event.time}</td>
                <td className="px-4 py-3 font-medium">{event.event}</td>
                <td className="px-4 py-3">{event.location}</td>
                <td className="px-4 py-3">{event.talk}</td>
                <td className="px-4 py-3">{event.leaders}</td>
                <td className="px-4 py-3">{event.staff}</td>
                <td className="px-4 py-3">{event.foodDrink}</td>
                <td className="px-4 py-3">{event.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventList; 