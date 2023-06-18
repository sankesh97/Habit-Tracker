import { useContext, useState } from 'react';
import { HabitsContext } from '../Context/HabitsContext';

const CreateHabit = () => {
  const { optionsList, createNewHabit } = useContext(HabitsContext);
  const [addFormState, setAddFormState] = useState({
    name: '',
    repeat: '',
    goal: '',
    timeOfTheDay: '',
    startDate: '',
  });

  const onChangeHandler = (id, value) => {
    setAddFormState((prevState) => ({ ...prevState, [id]: value }));
  };
  return (
    <>
      {/* Add Modal */}
      <div
        className='modal fade text-dark'
        id='createModal'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5' id='exampleModalLabel'>
                Create New Habit
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <div className='mb-3'>
                <label htmlFor='name' className='form-label'>
                  Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='name'
                  onChange={(event) => {
                    onChangeHandler(event.target.id, event.target.value);
                  }}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='startDate' className='form-label'>
                  Repeat
                </label>
                <select
                  className='form-select'
                  id='repeat'
                  onChange={(event) => {
                    onChangeHandler(event.target.id, event.target.value);
                  }}
                >
                  {optionsList.repeat.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div className='mb-3'>
                <label htmlFor='goal' className='form-label'>
                  Goal
                </label>
                <select
                  className='form-select'
                  id='goal'
                  onChange={(event) => {
                    onChangeHandler(event.target.id, event.target.value);
                  }}
                >
                  {optionsList.goal.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div className='mb-3'>
                <label htmlFor='startDate' className='form-label'>
                  Time of the Day
                </label>
                <select
                  className='form-select'
                  id='timeOfTheDay'
                  onChange={(event) => {
                    onChangeHandler(event.target.id, event.target.value);
                  }}
                >
                  {optionsList.timeOfTheDay.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div className='mb-3'>
                <label htmlFor='startDate' className='form-label'>
                  Date
                </label>
                <input
                  type='date'
                  onChange={(event) => {
                    onChangeHandler(event.target.id, event.target.value);
                  }}
                  className='form-control'
                  id='startDate'
                />
              </div>
            </div>
            <div className='modal-footer'>
              <button
                type='submit'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Close
              </button>
              <button
                onClick={() => {
                  createNewHabit(addFormState);
                }}
                data-bs-dismiss='modal'
                type='button'
                className='btn btn-primary'
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateHabit;
