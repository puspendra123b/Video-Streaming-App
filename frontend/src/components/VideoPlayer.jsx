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
    myHeaders.append("Authorization", "Bearer ya29.a0AcM612zDM6BryCuGWxCPXzRUJJhYk_fErBEN_AAbVDtrtThUvNUDbVb7iSyDZ85g9gAcaf2l37-yJHfZukk6jWXcZyUtM5m-ydsE3bH1lK1yVUvkv2Lc4QqfAsg3US9RswtURbl2lZc0lqA8gbKSMp0SoDdbCFbFEI1raCgYKASoSARMSFQHGX2MiWYHLUVCdxX4-M0x_yN6cdA0171");

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
