import { Route, Routes } from 'react-router-dom';
import { RideCreationForm } from './components/RideCreationForm/RideCreationForm';

function App() {
  return (
    <Routes>
      <Route path='/' element={<RideCreationForm />} />
    </Routes>
  );
}

export default App;
