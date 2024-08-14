import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateUser from './pages/CreateUser';
import Home from './pages/Home';
import ListUser from './pages/ListUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/user-list" element={<ListUser />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;
