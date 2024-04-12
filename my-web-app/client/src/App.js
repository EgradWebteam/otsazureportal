import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserForm from './components/UserForm';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<UserForm/>} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
