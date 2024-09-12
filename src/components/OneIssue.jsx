import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OneIssue = ({ API_URI, apiKey }) => {
  const { id } = useParams();
  const [issue, setIssue] = useState();
  const [desc, setDesc] = useState("");
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
      let desc = response.data.description_html;
      let descStr = desc.replace(/<[^>]+>/g, "");
      // console.log(descStr);
      setDesc(descStr);
      setIssue(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchIssue();
  }, []);
  return (
    <section className="w-full">
      {!issue && <div>Loading...</div>}
      {issue && (
        <div>
          <h1 className="text-3xl font-bold pb-4">{issue.name}</h1>
          <h4>
            <b>Start Date</b> :{" "}
            {issue.start_date ? issue.start_date : "Not Available"}
          </h4>
          <h4>
            <b>End Date</b> :{" "}
            {issue.target_date ? issue.target_date : "Not Available"}
          </h4>
          <h4>
            <b>Assignees</b> :{" "}
            {issue.assignees ? issue.assignees : "Not Available"}
          </h4>
          <h4>
            <b>Priority</b> : {issue.priority}
          </h4>
          <h4>
            <b>Description</b> : {desc ? desc : "Not Available"}
          </h4>
          <h4>
            <b>Created AT</b> : {issue.created_at}
          </h4>
          <h4>
            <b>Created By</b> : {issue.created_by}
          </h4>
          <h4>
            <b>Updated AT</b> : {issue.updated_at}
          </h4>
          <h4>
            <b>Updated By</b> : {issue.updated_by}
          </h4>
        </div>
      )}
    </section>
  );
};

export default OneIssue;
