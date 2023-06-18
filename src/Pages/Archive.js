import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { HabitsContext } from '../Context/HabitsContext';

const Archive = () => {
  const navigate = useNavigate();
  const { archiveHabitsList, MoveToArchive } = useContext(HabitsContext);
  return (
    <>
      <div className='d-flex justify-content-between'>
        <h2>Archived Habits</h2>
        <button
          className='btn btn-light'
          onClick={() => {
            navigate('/');
          }}
        >
          Go to Main Page
        </button>
      </div>
      <div className='row py-5 g-5'>
        {archiveHabitsList.length ? (
          archiveHabitsList.map((activeHabit) => {
            return (
              <div key={activeHabit.id} className='col-md-6 col-sm-1'>
                <div className='card'>
                  <div className='card-body'>
                    <h4 className='card-title'>{activeHabit.name}</h4>
                    <p>
                      <strong>Repeat</strong>: {activeHabit.repeat}
                    </p>
                    <p>
                      <strong>Goal</strong>: {activeHabit.goal}
                    </p>
                    <p>
                      <strong>Time of the Day</strong>:{' '}
                      {activeHabit.timeOfTheDay}
                    </p>
                    <p>
                      <strong>Start Date</strong>: {activeHabit.startDate}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>There Are No Archived Habits </p>
        )}
      </div>
    </>
  );
};
export default Archive;
