import { Col, Row, Form, Input } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import Spinner from "../components/Spinner";
import { addBike } from "../redux/actions/bikeActions";
function AddBike() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alertsReducer);

  function onFinish(values) {
    values.bookedTimeSlots = [];

    dispatch(addBike(values));
    console.log(values);
  }

  return (
    <DefaultLayout>
      {loading && <Spinner />}
      <Row justify="center mt-5">
        <Col lg={12} sm={24} xs={24} className="p-2">
          <Form className="bs1 p-2" layout="vertical" onFinish={onFinish}>
            <h3>Add New Bike</h3>
            <hr />
            <Form.Item
              name="name"
              label="Bike name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="image"
              label="Image url"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="rentPerHour"
              label="Cost"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="capacity"
              label="Capacity"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="mileage"
              label="Mileage"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="fuelType"
              label="Fuel Type"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

            <div className="text-right">
              <button className="btn1">ADD BIKE</button>
            </div>
          </Form>
        </Col>
      </Row>
    </DefaultLayout>
  );
}

export default AddBike;