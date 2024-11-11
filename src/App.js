import React, { useState } from 'react';
import HabitList from './components/HabitList';
import Reports from './components/Reports';

const App = () => {
  const [habits, setHabits] = useState([]);
  const [habitName, setHabitName] = useState('');

  // Function to add a new habit
  const addHabit = () => {
    if (habitName.trim() === '') return;
    const newHabit = { 
      name: habitName, 
      completed: false, 
      streak: 0, 
      completionHistory: [] 
    };
    setHabits([...habits, newHabit]);
    setHabitName('');
  };

  // Function to toggle completion status
  const toggleCompletion = (index) => {
    setHabits(habits.map((habit, i) => 
      i === index 
        ? { ...habit, completed: !habit.completed, streak: habit.completed ? habit.streak : habit.streak + 1 } 
        : habit
    ));
  };

  return (
    <div>
      <h1>Digital Habit Tracker</h1>
      <input 
        type="text" 
        value={habitName} 
        onChange={(e) => setHabitName(e.target.value)} 
        placeholder="New Habit" 
      />
      <button onClick={addHabit}>Add Habit</button>
      <HabitList habits={habits} toggleCompletion={toggleCompletion} />
      <Reports habits={habits} />
    </div>
  );
};

export default App