import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Issues = ({ API_URI }) => {
  const [allIssues, setAllIssues] = useState([]);
  const apiKey = "#";

  const fetchIssues = async () => {
    try {
      const response = await axios.get(`${API_URI}/issues/`, {
        headers: {
          "X-Api-Key": apiKey,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          "Access-Control-Allow-Headers": "X-Api-Key, Content-Type",
        },
      });
      console.log(response.data.results);
      setAllIssues(response.data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchIssues();
  }, []);
  return (
    <main>
      <h1>Issues</h1>
      <table border={2}>
        <thead>
          <tr>
            <th>Issue Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Assignee</th>
            <th>Priority</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {allIssues.length > 0 ? (
            allIssues.map((val) => {
              return (
                <tr key={val.id}>
                  <td>
                    <Link to={`/bookshowapp/${val.id}`}>{val.name}</Link>
                  </td>
                  <td>{val.start_date ? val.start_date : "Not Available"}</td>
                  <td>{val.target_date ? val.target_date : "Not Available"}</td>
                  <td>
                    {val.assignees.length > 0 ? val.assignees : "Not Available"}
                  </td>
                  <td>{val.priority}</td>
                  <td>{val.description_html}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>No Data</td>
            </tr>
          )}
        </tbody>
      </table>
    </main>
  );
};

export default Issues;
