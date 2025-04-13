// All api calls using axios: CRUD
import React, { useEffect, useState } from "react";
import axios from "axios";

const App65_1 = () => {
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleformData = (e) => {
    // setFormData((res) => ({
    //   ...res,
    //   [e.target.name]: e.target.value,
    // }));
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getApi = async () => {
    try {
      const res = await axios.get("http://localhost:3006/contacts");
      setData(res.data);
      console.log("data", res.data);
    } catch (err) {
      console.log("get api data error", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedId) {
        await axios.put(
          `http://localhost:3006/contacts/${selectedId}`,
          formData
        );
      } else {
        await axios.post("http://localhost:3006/contacts", formData);
      }
      setSelectedId(null);
      setFormData({
        name: "",
        email: "",
        phone: "",
      });
      getApi();
    } catch (err) {
      console.log("post request failed:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3006/contacts/${id}`);
      setData(data.filter((e) => e.id !== id));
    } catch (err) {
      console.log("err in deleting record", err);
    }
  };

  const handleUpdate = (id) => {
    const item = data.find((item) => item.id === id);
    if (item) {
      setFormData({
        name: item.name,
        email: item.email,
        phone: item.phone,
      });
      setSelectedId(id);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  const border = {
    border: "1px solid black",
    padding: "8px",
  };
  return (
    <>
      <p>Show api data in table and delete based on id</p>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleformData}
          />
        </label>
        <br />
        <br />
        <label>
          Email:{" "}
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleformData}
          />
        </label>
        <br />
        <br />
        <label>
          Phone:{" "}
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleformData}
          />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
      </form>
      <table>
        <thead>
          <tr>
            <th style={border}>ID</th>
            <th style={border}>Name</th>
            <th style={border}>Email</th>
            <th style={border}>Mob</th>
            <th style={border}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((e, j) => (
              <tr key={j + 1}>
                <td style={border}>{e.id}</td>
                <td style={border}>{e.name}</td>
                <td style={border}>{e.email}</td>
                <td style={border}>{e.phone}</td>
                <td style={border}>
                  <button onClick={() => handleDelete(e.id)}>Delete</button>{" "}
                  <button onClick={() => handleUpdate(e.id)}>Update</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default App65_1;
