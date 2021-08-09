import React from "react";

function App() {
  const generatePdfDocument = () => {
    return alert(`Generate PDF out of the docx document "PDF DOCUMENT" `);
  };

  return (
    <>
      <h1>Generate PDF DOCUMENT WITH THE example you have provided for us</h1>
      <button onClick={generatePdfDocument}>Generate PDF</button>
    </>
  );
}

export default App;
