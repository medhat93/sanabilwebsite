import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Generate a crisp favicon from the clean wheat icon
const img = new Image();
img.crossOrigin = 'anonymous';
img.src = '/favicon-source.png';
img.onload = () => {
  // First, draw full-size to find bounding box of non-white pixels
  const tmp = document.createElement('canvas');
  tmp.width = img.naturalWidth;
  tmp.height = img.naturalHeight;
  const tmpCtx = tmp.getContext('2d');
  if (!tmpCtx) return;
  tmpCtx.drawImage(img, 0, 0);
  const full = tmpCtx.getImageData(0, 0, tmp.width, tmp.height);
  const d = full.data;

  let minX = tmp.width, minY = tmp.height, maxX = 0, maxY = 0;
  for (let y = 0; y < tmp.height; y++) {
    for (let x = 0; x < tmp.width; x++) {
      const i = (y * tmp.width + x) * 4;
      // Non-white, non-transparent pixel
      if (d[i + 3] > 20 && (d[i] < 240 || d[i + 1] < 240 || d[i + 2] < 240)) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  const cropW = maxX - minX + 1;
  const cropH = maxY - minY + 1;

  // Now draw cropped icon into 32x32 favicon with padding
  const size = 96;
  const padding = 4;
  const available = size - padding * 2;
  const scale = Math.min(available / cropW, available / cropH);
  const drawW = cropW * scale;
  const drawH = cropH * scale;

  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Transparent background — draw the cropped icon centered
  ctx.drawImage(
    tmp,
    minX, minY, cropW, cropH,
    (size - drawW) / 2, (size - drawH) / 2, drawW, drawH
  );

  // Set as favicon
  const link = document.querySelector("link[rel='icon'][type='image/svg+xml']") as HTMLLinkElement
    || document.querySelector("link[rel*='icon']") as HTMLLinkElement
    || document.createElement('link');
  link.type = 'image/png';
  link.rel = 'icon';
  link.href = canvas.toDataURL('image/png');
  document.head.appendChild(link);
};

createRoot(document.getElementById("root")!).render(<App />);
