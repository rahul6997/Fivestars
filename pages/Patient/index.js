import { Fragment } from "react";
import Patientlist from "../../components/signups/PatientList";

const patient_List = [{ id: "d1",
Name: 'John',
Age: '53',
Speciality: 'Fever,Flu',
Qualification: 'Cough and Sinus'
},
{ id: "d2",
Name: 'Paul',
Age: '25',
Speciality: 'Headache',
Qualification: 'Blood Pressure and Irregular Heartbeat'
},
{ id: "d3",
Name: 'Molly',
Age: '28',
Speciality: 'Allergies',
Qualification: 'None'
},
{ id: "d4",
Name: 'Biddy',
Age: '18',
Speciality: 'Muscle Pain',
Qualification: 'Sore Muscle and less protein.'}
];

const Dummy_Doctors_List = [
  {
    id: "d1",
    Name: "Sam",
    Age: "45",
    Speciality: "Cardiology",
    Qualification: "MBBS",
  },
  {
    id: "d2",
    Name: "Guru",
    Age: "22",
    Speciality: "Neurology",
    Qualification: "MBBS + Speciality",
  },
  {
    id: "d3",
    Name: "KV",
    Age: "25",
    Speciality: "Heart",
    Qualification: "MBBS + Heart Speciality",
  },
  {
    id: "d4",
    Name: "Vikas",
    Age: "65",
    Speciality: "Pyhsio Therapy",
    Qualification: "MBBS + PhsioTheraphy",
  },
];

const PatientHomePage = () => {
  return (
    <Fragment>
      <h1>PatientHomePage</h1>
      <Patientlist patientlist={patient_List}/>;
    </Fragment>
  );
};



export default PatientHomePage;
