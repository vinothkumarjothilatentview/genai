import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Auth_Validator = ({ children }) => {
  const navigate = useNavigate();
  let auth_token = localStorage.getItem("auth_token");

  let check_auth = () => {
    if (auth_token === "" || auth_token === null) {
      navigate("/secure");
    } else {
      navigate("/");
    }
  };
  useEffect(() => {
    check_auth();
  }, []);

  return children;
};

export default Auth_Validator;
