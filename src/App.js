import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Pages/Main';
import Archive from './Pages/Archive';

function App() {
  return (
    <div className='container-fluid p-5'>
      <div className='d-flex justify-content-center'>
        <h1>
          <i class='bi bi-hourglass-split'></i> Habits Tracker
        </h1>
      </div>
      <hr />
      <div className='container p-1'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/archive' element={<Archive />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
