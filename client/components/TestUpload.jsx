import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import $ from "jquery";

const TestUpload = () => {
  const [file, setFile] = useState(null);
  const [showUpload, setShowUpload] = useState(false);

  const changeFile = (e) => {
    const fileURL = URL.createObjectURL(e.target.files[0]);
    console.log(e.target.files[0]);
    setFile(fileURL);
  };

  const submitAudio = (e) => {
    setShowUpload(true);
  };
  return (
    <>
      <form action="/upload" method="Post">
        <input type="file" id="a" title="Upload File" onChange={changeFile} />
        <button type="button" onClick={submitAudio}>
          submit
        </button>
      </form>
      {showUpload && (
        <audio id="audio" controls controlsList="nodownload">
          <source src={file} id="src" />
        </audio>
      )}
    </>
  );
};

export default TestUpload;
