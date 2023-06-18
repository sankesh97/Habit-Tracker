import { createContext, useState } from 'react';
import { habits } from '../Data/habitsDB';
import { v4 as uuidv4 } from 'uuid';

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [activeHabitsList, setActiveHabitsList] = useState(habits);
  const [archiveHabitsList, setArchiveHabitsList] = useState([]);
  const optionsList = {
    repeat: ['Daily', 'Weekly', 'Monthly', 'Yearly'],
    goal: ['Once', 'Multiple'],
    timeOfTheDay: ['Morning', 'Afternoon', 'Evening', 'Any Time'],
  };

  const createNewHabit = ({ name, repeat, goal, timeOfTheDay, startDate }) => {
    setActiveHabitsList((prevState) => [
      ...prevState,
      { id: uuidv4(), name, repeat, goal, timeOfTheDay, startDate },
    ]);
  };

  const MoveToArchive = (habit) => {
    setArchiveHabitsList((prevState) => [...prevState, habit]);
    setActiveHabitsList((prevState) =>
      prevState.filter((currentHabit) => currentHabit.id !== habit.id)
    );
  };

  const deleteHabit = (habit) => {
    setActiveHabitsList((prevState) =>
      prevState.filter((currentHabit) => currentHabit.id !== habit.id)
    );
  };

  const EditHabit = (habit) => {
    setActiveHabitsList((prevState) =>
      prevState.filter((currentHabit) => currentHabit.id !== habit.id)
    );
  };

  return (
    <HabitsContext.Provider
      value={{
        activeHabitsList,
        setActiveHabitsList,
        archiveHabitsList,
        setArchiveHabitsList,
        createNewHabit,
        MoveToArchive,
        deleteHabit,
        optionsList,
        EditHabit,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};
