import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Issues = ({ API_URI, apiKey }) => {
  const [allIssues, setAllIssues] = useState();

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
    <main className="w-full">
      <h1 className="text-3xl font-bold underline pb-4">Issues</h1>
      {!allIssues && <div className="">Loading...</div>}
      {allIssues && (
        <table
          border={2}
          className="w-full table-auto border border-black p-2 border-collapse"
        >
          <thead>
            <tr>
              <th className="border border-black p-1">Issue Name</th>
              <th className="border border-black p-1">Start Date</th>
              <th className="border border-black p-1">End Date</th>
              <th className="border border-black p-1">Assignee</th>
              <th className="border border-black p-1">Priority</th>
              <th className="border border-black p-1">Description</th>
            </tr>
          </thead>
          <tbody>
            {
              allIssues.length > 0
                ? allIssues.map((val) => {
                    return (
                      <tr key={val.id}>
                        <td className="border border-black p-1 text-center">
                          <Link
                            to={`/bookshowapp/${val.id}`}
                            className="text-blue-500"
                          >
                            {val.name}
                          </Link>
                        </td>
                        <td className="border border-black p-1 text-center">
                          {val.start_date ? val.start_date : "Not Available"}
                        </td>
                        <td className="border border-black p-1 text-center">
                          {val.target_date ? val.target_date : "Not Available"}
                        </td>
                        <td className="border border-black p-1 text-center">
                          {val.assignees.length > 0
                            ? val.assignees
                            : "Not Available"}
                        </td>
                        <td className="border border-black p-1 text-center">
                          {val.priority}
                        </td>
                        <td className="border border-black p-1 text-center">
                          {val.description_html.replace(/<[^>]+>/g, "")
                            ? val.description_html.replace(/<[^>]+>/g, "")
                            : "Not Available"}
                        </td>
                      </tr>
                    );
                  })
                : null
              // <tr>
              //   <td className="border border-black p-1 text-center" colSpan={6}>
              //     No Data
              //   </td>
              // </tr>
            }
          </tbody>
        </table>
      )}
    </main>
  );
};

export default Issues;
