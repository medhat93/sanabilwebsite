import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Generate transparent-background favicon from the logo icon
const img = new Image();
img.crossOrigin = 'anonymous';
img.src = new URL('./assets/sanabil-icon.png', import.meta.url).href;
img.onload = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.drawImage(img, 0, 0, 32, 32);
    const imageData = ctx.getImageData(0, 0, 32, 32);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i], g = data[i + 1], b = data[i + 2];
      if (r < 40 && g < 40 && b < 40) {
        data[i + 3] = 0;
      }
    }
    ctx.putImageData(imageData, 0, 0);
    const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement
      || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = canvas.toDataURL('image/png');
    document.head.appendChild(link);
  }
};

createRoot(document.getElementById("root")!).render(<App />);
