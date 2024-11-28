import { useState, useEffect } from 'react';

const VideoPlayer = ({ fileId }) => {
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    if (fileId) {
        console.log(fileId);
      // Construct the URL for streaming
    //   const url = `http://localhost:3000/stream/${fileId}`;
    //   setVideoUrl(url);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "multipart/form-data");
    myHeaders.append("Authorization", "Bearer xyz");

    // const formdata = new FormData();
    // formdata.append("video", fileInput.files[0], "/path/to/file");

    const requestOptions = {
    method: "GET",
    headers: myHeaders,
    // body: formdata,
    redirect: "follow"
    };

    fetch(`http://localhost:3000/stream/${fileId}`, requestOptions)
    .then((response) => {
        console.log(response.url);
        setVideoUrl(response.url)
    })
    
        }
    }, []);

  return (
    <div>
      <h1>Video Player</h1>
      {videoUrl ? (
        <video width="640" height="480" controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>Loading video...</p>
      )}
    </div>
  );
};

export default VideoPlayer;
