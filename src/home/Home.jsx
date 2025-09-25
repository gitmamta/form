import { useNavigate } from "react-router-dom";
import api from "../api/api";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    handleFetch();
  }, []);

  async function handleFetch() {
    try {
      setLoading(true);
      const response = await api.get("/users");
      console.log(response.data);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1 className="text-center">Users Data</h1>
      {loading ? (
        <h2>Loading......</h2>
      ) : (
        <div className="table-responsive">
          <table
            className="table table-bordered text-center"
            style={{ border: 2 }}
          >
            <thead>
              <tr>
                <th scope="col">Sr no</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone No</th>
                <th scope="col">Age</th>
                <th scope="col">Message</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 &&
                data.map((element, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{element?.name}</td>
                    <td>{element?.email}</td>
                    <td>{element?.phoneNo}</td>
                    <td>{element?.age}</td>
                    <td>{element?.message || "No Message"}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
