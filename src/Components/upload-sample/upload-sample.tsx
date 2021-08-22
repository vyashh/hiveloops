import { useState } from "react";
import { storage } from "../../Services/firebase";

const UploadSample: React.FC = () => {
  const [fileLoaded, setFileLoaded] = useState<Boolean>(false);
  const [selectedSample, setSelectedSample] = useState(null);

  const onFileChangeHandler = (e: any) => {
    setFileLoaded(!fileLoaded);
    console.log(e.target.files[0]);
    setSelectedSample(e.target.files[0]);
  };

  const uploadFile = (e: any) => {
    e.preventDefault();
    const storageRef = storage.ref();
    storageRef.put(selectedSample!).then((snapshot: any) => {
      console.log("uploaded file");
    });
  };

  return (
    <div>
      {fileLoaded && (
        <div>
          <div>
            <label>Sample Name</label>
            <input type="text" name="title" />
          </div>
          <div>
            <label>Genre</label>
            <input type="text" name="title" />
          </div>
          <div>
            <label>Category</label>
            <input type="text" name="title" />
          </div>
          <div>
            <label>BPM</label>
            <input type="text" name="title" />
          </div>
          <div>
            <label>Key</label>
            <input type="text" name="title" />
          </div>
        </div>
      )}

      <input
        onChange={onFileChangeHandler}
        type="file"
        id="myFile"
        name="filename"
        accept=".wav"
      />
      <button onClick={uploadFile}>Upload</button>
    </div>
  );
};

export default UploadSample;
