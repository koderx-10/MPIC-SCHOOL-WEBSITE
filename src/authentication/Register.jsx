import { GraduationCap } from "lucide-react";
import { X } from "lucide-react";

const Register = ({ setToggle }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-950 via-blue-900 to-slate-900 px-4">
      <div className="w-full max-w-md bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-8">
        <div className="flex justify-end">
          <button onClick={() => setToggle((prev) => !prev)}>
            <X />
          </button>
        </div>
        {/* Logo & Heading */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto rounded-full bg-blue-900 flex items-center justify-center shadow-lg">
            <GraduationCap className="text-white w-8 h-8" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mt-4">
            Create Account
          </h2>

          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Join the MPIC Student Portal
          </p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
          />

          <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-xl transition-all shadow-md hover:shadow-lg">
            Sign Up
          </button>
        </div>

        {/* Toggle */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <span
            className="text-amber-600 font-semibold cursor-pointer hover:text-amber-700"
            onClick={() => setToggle((prev) => !prev)}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
