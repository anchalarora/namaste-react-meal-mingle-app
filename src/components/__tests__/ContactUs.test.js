import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

//use describe for grouping test cases.
describe("Contact us page test cases", () => {
  test("should Load contactus", () => {
    render(<ContactUs />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("should Load button inside contactus", () => {
    render(<ContactUs />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("should Load button inside contactus", () => {
    render(<ContactUs />);

    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });
  test("should Load inout name inside contactus", () => {
    render(<ContactUs />);

    const button = screen.getByPlaceholderText("Enter Name");
    expect(button).toBeInTheDocument();
  });

  // use test or it => it is alias for test.
  it("should Load 2 inoutboxes inside contactus", () => {
    render(<ContactUs />);

    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
    expect(inputBoxes.length).not.toBe(3);
    expect(inputBoxes.length).toBeTruthy();

    // render , query , assert.
  });
});
