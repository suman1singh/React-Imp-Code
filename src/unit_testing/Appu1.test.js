import React from "react";
import { render, fireEvent, getByRole } from "@testing-library/react";
import Appu1 from "./Appu1";

test("renders form properly", () => {
  const { getByLabelText, getByText } = render(<Appu1 />);
  const nameLabel = getByText(/Name:/i); //This will search for all elements that have a text node with textContent matching the given TextMatch.
  const ageLabel = getByText(/Age:/i);
  expect(nameLabel).toBeInTheDocument();
  expect(ageLabel).toBeInTheDocument();

  const input = getByLabelText(/Age:/i); //This will search for the label that matches the given TextMatch, then find the element associated with that label.
  expect(input).toHaveAttribute("type", "number");
});

test("btn should be disabled for empty name", () => {
  const { getByLabelText, getByRole } = render(<Appu1 />);
  const nameInput = getByLabelText(/Name:/i);
  fireEvent.change(nameInput, {
    target: {
      value: "",
    },
  });
  const btn = getByRole("button", { name: "Submit" }); //This can be used to query every element that is exposed in the accessibility tree. With the name option you can filter the returned elements by their accessible name.
  //Returns a single element with the given role value, defaulting to an exact match.
  expect(btn).toHaveAttribute("disabled");
});

test("updateAge function updates the age state correctly", () => {
  const { getByLabelText } = render(<Appu1 />);
  const ageInput = getByLabelText(/Age:/i);

  fireEvent.change(ageInput, {
    target: { value: "30" },
  });

  expect(ageInput.value).toBe("30");
});

test("btn should be enabled for non-empty name", () => {
  const { getByLabelText, getByRole, debug } = render(<Appu1 />);
  const nameInput = getByLabelText(/Name:/i);
  fireEvent.change(nameInput, {
    target: {
      value: "",
    },
  });
  const btn = getByRole("button", { name: "Submit" });
  expect(btn).toHaveAttribute("disabled");
  debug(btn);
  fireEvent.change(nameInput, {
    target: {
      value: "SumanSingh",
    },
  });
  debug(btn);
  expect(btn).not.toHaveAttribute("disabled");
});
