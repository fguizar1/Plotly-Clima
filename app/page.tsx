"use client";

import React, { useState } from "react";

const Page = () => {
  const charts = [
    { id: 1, name: "Gráfico 1", file: "Grafico1.html" },
    { id: 2, name: "Gráfico 2", file: "Grafico2.html" },
    { id: 3, name: "Gráfico 3", file: "Grafico3.html" },
  ];

  const [selectedChart, setSelectedChart] = useState(charts[0]);

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f0f4f8",
        minHeight: "100vh",
        color: "#333",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        🌍 Visualizador de Gráficos Climáticos
      </h1>

      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          listStyle: "none",
          padding: 0,
          marginBottom: "30px",
        }}
      >
        {charts.map((chart) => (
          <li key={chart.id}>
            <button
              onClick={() => setSelectedChart(chart)}
              style={{
                padding: "10px 20px",
                backgroundColor:
                  selectedChart.id === chart.id ? "#0070f3" : "#fff",
                color: selectedChart.id === chart.id ? "#fff" : "#0070f3",
                border: "2px solid #0070f3",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "all 0.3s ease",
              }}
            >
              {chart.name}
            </button>
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <iframe
          title="gráfico"
          src={`/plotly-charts/${selectedChart.file}`}
          style={{
            width: "80%",
            height: "600px",
            border: "2px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "#fff",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default Page;
