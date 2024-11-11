import React from 'react'

const Reports = ({ habits }) => {
    const calculateCompletionRate = () => {
      const totalDays = new Date().getDate(); // total days in the current month
      return habits.map(habit => ({
        name: habit.name,
        completionRate: ((habit.streak / totalDays) * 100).toFixed(2) + '%',
      }));
    };
  
    return (
      <div>
        <h2>Reports</h2>
        <ul>
          {calculateCompletionRate().map((report, index) => (
            <li key={index}>
              <strong>{report.name}</strong>: {report.completionRate} completion rate
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

export default Reports