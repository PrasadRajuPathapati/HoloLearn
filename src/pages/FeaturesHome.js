import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // for hamburger menu icons

const features = [
  {
    title: "Sign Language → Speech → Text",
    description:
      "Helps hearing-impaired students by translating sign gestures into speech and text.",
  },
  {
    title: "Real-time Multilingual Translation",
    description: "Supports 10+ Indian languages offline.",
  },
  {
    title: "AR Learning with Holograms",
    description: "Interactive and visual lessons for better engagement.",
  },
  {
    title: "Voice + Image Teaching",
    description: "Guided learning for visually impaired students.",
  },
  {
    title: "Adaptive Curriculum",
    description:
      "Personalized learning paths based on student’s pace and ability.",
  },
  {
    title: "Offline Progress Tracking",
    description:
      "Parents and teachers can track performance without internet.",
  },
  {
    title: "Offline AI Tutor",
    description: "Lightweight models running locally on low-end smartphones.",
  },
];

export default function FeaturesHome() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans relative">
      {/* 🔹 Hero Video Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background video */}
<video
  ref={videoRef}
  autoPlay
  loop
  muted={muted}       // start muted so mobile allows autoplay
  playsInline         // required for iOS Safari
  controls={false}    // hide default controls
  className="absolute top-0 left-0 w-full h-full object-cover object-center"
>
  <source src="/videos/hololearn.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>


        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Navbar */}
        <nav className="flex justify-between items-center px-6 py-6 absolute top-0 w-full z-20">
          <h1 className="text-lg sm:text-xl font-bold">HoloLearn</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-gray-300 text-sm font-medium">
            {["Home", "Features", "About", "Contact"].map((item, idx) => (
              <li
                key={idx}
                className="cursor-pointer hover:text-white transition-colors"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-16 right-6 bg-gray-900 rounded-lg shadow-lg p-4 flex flex-col gap-4 md:hidden z-30">
            {["Home", "Features", "About", "Contact"].map((item, idx) => (
              <button
                key={idx}
                className="text-gray-300 hover:text-white text-left"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </button>
            ))}
          </div>
        )}

        {/* Unmute button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-6 right-6 bg-black/60 px-4 py-2 rounded-lg text-white text-sm sm:text-base z-30"
        >
          {muted ? "🔊 Unmute" : "🔇 Mute"}
        </button>
      </section>

      {/* 🔹 Features Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-5 sm:p-6 rounded-2xl bg-gray-900 border border-gray-800 shadow-lg hover:bg-gray-800 cursor-pointer"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                {f.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔹 Footer */}
      <footer className="text-center text-gray-500 py-6 sm:py-8 border-t border-gray-800 text-xs sm:text-sm">
        © {new Date().getFullYear()} Team HoloLearn
      </footer>
    </div>
  );
}
