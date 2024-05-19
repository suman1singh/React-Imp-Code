import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import Appu2 from "./Appu2";
import * as APIService from "./apiu";

jest.mock("./apiu");

test("form makes a api call with proper params", async () => {
  APIService.getData.mockResolvedValueOnce({ ok: true });
  const { getByLabelText, getByText, debug } = render(<Appu2 />);
  const inputField = getByLabelText(/Body:/i); //This will search for the label that matches the given TextMatch, then find the element associated with that label.
  const submitBtn = getByText(/Post/i); //This will search for all elements that have a text node with textContent matching the given TextMatch.
  fireEvent.change(inputField, { target: { value: "sample title" } });
  fireEvent.click(submitBtn);
  debug(submitBtn);
  expect(APIService.getData).toHaveBeenCalledTimes(1);
  expect(APIService.getData).toHaveBeenCalledWith("sample title");
  // await wait(() => null);
});
