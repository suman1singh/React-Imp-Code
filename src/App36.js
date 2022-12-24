import React from "react";
import { Table } from "react-bootstrap";

export default function App34() {
  const employee = [
    {
      name: "Suman1",
      email: "1ecesuman132@gmail.com",
      address: [
        { Hn: "ward5", Block: "Khajauli1", District: "Madhubani1" },
        { Hn: "ward6", Block: "Khajauli2", District: "Madhubani2" },
        { Hn: "ward7", Block: "Khajauli3", District: "Madhubani3" },
        { Hn: "ward8", Block: "Khajauli4", District: "Madhubani4" },
      ],
    },
    {
      name: "Suman2",
      email: "2ecesuman132@gmail.com",
      address: [
        { Hn: "ward5", Block: "Khajauli1", District: "Madhubani1" },
        { Hn: "ward6", Block: "Khajauli2", District: "Madhubani2" },
        { Hn: "ward7", Block: "Khajauli3", District: "Madhubani3" },
        { Hn: "ward8", Block: "Khajauli4", District: "Madhubani4" },
      ],
    },
    {
      name: "Suman3",
      email: "3ecesuman132@gmail.com",
      address: [
        { Hn: "ward5", Block: "Khajauli1", District: "Madhubani1" },
        { Hn: "ward6", Block: "Khajauli2", District: "Madhubani2" },
        { Hn: "ward7", Block: "Khajauli3", District: "Madhubani3" },
        { Hn: "ward8", Block: "Khajauli4", District: "Madhubani4" },
      ],
    },
    {
      name: "Suman4",
      email: "4ecesuman132@gmail.com",
      address: [
        { Hn: "ward5", Block: "Khajauli1", District: "Madhubani1" },
        { Hn: "ward6", Block: "Khajauli2", District: "Madhubani2" },
        { Hn: "ward7", Block: "Khajauli3", District: "Madhubani3" },
        { Hn: "ward8", Block: "Khajauli4", District: "Madhubani4" },
      ],
    },
  ];
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <tbody>
          <tr>
            <td> Name </td>

            <td> Email </td>

            <td> Mob </td>
            <td> Address </td>
          </tr>
          {employee.map((i, m) => (
            <tr key={m}>
              <td>{m + 1}</td>
              <td> {i.name} </td>

              <td> {i.email} </td>

              <td>
                <Table variant="dark" striped>
                  <tbody>
                    {i.address.map((data, j) => (
                      <tr key={j}>
                        <td>{j + 1}</td>
                        <td>House no: {data.Hn}</td>
                        <td>District: {data.District}</td>
                        <td>Block: {data.Block}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
