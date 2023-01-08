import React from "react";
import Child83_1 from "./cmp83/Child83_1";
import Child83_2 from "./cmp83/Child83_2";

export default function App83() {
  const [data, setData] = React.useState("");
  return (
    <div>
      <Child83_1 setData={setData} />
      <Child83_2 data={data} />
    </div>
  );
}
