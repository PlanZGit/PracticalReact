import React, { useState } from "react";

function UploadFile() {
  const [files, setFiles] = useState(undefined);
  const [storedFiles, setStoredFiles] = useState([]);
  // console.log("F", files);
  // console.log("SF ", storedFiles);
  // console.log(typeof storedFiles);

  return (
    <div>
      UploadFile
      <input
        type="file"
        onChange={(e) => {
          setFiles(e.target.files);
        }}
        accept="image/png, image/gif, image/jpeg, image/bmp"
        multiple
      ></input>
      <button
        onClick={() => {
          if (files) {
            let array = Object.values(files);
            setStoredFiles(storedFiles.concat(array));
          }
        }}
      >
        Save Files
      </button>
      <section id="image-section">
        <p>Preview</p>
        {files
          ? Object.values(files).map((ele, index) => {
              return (
                <img
                  style={{ width: "200px" }}
                  src={URL.createObjectURL(ele)}
                  key={index}
                  alt={ele.name}
                ></img>
              );
            })
          : null}
        <div>
          <p>Saved Files</p>
          {storedFiles.length > 0
            ? storedFiles.map((ele, index) => {
                return (
                  <img
                    style={{ width: "200px" }}
                    src={URL.createObjectURL(ele)}
                    key={index}
                    alt={ele.name}
                  ></img>
                );
              })
            : null}
        </div>
      </section>
    </div>
  );
}

export default UploadFile;
