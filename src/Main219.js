import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Main219 = () => {
  const [record, setRecord] = useState([]);
  const navigate = useNavigate();
  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((resposne) => resposne.json())
      .then((res) => setRecord(res));
  };

  useEffect(() => {
    getData();
  }, []);

  function gotoDetails(id) {
    navigate(`/detail/${id}`, { state: { id: id } });
  }
  
  return (
    <div className="container mt-2">
      <div className="row mt-2 ">
        <div className="col-lg-1 col-md-6 col-sm-12"></div>
        <div className="col-lg-11 col-md-6 col-sm-12">
          <h5 className="mt-3 mb-3 text-secondary">
            Check More Records of Employees
          </h5>
          <div className=" mt-5">
            <table className="table table-striped table-sm">
              <thead className="thead-light">
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Website</th>
                  <th>Show Details</th>
                </tr>
              </thead>
              <tbody>
                {record.map((names, index) => (
                  <tr key={index}>
                    <td>{names.id}</td>
                    <td>{names.name}</td>
                    <td>{names.username}</td>
                    <td>{names.email}</td>
                    <td>{names.website}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => gotoDetails(names.id)}
                        data-toggle="modal"
                        data-target="#myModal"
                      >
                        Get Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main219;
