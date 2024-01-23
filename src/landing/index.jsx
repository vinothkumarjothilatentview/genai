import React, { useEffect, useState } from "react";
import * as RB from "react-bootstrap";
import * as MB from "@mui/material";
import POWERBI from "../DashboardViews/POWERBI";
import "./style.css";

const Landing = () => {
  // let [text, set_text] = useState([]);

  let [frame_link, set_frame_link] = useState(
    "https://genai-website.azurewebsites.net/lv_chatbot4/"
  );

  useEffect(() => {}, []);
  return (
    <>
      <iframe src={frame_link}></iframe>
    </>
  );
};

export default Landing;
