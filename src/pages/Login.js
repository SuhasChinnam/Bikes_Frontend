import React from "react";
import { Row, Col, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/actions/userActions";
import AOS from "aos";
import Spinner from "../components/Spinner";
import "aos/dist/aos.css"; 
AOS.init();

function Login() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alertsReducer);
  function onFinish(values) {
    dispatch(userLogin(values));
    console.log(values);
  }
  return (
    <div className="login">
      {loading && <Spinner />}
      <Row gutter={16} className="d-flex align-items-center">
        <Col lg={16} style={{ position: "relative" }}>
          <img
             src={require("../images/logo1.jpg")}
            alt=""
            className="w-100"
            data-aos="slide-right"
            data-aos-duration="2000"
          />

          <h1 className="login-logo">
            Bikezzz
          </h1>
        </Col>
        <Col lg={8} className="text-left p-3">
          <Form
            layout="vertical"
            
            className="login-form p-6"
            onFinish={onFinish}
          >
            <h1>Login</h1>
            <hr />
            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

            <button className="btn1 mt-1">Login</button>
            <br />
            <Link to={"/register"}>
              <p className="mt-2">Click here to Register</p>
            </Link>
            <Link to={"/adminlogin"}>
              <p className="mt-2">Click here to  Login as admin</p>
            </Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Login;