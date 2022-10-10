import Card from "../ui/Card";
import classes from "./DoctorItem.module.css";

function DoctorItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        {/* <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div> */}
        <div className={classes.content}>
          <h3>{props.Name}</h3>
          <address><strong>Qualification: </strong>{props.Qualification}</address>
          <address><strong>Speciality: </strong>{props.Speciality}</address>
          <address><strong>Age: </strong>{props.Age}</address>
        </div>
        <div className={classes.actions}>
          <button>Book an Appointment</button>
        </div>
      </Card>
    </li>
  );
}

export default DoctorItem;
