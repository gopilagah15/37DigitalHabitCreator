import React from 'react'

const HabitList = ({ habits, toggleCompletion }) => (
    <div>
      <h2>Your Habits</h2>
      <ul>
        {habits.map((habit, index) => (
          <li key={index}>
            <span>{habit.name}</span>
            <button onClick={() => toggleCompletion(index)}>
              {habit.completed ? "Unmark" : "Mark as Complete"}
            </button>
            <p>Streak: {habit.streak} days</p>
          </li>
        ))}
      </ul>
    </div>
  );
  

export default HabitList