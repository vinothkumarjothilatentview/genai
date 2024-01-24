import React, { useEffect, useState } from "react";
import * as RB from "react-bootstrap";
import * as MB from "@mui/material";
import POWERBI from "../DashboardViews/POWERBI";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Landing = () => {
  const navigate = useNavigate();

  let [user_name, set_user_name] = useState("");

  let [frame_link, set_frame_link] = useState(
    "https://genai-website.azurewebsites.net/lv_chatbot4/"
  );

  // var url = data.url + "&output=embed";
  // window.location.replace(url);

  let user_logout = () => {
    localStorage.removeItem("user_obj");
    localStorage.removeItem("auth_token_v2");
    navigate("/secure");
  };

  useEffect(() => {
    let u_data = JSON.parse(localStorage.getItem("user_obj"));
    if (u_data !== null) {
      set_user_name(u_data["name"] || "");
    }
  }, []);
  return (
    <RB.Row className="no_p_m">
      <RB.Row className="no_p_m">
        <RB.Card className="no_b_radius txt_right">
          <RB.Card.Body>
            <RB.Row className="no_p_m">
              <RB.Col md={5}>&nbsp;</RB.Col>
              <RB.Col md={6}>
                {"Welcome"} &nbsp;&nbsp; {user_name}
              </RB.Col>
              <RB.Col md={1} onClick={user_logout}>
                {"Logout"}
              </RB.Col>
            </RB.Row>
          </RB.Card.Body>
        </RB.Card>
      </RB.Row>
      <RB.Row className="no_p_m">&nbsp;</RB.Row>
      <RB.Row className="no_p_m">
        <POWERBI URL={frame_link} height={"100vh"}></POWERBI>
      </RB.Row>
    </RB.Row>
  );
};

export default Landing;
