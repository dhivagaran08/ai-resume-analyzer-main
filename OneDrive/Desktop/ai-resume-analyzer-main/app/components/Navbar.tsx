import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[#0A0E1A] text-white shadow-md">
      {/* Left side - Logo */}
      <Link to="/" className="flex flex-col">
        <span className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent subpixel-antialiased">
          CSA1523
        </span>
        <span className="text-sm text-gray-300">Resume Analyzer</span>
      </Link>

      {/* Right side - Personal Info + Upload */}
      <div className="flex items-center gap-6">
        <div className="text-right space-y-1 text-sm">
          <p>📧 dhivadhivagaran08@gmail.com</p>
          <p>📍 Chennai</p>
          <p>👤 M Dhivagaran</p>
        </div>

        <Link
          to="/upload"
          className="primary-button px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition"
        >
          Upload Resume
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
