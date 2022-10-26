import { render, fireEvent, queryByTitle } from "@testing-library/react";

import LoginForm from "../signups/Loginform";

it('Checking whether the button is rendered or not', () => {
    const { getByTestId } = render(<LoginForm />);
    const button = getByTestId("LoginBtn");
    expect(button).toBeTruthy();
});

describe("ClickButton", () => {
    it("onClick", () => {
        const { getByTestId } = render(<LoginForm />);
        const btn = getByTestId("LoginBtn");
        fireEvent.click(btn);
    })
});