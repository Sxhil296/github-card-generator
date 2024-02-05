import React from "react";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

const CardDownloader = ({ cardId }) => {
  const downloadAsImage = async () => {
    const cardElement = document.getElementById(cardId);

    if (!cardElement) {
      console.error("Card element not found");
      return;
    }

    const canvas = await html2canvas(cardElement);
    const imgData = canvas.toDataURL("image/png");

    // Convert canvas to PNG Blob
    canvas.toBlob((blob) => {
      // Save the Blob as a file using FileSaver.js
      saveAs(blob, "user-card.png");
    }, "image/png");
  };

  return (
    <button onClick={downloadAsImage} className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      Download as PNG
    </button>
  );
};

export default CardDownloader;
