import { useRouter } from "next/router";
import { useState } from "react";

import Card from "../ui/Card";
import classes from "./DoctorItem.module.css";

const slots = [
  {
    time: "10-11 am",
    available: true,
  },
  {
    time: "11-12 am",
    available: true,
  },
  {
    time: "2-3 pm",
    available: true,
  },
  {
    time: "3-4 pm",
    available: true,
  },
];

function DoctorItem(props) {
  const [showSlots, setShowSlots] = useState(false);
  const router = useRouter();

  const showAppointmentsHandler = () => {
    console.log(showSlots);
    console.log(slots);
    setShowSlots((showSlots) => !showSlots);
  };

  const bookAppointmentHandler = () => {
    router.push('/BookAppointment');
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content} data-testid={`doctor-${props.id}`}>
          <h3>{props.Name}</h3>
          <address>
            <strong>Qualification: </strong>
            {props.Qualification}
          </address>
          <address>
            <strong>Speciality: </strong>
            {props.Speciality}
          </address>
          <address>
            <strong>Age: </strong>
            {props.Age}
          </address>
        </div>
        <div className={classes.actions}>
          <button onClick={showAppointmentsHandler}>Book an Appointment</button>
        </div>
        <div className={classes.actions}>
          {showSlots && slots.map((slot) => <button onClick={bookAppointmentHandler}>{slot.time}</button>)}
        </div>
      </Card>
    </li>
  );
}

export default DoctorItem;
