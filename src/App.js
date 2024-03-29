import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Item from './components/Item';
import AddItem from './components/AddItem';
import DeleteItem from './components/DeleteItem';
import AddReservation from './components/AddReservation';
import MyReservation from './components/MyReservation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Item />} />
          <Route path="/adddoctor" element={<AddItem />} />
          <Route path="/deletedoctor" element={<DeleteItem />} />
          <Route path="/bookappointment" element={<AddReservation />} />
          <Route path="/myappointments" element={<MyReservation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
