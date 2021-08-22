import { useState } from "react";
import UploadSample from "../../Components/upload-sample/upload-sample";

const Discover: React.FC = () => {
  const [showUpload, setShowUpload] = useState(false);

  return (
    <div>
      <h1>Discover</h1>
      <button onClick={() => setShowUpload(true)}>Upload</button>
      {showUpload && (
        <div>
          <button onClick={() => setShowUpload(false)}>Close</button>
          <UploadSample />
        </div>
      )}
    </div>
  );
};

export default Discover;
