import { useState } from "react";
import UploadVideo from "./UploadVideo";
import { EpisodeTray } from "./EpisodeTray";

export function Episodes() {
  const [display, setDisplay] = useState(true);

  return (
    <div className="flex h-screen justify-around">
      <div className="mt-20">
        <h3 className="font-bold text-2xl">Collection name</h3>
        <div className="flex justify-between mt-2">
          <button className="border rounded-md p-2 bg-red-500">
            Delete Collection
          </button>
          <button
            onClick={() => {
              setDisplay((prev) => !prev);
            }}
            className="border rounded-md p-2 bg-blue-400"
          >
            {display === true ? "Add Episode" : "Hide the add ep window"}
          </button>
        </div>
        <div className={`${display === true ? "hidden" : "block"}`}>
          <UploadVideo />
        </div>
      </div>
      <div className="mt-10">
        <EpisodeTray />
      </div>
    </div>
  );
}
