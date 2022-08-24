import React from 'react';
import './cv.scss';
import cv from '../../Docs/Cv-Fabien-Callot.pdf';
const Cv = () => {
  return (
    <div>
      <iframe
        className="pdf-js-viewer"
        src={`lib/web/viewer.html?file=${cv}`}
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default React.memo(Cv);
