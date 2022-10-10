import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewSignupForm.module.css";

function NewSignupForm(props) {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const ageInputRef = useRef();
  const genderInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const enteredGender = genderInputRef.current.value;

    const doctorData = {
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
      age: enteredAge,
      gender: enteredGender,
    };

    props.onAddDoctor(doctorData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input type="text" required id="name" ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="text" required id="email" ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input type="text" required id="password" ref={passwordInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="age">Age</label>
          <input type="text" required id="age" ref={ageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="gender">Gender</label>
          <input type="text" required id="gender" ref={genderInputRef} />
        </div>
        <div className={classes.actions}>
          <button>SignUp</button>
        </div>
      </form>
    </Card>
  );
}

export default NewSignupForm;
