import DoctorItem from './DoctorItem';
import classes from './DoctorsList.module.css';

function DoctorsList(props) {
  return (
    <ul className={classes.list}>
      {props.doctorslist.map((doctor) => (
        <DoctorItem
          key={doctor.id}
          id={doctor.id}
          image={doctor.image}
          Name={doctor.Name}
          Qualification={doctor.Qualification}
          Age={doctor.Age}
          Speciality={doctor.Speciality}
        />
      ))}
    </ul>
  );
}

export default DoctorsList;
