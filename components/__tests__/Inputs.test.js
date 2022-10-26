import { render, fireEvent } from "@testing-library/react";
import LoginForm from "../signups/Loginform";

it("InputRenderCheck", () => {
    const { getByTestId } = render(<LoginForm />);
    const input1 = getByTestId("EmailInput1");
    expect(input1).toBeTruthy();
});

describe("ChangeInInput", () => {
    it("onClick", () => {
        const { getByTestId } = render(<LoginForm />);
        const input2 = getByTestId("EmailInput1");
        fireEvent.change(input2);
    })
});