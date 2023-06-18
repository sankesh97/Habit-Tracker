import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { HabitsContext } from '../Context/HabitsContext';
import CreateHabit from '../Components/CreateHabit';

const Main = () => {
  const navigate = useNavigate();
  const { activeHabitsList, MoveToArchive, deleteHabit } =
    useContext(HabitsContext);

  const borderColorHandler = (timeOfTheDay) => {
    switch (timeOfTheDay) {
      case 'Morning':
        return 'green';
      case 'Afternoon':
        return 'orange';
      case 'Evening':
        return 'red';
      default:
        return 'grey';
    }
  };

  return (
    <>
      <div className='d-flex justify-content-between'>
        <h2>Active Habits</h2>
        <button
          className='btn btn-light'
          onClick={() => {
            navigate('/archive');
          }}
        >
          Go to Archives Page
        </button>
      </div>
      <div className='row py-5 g-5'>
        <div className='col-md-12 col-sm-1'>
          <div
            className='card h-100 btn btn-dark '
            data-bs-toggle='modal'
            data-bs-target='#createModal'
          >
            <div className='card-body d-flex justify-content-center align-items-center'>
              <h2 className='card-title align-middle'>Create New Habit</h2>
            </div>
          </div>
        </div>

        {activeHabitsList.length ? (
          activeHabitsList.map((activeHabit) => {
            return (
              <div key={activeHabit.id} className='col-md-6 col-sm-1'>
                <div
                  className='card'
                  style={{
                    borderTop: `5px solid ${borderColorHandler(
                      activeHabit.timeOfTheDay
                    )}`,
                  }}
                >
                  <div className='card-body'>
                    <h3 className='card-title text-center'>
                      {activeHabit.name}
                    </h3>

                    <div
                      className='btn-group'
                      role='group'
                      aria-label='Basic example'
                    >
                      <button type='button' className='btn btn-outline-primary'>
                        <i className='bi bi-eye'></i> View Habit
                      </button>
                      <button type='button' className='btn btn-outline-primary'>
                        <i className='bi bi-pencil-square'></i> Edit Habit
                      </button>
                      <button
                        type='button'
                        onClick={() => {
                          deleteHabit(activeHabit);
                        }}
                        className='btn btn-outline-primary'
                      >
                        <i className='bi bi-trash'></i> Delete Habit
                      </button>
                      <button
                        type='button'
                        onClick={() => {
                          MoveToArchive(activeHabit);
                        }}
                        className='btn btn-outline-primary'
                      >
                        <i className='bi bi-file-arrow-down-fill'></i> Move to
                        Archive
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>There are no active </p>
        )}
      </div>
      <CreateHabit></CreateHabit>
    </>
  );
};
export default Main;
