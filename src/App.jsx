import { useEffect, useState } from "react";
import axios from "axios";
import Login from "./Pages/Login";

function App() {
  //membuat state data yang nanti akan diisi nilai data
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3000/cake")
      .then((result) => setData(result.data));
  }, []);

  console.log(data);
  return (
    <>
      
      <h1 className="text-8xl text-purple-300">test</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Kue</th>
          </tr>
        </thead>
    <tbody>
        {data?.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
