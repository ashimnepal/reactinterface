import './App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaAd } from "react-icons/fa";
import Search from './components/Search';
import AddAppointment from './components/AddAppointment';
import AppointmentInfo from './components/AppointmentInfo';
import appointmentList from './data.json';

function App() {
  return (
    <div className="App mx-auto text-5xl">
      <h1 className='title'>Is tailwind working</h1>
      <FaAd />
      <AddAppointment />
      <Search />

    <ul className='divide-y divide-gray-200'>
      {appointmentList.map(appointment => (<AppointmentInfo key={appointment.id}
      appointment={appointment}/>))}
    </ul>

      <p>Grab a coffee!</p>
    </div>
  );
}

export default App;
