import React from "react";
import { Table } from "react-bootstrap";
import User37 from "./User37";

export default function App34() {
  const employee = [
    { name: "Suman1", email: "1ecesuman132@gmail.com", mob: 4178628693 },
    { name: "Suman2", email: "2ecesuman132@gmail.com", mob: 5178628693 },
    { name: "Suman3", email: "3ecesuman132@gmail.com", mob: 6178628693 },
    { name: "Suman4", email: "4ecesuman132@gmail.com", mob: 7178628693 },
    { name: "Suman5", email: "5ecesuman132@gmail.com", mob: 8178628693 },
    { name: "Suman5", email: "5ecesuman132@gmail.com", mob: 8178628693 },
    { name: "Suman5", email: "5ecesuman132@gmail.com", mob: 8178628693 },
    { name: "Suman5", email: "5ecesuman132@gmail.com", mob: 8178628693 },
    { name: "Suman5", email: "5ecesuman132@gmail.com", mob: 8178628693 },
  ];
  return (
    <React.Fragment>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td> Name </td>

            <td> Email </td>

            <td> Mob </td>
          </tr>
          {employee.map((i, m) => (
            <tr key={m}>
             <User37 data={i} data2={m}/>
            </tr>
          ))}
        </tbody>
      </Table>
    </React.Fragment>
  );
}
