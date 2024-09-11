import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OneIssue = ({ API_URI }) => {
  const apiKey = "#";
  const { id } = useParams();
  const [issue, setIssue] = useState({});
  const fetchIssue = async () => {
    try {
      const response = await axios.get(`${API_URI}/issues/${id}`, {
        headers: {
          "X-Api-Key": apiKey,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          "Access-Control-Allow-Headers": "X-Api-Key, Content-Type",
        },
      });
      console.log(response.data);
      setIssue(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchIssue();
  }, []);
  return (
    <section>
      {issue && (
        <div>
          <h1>{issue.name}</h1>
          <h4>
            Start Date : {issue.start_date ? issue.start_date : "Not Available"}
          </h4>
          <h4>
            End Date : {issue.target_date ? issue.target_date : "Not Available"}
          </h4>
          <h4>
            Assignees : {issue.assignees ? issue.assignees : "Not Available"}
          </h4>
          <h4>Priority : {issue.priority}</h4>
          <h4>Description : {issue.description_html}</h4>
          <h4>Created AT : {issue.created_at}</h4>
          <h4>Created By : {issue.created_by}</h4>
          <h4>Updated AT : {issue.updated_at}</h4>
          <h4>Updated By : {issue.updated_by}</h4>
        </div>
      )}
    </section>
  );
};

export default OneIssue;
