import Card from "../ui/Card";
import classes from "./DoctorItem.module.css";

function PatientItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        {/* <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div> */}
        <div className={classes.content} data-testid={`doctor-${props.id}`}>
            <h3 style={{color:'red'}}> Patient list</h3>
          <h3 style={{color:'blue'}}> Name : {props.Name}</h3>
          <h3 style={{color:'blue'}}> Age :{ props.Age}</h3>
          <h3 style={{color:'blue'}}>  Disease :{props.Speciality}</h3>
          <h3 style={{color:'blue'}}> History : {props.Qualification}</h3>
          {/* <address><strong>Qualification: </strong>{props.Qualification}</address> */}
          {/* <address><strong>Speciality: </strong>{props.Speciality}</address> */}
          {/* <address><strong>Age: </strong>{props.Age}</address> */}
        </div>
        <div className={classes.actions}>
          <button>Edit Patient Details</button>
        </div>
      </Card>
    </li>
  );
}

export default PatientItem;
