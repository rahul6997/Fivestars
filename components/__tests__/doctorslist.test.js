import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
//import "jest-dom/extend-expect";
import '@testing-library/jest-dom'

import DoctorItem from "../signups/DoctorItem";

afterEach(() => {
  cleanup();
});

test("should show doctor details", () => {
  const doctor = {
    id: "d1",
    Name: "Sam",
    Age: "45",
    Speciality: "Cardiology",
    Qualification: "MBBS",
  };

  const { getByTestId } = render(
    <DoctorItem
      key={doctor.id}
      id={doctor.id}
      Name={doctor.Name}
      Qualification={doctor.Qualification}
      Age={doctor.Age}
      Speciality={doctor.Speciality}
    />
  );
  //const doctorElement = screen.getByTestId('doctor-d1');
  expect(getByTestId("doctor-d1")).toBeInTheDocument();
  //expect(doctorElement).toHaveTextContent('Sam');
  expect(getByTestId("doctor-d1")).toHaveTextContent("Sam");
  
});

it("should show doctor details", () => {
  const doctor = {
    id: "d4",
    Name: "Vikas",
    Age: "65",
    Speciality: "Pyhsio Therapy",
    Qualification: "MBBS + PhsioTheraphy",
  };
  const { getByTestId } = render(
    <DoctorItem
      key={doctor.id}
      id={doctor.id}
      Name={doctor.Name}
      Qualification={doctor.Qualification}
      Age={doctor.Age}
      Speciality={doctor.Speciality}
    />
  );
  expect(getByTestId("doctor-d4")).toHaveTextContent("Vikas");
});

// test("matches snapshot", () => {
//   const doctor = {
//     id: "d1",
//     Name: "Sam",
//     Age: "45",
//     Speciality: "Cardiology",
//     Qualification: "MBBS",
//   };
//   const tree = renderer
//     .create(
//       <DoctorItem
//         key={doctor.id}
//         id={doctor.id}
//         Name={doctor.Name}
//         Qualification={doctor.Qualification}
//         Age={doctor.Age}
//         Speciality={doctor.Speciality}
//       />
//     )
//     .toJSON();
//     expect(tree).toMatchSnapshot();
// });
