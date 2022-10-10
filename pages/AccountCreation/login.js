import NewSignupForm from "../../components/signups/NewSignupForm";
import { Fragment } from "react";
import Card from "../../components/ui/Card";
import LoginForm from "../../components/signups/loginform";

const LogIn = () => {
  return (
    <Fragment>
      <Card>
        <h1> LogIn as a Doctor</h1>
        <LoginForm />
      </Card>
      <Card>
        <h1> LogIn as a Customer</h1>
        <LoginForm />
      </Card>
    </Fragment>
  );
};

export default LogIn;
