import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

import Card from "../ui/Card";
import classes from "../signups/DoctorItem.module.css";
import { useSelector } from "react-redux";

// const slots = [
//   {
//     time: "10-11 am",
//     available: true,
//   },
//   {
//     time: "11-12 am",
//     available: true,
//   },
//   {
//     time: "2-3 pm",
//     available: true,
//   },
//   {
//     time: "3-4 pm",
//     available: true,
//   },
// ];

//Rendering the AppointmentItem component usingthe received props

function AppointmentItem(props) {
  const router = useRouter();

  //   const showAppointmentsHandler = () => {
  //     console.log(showSlots);
  //     console.log(slots);
  //     setShowSlots((showSlots) => !showSlots);
  //   };

  //   const bookAppointmentHandler = () => {
  //     console.log(emailRef.current.value);
  //     router.push('/BookAppointment');
  //   };
  console.log("In Appointment Item");

  const medicationsSuggestedInputRef = useRef()

  const isDoctor = useSelector((state) => state.auth.isDoctor);
  const [showMedicationsBox, setShowMedicationsBox] = useState(false);
  const [ medicationsSuggested, setMedicationsSuggested ] = useState("");

  //dyamically rendering the data of appointment based on loggen in user such as if doctor logs in showing the patient details in appointment info vice versa

  return (
    <li className={classes.item}>
      <Card>
        <div
          className={classes.content}
          data-testid={`doctor-${props.patientId}`}
        >
          {!isDoctor ? (
            <h3>{props.doctorName}</h3>
          ) : (
            <h3>{props.patientName}</h3>
          )}
          <address>
            <strong>Date: </strong>
            {props.appointmentDate}
          </address>
          <address>
            <strong>Time Slot: </strong>
            {props.timeSlot}
          </address>
          <address>
            <strong>medicalIssues: </strong>
            {props.medicalIssues}
          </address>
          {/* <address>
            <strong>Experience: </strong>
            {props.Experience}
          </address> */}
          {!isDoctor ? (
            <address>
              <strong>Doctor Email: </strong>
              {props.doctorEmail}
            </address>
          ) : (
            <address>
              <strong>Patient Email: </strong>
              {props.patientEmail}
            </address>
          )}
        </div>
        <div className={classes.actions}>
          {isDoctor && (
            <button onClick={() => setShowMedicationsBox(true)}>
              Add Medications
            </button>
          )}
        </div>
        <div className={classes.actions}>
          {isDoctor && showMedicationsBox && (
            <textarea
              type="text"
              id="medicationsSuggested"
              value={medicationsSuggested}
              onChange={(e) => setMedicationsSuggested(e.target.value)}
              ref={medicationsSuggestedInputRef}
            />
          )}
        </div>
        <div className={classes.actions}>
        {isDoctor && showMedicationsBox && (
            <button>submit</button>
          )}
        </div>
        {/* <div className={classes.actions}>
          <button onClick={showAppointmentsHandler}>Book an Appointment</button>
        </div> */}
        {/* <div className={classes.actions}>
          {showSlots && slots.map((slot) => <Link href={{ pathname: '/BookAppointment', query: props.Email }} >{slot.time}</Link>)}
        </div> */}
      </Card>
    </li>
  );
}

export default AppointmentItem;
