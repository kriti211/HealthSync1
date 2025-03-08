import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Select, Radio, Button, InputNumber, message, Modal } from "antd";
import axios from "axios";
import "antd/dist/reset.css";
import "./FitnessForm.css";

const { Option } = Select;

const FitnessForm = ({email}) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const onFinish = async (values) => {
    try {
      const payload = { ...values, email };
      console.log(payload)
      const response = await axios.post("http://localhost:5000/api/fitness", payload);
      console.log("Response:", response.data);
      message.success("Form submitted successfully!");
      form.resetFields();
      
      // Show success modal
      setIsModalVisible(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("Failed to submit form!");
    }
  };

  return (
    <div className="fitness-form-container">
      <h1 className="form-title">Basic Information</h1>
      <Form form={form} layout="vertical" onFinish={onFinish} className="fitness-form">
        <Form.Item name="name" label="Name" rules={[{ required: true, message: "Please enter your name" }]}> 
          <Input placeholder="Enter your name" />
        </Form.Item>

        <Form.Item name="age" label="Age" rules={[{ required: true, message: "Please enter your age" }]}> 
          <InputNumber placeholder="Enter your age" min={1} max={120} className="full-width" />
        </Form.Item>

        <Form.Item name="weight" label="Weight (kg)" rules={[{ required: true, message: "Please enter your weight" }]}> 
          <InputNumber placeholder="Enter weight" min={1} className="full-width" />
        </Form.Item>

        <Form.Item name="height" label="Height (cm)" rules={[{ required: true, message: "Please enter your height" }]}> 
          <InputNumber placeholder="Enter height" min={1} className="full-width" />
        </Form.Item>

        <Form.Item name="bloodgrp" label="Blood Group" rules={[{ required: true, message: "Select your blood group" }]}> 
          <Select placeholder="Select blood group">
            {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((group) => (
              <Option key={group} value={group}>{group}</Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name="gender" label="Gender" rules={[{ required: true, message: "Select your gender" }]}> 
          <Radio.Group>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
            <Radio value="other">Other</Radio>
          </Radio.Group>
        </Form.Item>

        <div className="form-buttons">
          <Button type="default" onClick={() => form.resetFields()}>Reset</Button>
          <Button type="primary" htmlType="submit">Submit</Button>
        </div>
      </Form>

      {/* Success Modal */}
      <Modal 
        title="Success!" 
        visible={isModalVisible} 
        onCancel={() => setIsModalVisible(false)} 
        footer={[
          <Button key="dashboard" type="primary" onClick={() => navigate("/lifeinfo")}>
            Generate Schedule
          </Button>,
        ]}
      >
        <p>Your form has been submitted successfully!</p>
      </Modal>
    </div>
  );
};

export default FitnessForm;
