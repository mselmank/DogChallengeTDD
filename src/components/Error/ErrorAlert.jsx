import React from "react";

const styles = {
  mt: {
    marginTop: "16px",
  },
  alert: {
    backgroundColor: "#fff3cd",
    color: "#856404",
    borderColor: "#ffeeba",
    padding: "0.75rem 1.25rem",
    borderRadius: "0.25rem",
    marginBottom: "1rem",
  },
  link: {
    color: "#0d6efd",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

const ErrorAlert = ({}) => {
  return (
    <div style={styles.mt}>
      <div style={styles.alert}>Ingresa bien el nombre de la raza</div>
      <a href="/" style={styles.link}>
        Volver
      </a>
    </div>
  );
};

export default ErrorAlert;
