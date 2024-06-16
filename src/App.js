import React, { useCallback, useState, useEffect } from 'react';
import './App.css';
import Search from './components/Search';
import AddAppointment from './components/AddAppointment';
import AppointmentInfo from './components/AppointmentInfo';

function App() {
  const [appointmentList, setAppointmentList] = useState([]);
  const [query, setQuery] = useState("");

  // Filter appointments based on the query
  const filteredAppointment = appointmentList.filter(
    item => {
      return (
        item.petName.toLowerCase().includes(query.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLowerCase())
      );
    }
  );

  const fetchData = useCallback(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        setAppointmentList(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="container">
      <div className="App mx-auto text-5xl">
        <AddAppointment />
        <Search query={query} onQueryChange={myQuery => setQuery(myQuery)} />
        
        <ul className='divide-y divide-gray-200'>
          {filteredAppointment.map(appointment => (
            <AppointmentInfo 
              key={appointment.id} 
              appointment={appointment} 
              onDeleteAppointment={appointmentId => setAppointmentList(appointmentList.filter(appointment => appointment.id !== appointmentId))} 
            />
          ))}
        </ul>
        <p>Grab a coffee!</p>
      </div>
    </div>
  );
}

export default App;
