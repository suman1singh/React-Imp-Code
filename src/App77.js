import React from "react";
import ErrorBoundary from "./Container77/ErrorBoundary";
import ComponentA from "./Container77/ComponentA";
import ComponentB from "./Container77/ComponentB";

export default function App77() {
  return (
    <div>
      <ErrorBoundary>
        <ComponentA />
        <ComponentB />
      </ErrorBoundary>
    </div>
  );
}
