import { useState } from "react";

const HebrewConverter = () => {
  const [hebrewText, setHebrewText] = useState("");
  const [convertedData, setConvertedData] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:3000/api/convert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: hebrewText }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error al convertir el texto");
      }

      setConvertedData(data.data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Conversor Hebreo a Binario</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={hebrewText}
            onChange={(e) => setHebrewText(e.target.value)}
            placeholder="Ingresa texto en hebreo"
          />
          <button type="submit">Convertir</button>
        </div>
      </form>

      {error && <p>Error: {error}</p>}

      {convertedData.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Palabra</th>
              <th>Valor Numérico</th>
              <th>Valor Binario</th>
            </tr>
          </thead>
          <tbody>
            {convertedData.map((item, index) => (
              <tr key={index}>
                <td>{item.word}</td>
                <td>{item.numericValue}</td>
                <td>{item.binaryValue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default HebrewConverter;
