import React from 'react';
import './cv.scss';
const Cv = () => {
  return (
    <div>
      <iframe
        className="pdf-js-viewer"
        src="lib/web/viewer.html"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default React.memo(Cv);
