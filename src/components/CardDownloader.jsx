import React, { useRef } from "react";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

const CardDownloader = ({ cardId }) => {
  const cardRef = useRef(null);

  const downloadAsImage = async () => {
    const cardElement = document.getElementById(cardId);

    if (!cardElement) {
      console.error("Card element not found");
      return;
    }

    cardRef.current = cardElement;

    try {
      const canvas = await html2canvas(cardRef.current, { scale: 3 });
      const imgData = canvas.toDataURL("image/png");
      saveAs(imgData, "user-card.png");
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  return (
    <button
      onClick={downloadAsImage}
      className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Download as PNG
    </button>
  );
};

export default CardDownloader;
