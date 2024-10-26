import styles from "../../styles/informes/informe.module.css";
import { useState } from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";
import { useUserStorage } from "../../utils/storage/login/useUserStorage";



export const Informes = () => {
  const [documentType, setDocumentType] = useState("TI");
  const [documentNumber, setDocumentNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const data = useUserStorage()

  if (!data?.res) {
    return (
      <div className={styles.loginContainer}>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <div className={styles.formGroup}>
            <label>Tipo de Documento:</label>
            <select
              className={styles.input}
              value={documentType}
              onChange={(e) => setDocumentType(e.target.value)}
            >
              <option value="TI">Tarjeta de Identidad (TI)</option>
              <option value="CC">Cédula de Ciudadanía (CC)</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>Número de Documento:</label>
            <input
              type="text"
              className={styles.input}
              value={documentNumber}
              onChange={(e) => setDocumentNumber(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Contraseña:</label>
            <input
              type="password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" className={styles.button}>
            Ingresar
          </button>
        </form>
      </div>
    );
  }

  // El resto del componente permanece igual...
  const chartData = data?.res.grades.map((grade) => ({
    subject: grade.subject,
    final: grade.final,
  }));

  return (
    <div className={styles.container}>
      <h1>Informe Académico - {data?.res.name}</h1>
      <p>
        Documento: {data?.res.documentType} {data?.res.documentNumber}
      </p>

      <table className={styles.gradesTable}>
        <thead>
          <tr>
            <th>Materia</th>
            <th>Código</th>
            <th>Nota 1</th>
            <th>Nota 2</th>
            <th>Nota 3</th>
            <th>Final</th>
            <th>Puntos</th>
          </tr>
        </thead>
        <tbody>
          {data?.res.grades.map((grade, index) => (
            <tr key={index}>
              <td>{grade.subject}</td>
              <td>{grade.code}</td>
              {grade.grades.map((g, i) => (
                <td key={i}>{g}</td>
              ))}
              <td>{grade.final}</td>
              <td>{grade.points}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{width:'900px',maxWidth:'100%', height:'500px',maxHeight:'100%'}} className={styles.chartContainer}>
        <h2>Gráfico de Notas Finales</h2>
        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={20}
          height={300}
        >
          <VictoryAxis
            tickFormat={(x) => x}
            style={{
              tickLabels: { angle: -45, padding: 20 },
            }}
          />
          <VictoryAxis
            dependentAxis
            domain={[0, 10]}
            tickFormat={(y) => `${y}`}
          />
          <VictoryBar
            data={chartData}
            x="subject"
            y="final"
            style={{
              data: { fill: "#0066cc" },
            }}
          />
        </VictoryChart>
      </div>
    </div>
  );
};
