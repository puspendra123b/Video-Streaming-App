import { useEffect, useNavigate } from "react";

export function Landing() {
//   const navigate = useNavigate()


  const handleClick = () => {
    fetch("http://localhost:3000/auth", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }).then(async (res) => {
      const result = await res.json();
      console.log(result);
    });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="font-semibold text-3xl self-center">Admin Console</h1>
      <button
        onClick={handleClick}
        className="mt-4 border rounded-md bg-blue-400 p-2"
      >
        Sign In With Google
      </button>
    </div>
  );
}
