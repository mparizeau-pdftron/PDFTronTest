import React from "react";
import { Core } from "@pdftron/webviewer";
import { saveAs } from "file-saver";

function App() {
  const saveBufferAsPDFDoc = (buf, name) => {
    saveBuffer(buf, name, "application/pdf");
  };

  const saveBuffer = (buf, name, mimetype) => {
    const blob = new Blob([buf], {
      type: mimetype,
    });
    saveAs(blob, name);
  };

  const generatePdfDocument = () => {
    const PDFNet = Core.PDFNet;
    const convertOfficeToPDF = (inputUrl, outputName, l) =>
      Core.office2PDFBuffer(inputUrl, { l }).then((buffer) => {
        saveBufferAsPDFDoc(buffer, outputName);
        console.log(`Finished downloading ${outputName}`);
      });

    const runOfficeToPDF = (inputUrl, type) => {
      PDFNet.initialize()
        .then(() => convertOfficeToPDF(inputUrl, `converted_${type}.pdf`))
        .then(() => {
          console.log("Test Complete!");
        })
        .catch((err) => {
          console.log("An error was encountered! :(", err);
        });
    };

    runOfficeToPDF("https://docxtemplater.com/tag-example.docx", "DOCX");
  };

  return (
    <>
      <h1>Generate PDF DOCUMENT WITH THE example you have provided for us</h1>
      <button onClick={generatePdfDocument}>Generate PDF</button>
    </>
  );
}

export default App;
