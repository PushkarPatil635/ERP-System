// "use client";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
  
//   // Replace useHistory with useNavigate
//   const navigate = useNavigate(); // Initialize navigate for redirection

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Your login logic here, assuming success
//     if (username === "admin" && password === "admin") {
//       // Redirect to home page upon successful login
//       navigate("/home"); // Use navigate for redirection
//     } else {
//       setError("Invalid credentials");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//     <div className="w-full max-w-sm p-6 bg-white rounded shadow-md">
//       <h2 className="mb-4 text-xl font-bold text-center">Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <input
//             type="text"
//             placeholder="Username"
//             className="w-full p-2 border rounded"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full p-2 border rounded"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         {error && <p className="text-red-500">{error}</p>}
//         <button
//           type="submit"
//           className="w-full p-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   </div>
//   );
// };

// export default Login;



"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin") {
      navigate("/home");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
        <h2 className="mb-6 text-3xl font-semibold text-center text-gray-800">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="mb-4 text-center text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none transition-all"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
