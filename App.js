import React, { useState } from "react";

const App = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      name: "John Doe",
      reason: "Routine Checkup",
      date: "2024-08-05",
      status: "scheduled",
    },
    {
      id: 2,
      name: "Jane Smith",
      reason: "Consultation",
      date: "2024-08-06",
      status: "scheduled",
    },
    {
      id: 3,
      name: "Mary Johnson",
      reason: "Follow-up",
      date: "2024-08-07",
      status: "scheduled",
    },
  ]);

  const completedCount = appointments.filter(
    (appointment) => appointment.status === "completed"
  ).length;

  const markAsCompleted = (id) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.id === id
          ? { ...appointment, status: "completed" }
          : appointment
      )
    );
  };

  const styles = {
    container: {
      padding: "20px",
      fontFamily: "'Poppins', sans-serif",
      background: "linear-gradient(135deg, #f093fb, #f868fb)",
      color: "#333",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    header: {
      fontSize: "28px",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: "20px",
      color: "#ffffff",
    },
    card: {
      border: "1px solid #fff",
      borderRadius: "8px",
      padding: "15px",
      marginBottom: "15px",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#ffffff",
      width: "100%",
      maxWidth: "400px",
    },
    button: {
      backgroundColor: "#6c5ce7",
      color: "#ffffff",
      padding: "8px 16px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "14px",
      marginTop: "10px",
      transition: "background-color 0.3s",
    },
    completedName: {
      textDecoration: "line-through",
      color: "#b2bec3",
    },
    totalCompleted: {
      fontWeight: "bold",
      textAlign: "center",
      marginTop: "20px",
      color: "#ffffff",
      fontSize: "18px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>Patient Appointments</div>
      {appointments.map((appointment) => (
        <div key={appointment.id} style={styles.card}>
          <div
            style={
              appointment.status === "completed" ? styles.completedName : {}
            }
          >
            <strong>{appointment.name}</strong>
          </div>
          <div>{appointment.reason}</div>
          <div>{appointment.date}</div>
          <div>Status: {appointment.status}</div>
          {appointment.status === "scheduled" && (
            <button
              style={styles.button}
              onClick={() => markAsCompleted(appointment.id)}
            >
              Mark as Completed
            </button>
          )}
        </div>
      ))}
      <div style={styles.totalCompleted}>
        Total Completed Appointments: {completedCount}
      </div>
    </div>
  );
};

export default App;
