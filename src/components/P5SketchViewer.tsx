import React, { useEffect, useState } from "react";
import { useP5Sketch } from "hooks/useP5Sketch";

interface P5SketchViewerProps {
  selectedId: string | number;
  onClose: () => void;
}

const P5SketchViewer: React.FC<P5SketchViewerProps> = ({
  selectedId,
  onClose,
}) => {
  const {
    data: sketchCode,
    isLoading: isFetching,
    isError,
  } = useP5Sketch(selectedId);
  const [iframeLoading, setIframeLoading] = useState(true);

  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = ""; // Restore scroll on cleanup
    };
  }, []);

  if (isError) onClose();

  return (
    <div
      className={`fixed inset-0 ${
        iframeLoading || isFetching
          ? "bg-black bg-opacity-50"
          : "bg-black bg-opacity-100"
      } z-50 flex items-center justify-center`}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-2xl font-bold focus:outline-none"
      >
        &times;
      </button>

      {!isFetching && !isError && (
        <iframe
          title="P5 Sketch Viewer"
          srcDoc={`<html>
          <head>
            <style>html, body { margin: 0; padding: 0; height: 100%; overflow: hidden; }</style>
            <script src="https://cdn.jsdelivr.net/npm/p5@1.11.2/lib/p5.min.js"></script>
          </head>
          <body>
            <script>${sketchCode}</script>
          </body>
        </html>`}
          className={`w-full h-full transition-opacity duration-500 ${
            iframeLoading ? "opacity-0" : "opacity-100"
          }`}
          sandbox="allow-scripts"
          onLoad={() => setIframeLoading(false)}
        />
      )}
    </div>
  );
};

export default P5SketchViewer;
