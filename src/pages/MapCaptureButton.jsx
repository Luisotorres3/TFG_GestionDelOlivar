import React from 'react';
import html2canvas from 'html2canvas';
import styles from '../styles/TreeCount.module.css';

const MapCaptureButton = ({ format, onCapture }) => {
  const captureMap = async () => {
    try {
      const mapContainer = document.getElementById('map');

      if (mapContainer) {
        const containerRect = mapContainer.getBoundingClientRect();

        // Capturar un cuadrado de 100x100 píxeles desde el centro del mapa
        const squareSize = 400;
        const centerX = containerRect.width / 2;
        const centerY = containerRect.height / 2;

        const canvas = await html2canvas(mapContainer, {
          width: squareSize,
          height: squareSize,
          x: centerX - squareSize / 2,
          y: centerY - squareSize / 2,
          useCORS: true, // Habilitar CORS para las imágenes
        });

        const grayscaleCanvas = convertToBlackAndWhite(canvas);

        // Convertir el canvas de escala de grises a formato base64
        const imgData = grayscaleCanvas.toDataURL(`image/${format}`);
        onCapture(imgData);
      }
    } catch (error) {
      console.error('Error capturing map:', error);
    }
  };

  const convertToBlackAndWhite = (canvas) => {
    const context = canvas.getContext('2d');
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      // Calcular el valor promedio de los componentes de color
      const averageValue = (data[i] + data[i + 1] + data[i + 2]) / 3;

      // Establecer cada componente de color en blanco (255) o negro (0)
      const newValue = averageValue > 127 ? 255 : 0;

      data[i] = newValue;       // Rojo
      data[i + 1] = newValue;   // Verde
      data[i + 2] = newValue;   // Azul
    }

    context.putImageData(imageData, 0, 0);

    return canvas;
  };

  return (
    <button className={styles.procesarBoton} onClick={captureMap}>
      Procesar Imagen
    </button>
  );
};

export default MapCaptureButton;
