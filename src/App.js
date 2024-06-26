import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Loan from './Loan'
import Debt from './Debt'
import Home from './Home'
import Sip from './Sip'
import Retirement from './Retirement';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Loan" element={<Loan />} />
          <Route path="/Debt" element={<Debt />} />
          <Route path="/Sip" element={<Sip />} />
          <Route path="/Retirement" element={<Retirement />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;