import { Link } from 'react-router-dom';

const Navigation = () => (
  <>
    <Link to="/">Doctors</Link>
    <Link to="/bookappointment">Book Appointment</Link>
    <Link to="/myappointments">My Appointments</Link>
    <Link to="/adddoctor">Add Doctor</Link>
    <Link to="/deletedoctor">Delete Doctor</Link>
  </>
);

export default Navigation;
