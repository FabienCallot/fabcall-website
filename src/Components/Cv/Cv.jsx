import React, { useEffect } from "react";
import "./cv.scss";
import cv from "../../Docs/Cv-Fabien-Callot.pdf";
import { scrollToTop } from "../../utils/scrollToTop";

const Cv = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div>
      <iframe
        className="pdf-js-viewer"
        src={`lib/web/viewer.html?file=${cv}`}
        height={500}
      ></iframe>
    </div>
  );
};

export default React.memo(Cv);
