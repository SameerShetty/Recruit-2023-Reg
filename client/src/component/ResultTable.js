import React, { useEffect, useState } from "react";
import axios from "axios";

function ResultTable({ stateprop }) {
  const [msg, setmsg] = useState("");
  const [results, setResults] = useState([
    {
      name: "",
      usn: "",
      year: "",
      _id: "",
    },
  ]);
  const sendFeedfirst = (ress) => {
    if (ress.year === 1) {
      return (
        <tr key={ress._id}>
          <td>{ress.name.toString().toUpperCase()}</td>
          <td>{ress.usn.toString().toUpperCase()}</td>
        </tr>
      );
    }
    return null;
  };
  const sendFeedsecond = (ress) => {
    if (ress.year === 2) {
      return (
        <tr key={ress._id}>
          <td>{ress.name.toString().toUpperCase()}</td>
          <td>{ress.usn.toString().toUpperCase()}</td>
        </tr>
      );
    }
    return null;
  };

  useEffect(() => {
    axios
      .get("/results")
      .then((response) => {
        if (response.status === 200) {
          setResults(response.data);
          setmsg("");
        }
      })
      .catch((err) => {
        console.log(err);
        setmsg(err.response.data.message);
      });
  });
  if (msg) {
    stateprop(false);
    return (
      <tr>
        <td>{msg}</td>
      </tr>
    );
  }
  stateprop(true);
  return (
    <>
      <h3 className="text-center" style={{ color: "#269BCE" }}>
        I years
      </h3>
      <table class="table  table-striped">
        <thead>
          <tr>
            <th scope="col">NAME</th>
            <th scope="col">USN</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">{results.map(sendFeedfirst)}</tbody>
      </table>
      <h3 className="text-center" style={{ color: "#269BCE" }}>
        II years
      </h3>
      <table class="table  table-striped">
        <thead>
          <tr>
            <th scope="col">NAME</th>
            <th scope="col">USN</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">{results.map(sendFeedsecond)}</tbody>
      </table>
    </>
  );
}

export default ResultTable;
