import { useNavigate } from "react-router-dom";
import { HiCog, HiRefresh } from "react-icons/hi";
import { FaFileAlt, FaUpload, FaChartBar } from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-poppins">

      {/* ---------- TOP NAV ---------- */}
      <header className="flex justify-between items-center px-6 md:px-16 py-4 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">
          HireReady<span className="text-purple-600">AI</span>
        </h1>

        <div className="flex items-center gap-6 text-2xl text-gray-700 cursor-pointer">
          <HiCog className="hover:text-purple-600 transition" />
          <HiRefresh className="hover:text-purple-600 transition" />
        </div>
      </header>

      {/* ---------- MAIN ---------- */}
      <main className="px-6 md:px-16 pt-20 flex flex-col items-center text-center relative">

        {/* Blurred Background Glow */}
        <div className="absolute w-[600px] h-[600px] bg-purple-200 opacity-40 blur-[150px] -z-10"></div>

        {/* Welcome Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-normal">
          Welcome back, <br />
          <span className="text-purple-600 underline">USER 👋</span>
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          Your career tools are ready. What do you want to do today?
        </p>

        {/* ---------- ACTION CARDS ---------- */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">

          {/* Card 1 */}
          <div className="bg-white px-8 py-10 rounded-2xl shadow-md border hover:shadow-lg transition cursor-pointer">
            <FaFileAlt className="text-3xl text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Create Resume</h3>
            <ul className="text-gray-500 text-sm mt-4 space-y-2">
              <li>Start from scratch</li>
              <li>Use templates</li>
              <li>AI-generated resume option</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white px-8 py-10 rounded-2xl shadow-md border hover:shadow-lg transition cursor-pointer">
            <FaUpload className="text-3xl text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Upload Resume</h3>
            <ul className="text-gray-500 text-sm mt-4 space-y-2">
              <li>Upload PDF/DOCX</li>
              <li>Auto-analysis</li>
              <li>AI suggestions</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white px-8 py-10 rounded-2xl shadow-md border hover:shadow-lg transition cursor-pointer">
            <FaChartBar className="text-3xl text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Results</h3>
            <ul className="text-gray-500 text-sm mt-4 space-y-2">
              <li>Start interview</li>
              <li>Choose role/domain</li>
              <li>Voice or text mode</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
