import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import './Schedule.css'
// Set root element for accessibility
Modal.setAppElement("#root");

const Schedule = () => {
  const [schedule, setSchedule] = useState([]); // State for schedule data
  const [showPreview, setShowPreview] = useState(false); // State for preview modal

  // Fetch schedule data from backend
  useEffect(() => {
    fetch("https://your-api-endpoint.com/schedule") // Replace with your actual API
      .then((response) => response.json())
      .then((data) => setSchedule(data))
      .catch((error) => console.error("Error fetching schedule:", error));
  }, []);

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2>Weekly Schedule</h2>
      <button onClick={() => setShowPreview(true)}>Preview Schedule</button>

      {/* Modal for schedule preview */}
      <Modal
        isOpen={showPreview}
        onRequestClose={() => setShowPreview(false)}
        style={{
          content: {
            width: "60%",
            margin: "auto",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <h3>Schedule Preview</h3>
        <table border="1" style={{ width: "100%", marginTop: "10px" }}>
          <thead>
            <tr>
              <th>Day</th>
              <th>Task</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((item, index) => (
              <tr key={index}>
                <td>{item.day}</td>
                <td>{item.task}</td>
                <td>{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={() => setShowPreview(false)}>Close</button>
      </Modal>
    </div>
  );
};

export default Schedule;
