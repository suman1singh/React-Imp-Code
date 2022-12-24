import React, { Component, Suspense, lazy } from "react";
// import Home75 from './Home75';
const Home75 = lazy(() => import("./Home75"));
const About75 = lazy(() => import("./About75"));

class App75 extends Component {
  render() {
    return (
      <div>
       <h1>Lazy loading</h1>
        <Suspense fallback={<div>please wait... Home is loading</div>}>
          <Home75 />
        </Suspense>
        <Suspense fallback={<div>please wait... About is loading</div>}>
          <About75 />
        </Suspense>
      </div>
    );
  }
}

export default App75;
