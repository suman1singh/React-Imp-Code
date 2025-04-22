import { render, screen, fireEvent } from "@testing-library/react";
import App239 from "./App239";

test("renders Counter and increments on button click", () => {
  // Step 1: Render the component
  render(<App239 />);

  // Step 2: Get elements from the screen
  const countElement = screen.getByText(/count/i); // Find text containing 'Count'
  const buttonElement = screen.getByText(/increment/i); // Find button by text

  // Step 3: Assert that initial count is 0
  expect(countElement).toHaveTextContent("Count: 0");

  // Step 4: Simulate a click event
  fireEvent.click(buttonElement);

  // Step 5: Assert that the count is now 1
  expect(countElement).toHaveTextContent("Count: 1");
});

// 🔹 Explanation of the Test Code:
// Render the component: We use render(<Counter />) to render the Counter 
// component to the screen.

// Find elements:
// screen.getByText(/count/i) is used to get the element that contains the text 
// "Count" (case-insensitive).
// screen.getByText(/increment/i) gets the button.

// Assertions:

// expect(countElement).toHaveTextContent('Count: 0') asserts that the initial text 
// in the p tag says "Count: 0".

// Simulate interaction: fireEvent.click(buttonElement) simulates a user clicking 
// the "Increment" button.

// Re-assertion: After the button is clicked, 
// expect(countElement).toHaveTextContent('Count: 1') ensures that the count updates to 1.
