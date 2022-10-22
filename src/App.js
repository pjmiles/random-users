import { Route, Routes } from 'react-router-dom';
import Users from './components/Users';
import './App.css';

function App() {
  return (
    <Routes className="App">
      <Route path="/" element={<Users />}/>
    </Routes>
  );
}

export default App;
