import PatientItem from './PatienItem';
import classes from './DoctorsList.module.css';

function PatientList(props) {
  return (
    <ul className={classes.list}>
      {props.patientlist.map((patient) => (
        <PatientItem
          key={patient.id}
          id={patient.id}
          image={patient.image}
          Name={patient.Name}
          Qualification={patient.Qualification}
          Age={patient.Age}
          Speciality={patient.Speciality}
        />
      ))}
    </ul>
  );
}

export default PatientList;
