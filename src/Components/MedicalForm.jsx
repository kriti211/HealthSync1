// import React, { useState } from "react";
// import { Form, Radio, Select, Input, Button, message } from "antd";
// import axios from "axios";
// import "antd/dist/reset.css";
// import './MedicalForm.css';

// const { Option } = Select;

// const MedicalForm = () => {
//   const [form] = Form.useForm();
//   const [showMedicalFields, setShowMedicalFields] = useState(false);

//   const handleMedicalConditionChange = (e) => {
//     setShowMedicalFields(e.target.value === "yes");
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
//       <h1>Medical Assessment Form</h1>
//       <Form
//         form={form}
//         layout="vertical"
//         onFinish={onFinish}
//         className="medical-form"
//       >
//         <Form.Item name="medicalCondition" label="Do you have any diagnosed medical conditions?" rules={[{ required: true }]}> 
//           <Radio.Group onChange={handleMedicalConditionChange}>
//             <Radio value="yes">Yes</Radio>
//             <Radio value="no">No</Radio>
//           </Radio.Group>
//         </Form.Item>

//         {showMedicalFields && (
//           <>
//             <Form.Item name="disease" label="Which disease do you have?" rules={[{ required: true }]}> 
//               <Select placeholder="Select a disease" mode="multiple" allowClear>
//                 <Option value="diabetes">Diabetes</Option>
//                 <Option value="hypertension">Hypertension (High Blood Pressure)</Option>
//                 <Option value="heart_disease">Heart Disease</Option>
//                 <Option value="asthma">Asthma</Option>
//                 <Option value="thyroid">Thyroid Disorders</Option>
//                 <Option value="arthritis">Arthritis</Option>
//                 <Option value="kidney">Kidney Disease</Option>
//                 <Option value="chronic_pain">Chronic Pain</Option>
//                 <Option value="other">Other (Specify below)</Option>
//               </Select>
//             </Form.Item>

//             <Form.Item name="otherDisease" label="Other Disease (if any)">
//               <Input placeholder="Enter other disease" />
//             </Form.Item>

//             <Form.Item name="medications" label="What medicine are you taking?" rules={[{ required: true }]}> 
//               <Input.TextArea placeholder="List your medications" />
//             </Form.Item>

//             <Form.Item name="medTiming" label="What are the timings of your medicine?" rules={[{ required: true }]}> 
//               <Input.TextArea placeholder="Enter medication timings" />
//             </Form.Item>
//           </>
//         )}

//         <Form.Item name="forgetMedication" label="Do you often forget to take your medications?" rules={[{ required: true }]}> 
//           <Radio.Group>
//             <Radio value="yes">Yes</Radio>
//             <Radio value="no">No</Radio>
//           </Radio.Group>
//         </Form.Item>

//         <Form.Item name="mentalHealth" label="Mental Health Conditions (e.g., anxiety, depression)"> 
//           <Input.TextArea placeholder="Describe any mental health conditions" />
//         </Form.Item>

//         <Form.Item name="cognitiveFunction" label="Cognitive Functioning (memory issues, concentration problems)"> 
//           <Input.TextArea placeholder="Describe any cognitive issues" />
//         </Form.Item>

//         <div className="form-buttons">
//           <Button type="default" onClick={() => form.resetFields()}>Reset</Button>
//           <Button type="primary" htmlType="submit">Submit</Button>
//         </div>
//       </Form>
//     </div>
//   );
// };

// export default MedicalForm;

// import React, { useState } from "react";
// import { Form, Radio, Collapse, Input, Button, message } from "antd";
// import axios from "axios";
// import "antd/dist/reset.css";
// import './MedicalForm.css';

// const { Panel } = Collapse;

// const MedicalForm = () => {
//   const [form] = Form.useForm();
//   const [showMedicalFields, setShowMedicalFields] = useState(false);
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

//   const handleInputChange = (disease, value) => {
//     setInputs((prev) => ({ ...prev, [disease]: value }));
//   };

//   const handleSubmit = async (disease) => {
//     if (!inputs[disease]) {
//       message.warning(`Please enter data for ${disease}`);
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:5000/api/disease", {
//         disease,
//         details: inputs[disease],
//       });
//       console.log("Response:", response.data);
//       message.success(`${disease} data saved successfully!`);
//       setInputs((prev) => ({ ...prev, [disease]: "" }));
//     } catch (error) {
//       console.error("Error submitting data:", error);
//       message.error("Failed to save data.");
//     }
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
//       <h1>Medical Assessment Form</h1>
//       <Form
//         form={form}
//         layout="vertical"
//         onFinish={onFinish}
//         className="medical-form"
//       >
//         <Form.Item name="medicalCondition" label="Do you have any diagnosed medical conditions?" rules={[{ required: true }]}> 
//           <Radio.Group onChange={handleMedicalConditionChange}>
//             <Radio value="yes">Yes</Radio>
//             <Radio value="no">No</Radio>
//           </Radio.Group>
//         </Form.Item>

//         {showMedicalFields && (
//           <Collapse accordion>
//             {diseases.map((disease) => (
//               <Panel header={disease} key={disease}>
//                 <Input
//                   placeholder={`Enter details for ${disease}`}
//                   value={inputs[disease] || ""}
//                   onChange={(e) => handleInputChange(disease, e.target.value)}
//                 />
//                 <Button
//                   type="primary"
//                   style={{ marginTop: "10px" }}
//                   onClick={() => handleSubmit(disease)}
//                 >
//                   Save {disease}
//                 </Button>
//               </Panel>
//             ))}
//           </Collapse>
//         )}

//         <Form.Item name="surgery" label="Past Surgery">
//           <Radio.Group>
//             <Radio value="yes">Yes</Radio>
//             <Radio value="no">No</Radio>
//           </Radio.Group>
//         </Form.Item>

//         <Form.Item name="forgetMedication" label="Do you often forget to take your medications?" rules={[{ required: true }]}> 
//           <Radio.Group>
//             <Radio value="yes">Yes</Radio>
//             <Radio value="no">No</Radio>
//           </Radio.Group>
//         </Form.Item>

//          <Form.Item name="allergie" label="Allergie">
//                   <Input placeholder="Enter the allergie" />
//                 </Form.Item>
        
//         <Form.Item name="mentalHealth" label="Mental Health Conditions (e.g., anxiety, depression)"> 
//           <Input.TextArea placeholder="Describe any mental health conditions" />
//         </Form.Item>

//         <Form.Item name="cognitiveFunction" label="Cognitive Functioning (memory issues, concentration problems)"> 
//           <Input.TextArea placeholder="Describe any cognitive issues" />
//         </Form.Item>

//         <div className="form-buttons">
//           <Button type="default" onClick={() => form.resetFields()}>Reset</Button>
//           <Button type="primary" htmlType="submit">Submit</Button>
//         </div>
//       </Form>
//     </div>
//   );
// };

// export default MedicalForm;

import React, { useState } from "react";
import { Form, Radio, Collapse, Input, Button, message } from "antd";
import axios from "axios";
import "antd/dist/reset.css";
import './MedicalForm.css';

const { Panel } = Collapse;

const MedicalForm = () => {
  const [form] = Form.useForm();
  const [showMedicalFields, setShowMedicalFields] = useState(false);
  const [showSurgeryField, setShowSurgeryField] = useState(false);
  const [inputs, setInputs] = useState({});

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

  const handleMedicalConditionChange = (e) => {
    setShowMedicalFields(e.target.value === "yes");
  };

  const handleSurgeryChange = (e) => {
    setShowSurgeryField(e.target.value === "yes");
  };

  const handleInputChange = (disease, value) => {
    setInputs((prev) => ({ ...prev, [disease]: value }));
  };

  const handleSubmit = async (disease) => {
    if (!inputs[disease]) {
      message.warning(`Please enter data for ${disease}`);
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/disease", {
        disease,
        details: inputs[disease],
      });
      console.log("Response:", response.data);
      message.success(`${disease} data saved successfully!`);
      setInputs((prev) => ({ ...prev, [disease]: "" }));
    } catch (error) {
      console.error("Error submitting data:", error);
      message.error("Failed to save data.");
    }
  };

  const onFinish = async (values) => {
    try {
      const response = await axios.post("http://localhost:5000/api/medical", values);
      console.log("Response:", response.data);
      message.success("Form submitted successfully!");
      form.resetFields();
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("Failed to submit form!");
    }
  };

  return (
    <div className="form-container">
      <h1>Medical Assessment Form</h1>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="medical-form"
      >
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
                <Input
                  placeholder={`Enter details for ${disease}`}
                  value={inputs[disease] || ""}
                  onChange={(e) => handleInputChange(disease, e.target.value)}
                />
                <Button
                  type="primary"
                  style={{ marginTop: "10px" }}
                  onClick={() => handleSubmit(disease)}
                >
                  Save {disease}
                </Button>
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
          <Button type="default" onClick={() => form.resetFields()}>Reset</Button>
          <Button type="primary" htmlType="submit">Submit</Button>
        </div>
      </Form>
    </div>
  );
};

export default MedicalForm;

