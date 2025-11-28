import { Link } from "react-router-dom";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

const Signup = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-purple-100">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">HireReadyAI</h2>

      <div className="bg-white p-10 rounded-2xl shadow-xl w-80">
        <h3 className="text-center text-2xl font-semibold text-purple-600">
          Sign Up
        </h3>
        <p className="text-center text-gray-500 text-sm mb-6">
          Please register to continue
        </p>

        <div className="space-y-4">

          {/* Name */}
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-full">
            <FiUser className="text-gray-600" />
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>

          {/* Email */}
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-full">
            <FiMail className="text-gray-600" />
            <input
              type="email"
              placeholder="Email ID"
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>

          {/* Password */}
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-full">
            <FiLock className="text-gray-600" />
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>

          <p className="text-right text-xs text-gray-500 hover:text-purple-600 cursor-pointer">
            Forget Password?
          </p>

          <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-md transition">
            Signup
          </button>
        </div>

        <p className="text-center text-xs text-gray-500 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-600 hover:underline">
            Click Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
