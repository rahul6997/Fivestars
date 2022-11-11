import { useRef } from "react";

import Card from "../../components/ui/Card";
import classes from "../../components/signups/NewSignupForm.module.css";

const BookAppointment = () => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const ageInputRef = useRef();
  const genderInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Patient Name</label>
          <input type="text" required id="name" ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="text" required id="email" ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="age">Age</label>
          <input type="text" required id="age" ref={ageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="gender">Gender</label>
          <input type="text" required id="gender" ref={genderInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description of Health Issues</label>
          <textarea type="text" required id="description" rows='5' ref={genderInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Schedule Appointment</button>
        </div>
      </form>
    </Card>
  );
};

export default BookAppointment;
