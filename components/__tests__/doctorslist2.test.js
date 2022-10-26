import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
//import "jest-dom/extend-expect";
import '@testing-library/jest-dom'

import DoctorItem from "../signups/DoctorItem";

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