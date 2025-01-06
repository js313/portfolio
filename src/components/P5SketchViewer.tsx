import React from "react";
import { useP5Sketch } from "hooks/useP5Sketch";

interface P5SketchViewerProps {
  selectedId: string | number;
  onClose: () => void;
}

const P5SketchViewer: React.FC<P5SketchViewerProps> = ({
  selectedId,
  onClose,
}) => {
  const { data: sketchCode, isLoading, isError } = useP5Sketch(selectedId);

  if (isError) onClose();

  return (
    <div
      className={`fixed inset-0 ${
        isLoading ? "bg-black bg-opacity-50" : "br-background bg-opacity-100"
      } z-50 flex items-center justify-center w-dvh h-dvh`}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-2xl font-bold focus:outline-none"
      >
        &times;
      </button>
      {!isLoading && !isError && (
        // Don't like this, improve implementation
        <iframe
          title="P5 Sketch Viewer"
          srcDoc={`<html>
          <head><script src="https://cdn.jsdelivr.net/npm/p5@1.11.2/lib/p5.min.js"></script></head>
          <body>
            <script>${sketchCode}</script>
          </body>
        </html>`}
          className="w-full h-full"
          sandbox="allow-scripts"
        />
      )}
    </div>
  );
};

export default P5SketchViewer;
