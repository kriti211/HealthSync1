// import React, { useState } from "react";
// import { Form, Radio, Collapse, Input, Button, message, Select, InputNumber } from "antd";
// import axios from "axios";
// import "antd/dist/reset.css";
// import './MedicalForm.css';

// const { Panel } = Collapse;
// const { Option } = Select;

// const Lifeinfo = () => {
//   const [form] = Form.useForm();
//   const [showMedicalFields, setShowMedicalFields] = useState(false);
//   const [showSurgeryField, setShowSurgeryField] = useState(false);
//   const [inputs, setInputs] = useState({});

//   const diseases = [
//     "Diabetes",
//     "Hypertension (High Blood Pressure)",
//     "Heart Disease",
//     "Asthma",
//     "Thyroid Disorders",
//     "Arthritis",
//     "Kidney Disease",
//     "Chronic Pain",
//   ];

//   const handleMedicalConditionChange = (e) => {
//     setShowMedicalFields(e.target.value === "yes");
//   };

//   const handleSurgeryChange = (e) => {
//     setShowSurgeryField(e.target.value === "yes");
//   };

//   const onFinish = async (values) => {
//     try {
//       const response = await axios.post("http://localhost:5000/api/medical", values);
//       console.log("Response:", response.data);
//       message.success("Form submitted successfully!");
//       form.resetFields();
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       message.error("Failed to submit form!");
//     }
//   };

//   return (
//     <div className="form-container">
//       <Form
//         form={form}
//         layout="vertical"
//         onFinish={onFinish}
//         className="medical-form"
//       >
//         <h2 className="form-section">Lifestyle Information</h2>

//         <Form.Item name="consumption" label="Consumption Habits"> 
//           <Select placeholder="Select any consumption">
//             <Option value="alcohol">Alcohol</Option>
//             <Option value="smoking">Smoking</Option>
//             <Option value="drugs">Drugs</Option>
//             <Option value="none">None</Option>
//           </Select>
//         </Form.Item>

//         <Form.Item name="diet" label="Diet Habit"> 
//           <Select placeholder="Select diet preference">
//             <Option value="vegetarian">Vegetarian</Option>
//             <Option value="vegan">Vegan</Option>
//             <Option value="non-vegetarian">Non-Vegetarian</Option>
//           </Select>
//         </Form.Item>

//         <Form.Item name="activity" label="Physical Activity Level"> 
//           <Select placeholder="Select activity level">
//             <Option value="Begginer">Begginer</Option>
//             <Option value="Intermediate">Intermediate</Option>
//             <Option value="Advance">Advance</Option>
//             <option value="none">None</option>
//           </Select>
//         </Form.Item>

//         <Form.Item name="heredity" label="Heredity Disease"> 
//           <Select placeholder="Select hereditary disease">
//             <Option value="diabetes">Diabetes</Option>
//             <Option value="heart">Heart Disease</Option>
//             <Option value="cancer">Cancer</Option>
//             <Option value="none">None</Option>
//           </Select>
//         </Form.Item>

//         <Form.Item name="sleep" label="Sleeping Hours"> 
//           <InputNumber placeholder="Enter sleeping hours" min={1} max={24} className="full-width" />
//         </Form.Item>

//         <div className="form-buttons">
//           <Button type="default" onClick={() => form.resetFields()}>Reset</Button>
//           <Button type="primary" htmlType="submit">Submit</Button>
//         </div>
//       </Form>
//     </div>
//   );
// };

// export default Lifeinfo;
import React, { useState } from "react";
import { Form, Radio, Collapse, Input, Button, message, Select, InputNumber } from "antd";
import axios from "axios";
import './Lifeinfo.css'
import { Navigate, useNavigate } from "react-router-dom";
// import "antd/dist/reset.css";
// import './MedicalForm.css';

const { Panel } = Collapse;
const { Option } = Select;

const Lifeinfo = () => {
  const [form] = Form.useForm();
  const [step, setStep] = useState(1); // Step control
  const [formData, setFormData] = useState({}); // Store all form data
  const [showMedicalFields, setShowMedicalFields] = useState(false);
  const [showSurgeryField, setShowSurgeryField] = useState(false);
  const [inputs, setInputs] = useState({});
  const navigate=useNavigate();

  const diseases = [
    "Diabetes",
    "Hypertension (High Blood Pressure)",
    "Heart Disease",
    "Asthma",
    "Thyroid Disorders",
    "Arthritis",
    "Kidney Disease",
    "Chronic Pain",
  ];

  const handleNext = () => {
    form.validateFields().then((values) => {
      setFormData((prev) => ({ ...prev, ...values }));
      setStep(2);
    }).catch(err => console.log("Validation Failed:", err));
  };

  const handleMedicalConditionChange = (e) => {
    setShowMedicalFields(e.target.value === "yes");
  };

  const handleSurgeryChange = (e) => {
    setShowSurgeryField(e.target.value === "yes");
  };

  const handleInputChange = (disease, value) => {
    setInputs((prev) => ({ ...prev, [disease]: value }));
  };

  const onFinish = async (values) => {
    const finalData = { ...formData, ...values, diseases: inputs };

    try {
      const response = await axios.post("http://localhost:5000/api/medical", finalData);
      console.log("Response:", response.data);
      message.success("Form submitted successfully!");
      form.resetFields();
      setStep(1);
      setFormData({});
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("Failed to submit form!");
    }
  };

  return (
    <div className="form-container">
      <Form form={form} layout="vertical" onFinish={onFinish} className="medical-form">
        
        {/* Step 1: Lifestyle Information */}
        {step === 1 && (
          <>
            <h2 className="form-section">Lifestyle Information</h2>

            <Form.Item name="consumption" label="Consumption Habits">
              <Select placeholder="Select any consumption">
                <Option value="alcohol">Alcohol</Option>
                <Option value="smoking">Smoking</Option>
                <Option value="drugs">Drugs</Option>
                <Option value="none">None</Option>
              </Select>
            </Form.Item>

            <Form.Item name="diet" label="Diet Habit">
              <Select placeholder="Select diet preference">
                <Option value="vegetarian">Vegetarian</Option>
                <Option value="vegan">Vegan</Option>
                <Option value="non-vegetarian">Non-Vegetarian</Option>
              </Select>
            </Form.Item>

            <Form.Item name="activity" label="Physical Activity Level">
              <Select placeholder="Select activity level">
                <Option value="Beginner">Beginner</Option>
                <Option value="Intermediate">Intermediate</Option>
                <Option value="Advanced">Advanced</Option>
                <Option value="none">None</Option>
              </Select>
            </Form.Item>

            <div className="form-buttons">
              <Button type="default" onClick={() => form.resetFields()}>Reset</Button>
              <Button type="primary" onClick={handleNext}>Next</Button>
            </div>
          </>
        )}

        {/* Step 2: Medical Form */}
        {step === 2 && (
          <>
            <h2 className="form-section">Medical Assessment</h2>

            <Form.Item name="medicalCondition" label="Do you have any diagnosed medical conditions?" rules={[{ required: true }]}>
              <Radio.Group onChange={handleMedicalConditionChange}>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            </Form.Item>

            {showMedicalFields && (
              <Collapse accordion>
                {diseases.map((disease) => (
                  <Panel header={disease} key={disease}>
                    medicine 1:
                    <Input
                      placeholder={`Enter details for ${disease}`}
                      value={inputs[disease] || ""}
                      onChange={(e) => handleInputChange(disease, e.target.value)}
                    />
                    medicibne 2:
                     <Input
                      placeholder={`Enter details for ${disease}`}
                      value={inputs[disease] || ""}
                      onChange={(e) => handleInputChange(disease, e.target.value)}
                    />
                  </Panel>
                ))}
              </Collapse>
            )}

            <Form.Item name="surgery" label="Past Surgery">
              <Radio.Group onChange={handleSurgeryChange}>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            </Form.Item>

            {showSurgeryField && (
              <Form.Item name="surgeryDetails" label="Please provide details about your past surgery">
                <Input.TextArea placeholder="Enter surgery details" />
              </Form.Item>
            )}

            <Form.Item name="forgetMedication" label="Do you often forget to take your medications?" rules={[{ required: true }]}>
              <Radio.Group>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item name="mentalHealth" label="Mental Health Conditions (e.g., anxiety, depression)">
              <Input.TextArea placeholder="Describe any mental health conditions" />
            </Form.Item>

            <Form.Item name="cognitiveFunction" label="Cognitive Functioning (memory issues, concentration problems)">
              <Input.TextArea placeholder="Describe any cognitive issues" />
            </Form.Item>

            <div className="form-buttons">
              <Button type="default" onClick={() => setStep(1)}>Back</Button>
              <Button type="primary" htmlType="submit" onClick={()=>navigate("/schedule")}>Submit</Button>
            </div>
          </>
        )}

      </Form>
    </div>
  );
};

export default Lifeinfo;
