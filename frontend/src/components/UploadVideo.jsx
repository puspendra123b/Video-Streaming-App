import { useState } from "react";
import { CollectionTray } from "./CollectionTray";

const UploadVideo = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileId, setFileId] = useState(null);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first");
      return;
    }

    const formdata = new FormData();
    formdata.append("video", selectedFile);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://localhost:3000/upload",
        requestOptions
      );
      const result = await response.json();
      if (response.ok) {
        console.log(result);
        setFileId(result.fileId); // Assuming the server returns fileId
      } else {
        console.error("Error uploading file:", result);
        alert("Error uploading file: " + result.message);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading file: " + error.message);
    }
  };

  return (
    // <div className="bg-slate-200 flex flex-col p-4 gap-4 mt-4 rounded-lg">
    //   <h1 className="font-bold">Upload Video</h1>
    //   <div>
    //     <label className="block text-sm font-medium text-gray-700">
    //       Title
    //     </label>
    //     <textarea
    //       value={title}
    //       onChange={(e) => setTitle(e.target.value)}
    //       className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
    //       placeholder="Enter title"
    //       required
    //     />
    //   </div>
    //   <label htmlFor="">Collection Name</label>
    //   <input type="file" accept="video/*" onChange={handleFileChange} />
    //   <button className="border rounded-md p-2 bg-blue-500" onClick={handleUpload}>Upload</button>
    // </div>
    <div className="flex ">
      <div className="max-w-lg mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-4">Upload Video</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleUpload();
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter title"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter description"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Video
            </label>
            <input
              type="file"
              accept="video/*"
              onChange={handleFileChange}
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadVideo;
