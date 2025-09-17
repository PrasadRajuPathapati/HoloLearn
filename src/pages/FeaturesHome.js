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
      <section className="relative w-full bg-black">
  {/* 🔹 Video Wrapper */}
  <div className="relative w-full h-0 pb-[56.25%]">
    <video
      autoPlay
      loop
      muted={muted}
      playsInline
      preload="auto"
      className="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="/videos/hololearn.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50" />

    {/* Navbar */}
    <nav className="flex justify-between items-center px-6 py-6 absolute top-0 w-full z-20">
      <h1 className="text-xl font-bold">HoloLearn</h1>
      <ul className="flex gap-6 text-gray-300 text-sm font-medium">
        {["Home", "Features", "About", "Contact"].map((item, idx) => (
          <li
            key={idx}
            className="cursor-pointer hover:text-white"
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>

    {/* Unmute Button */}
    <button
      onClick={toggleMute}
      className="absolute bottom-4 right-4 bg-black/60 px-4 py-2 rounded-lg text-white text-sm z-30"
    >
      {muted ? "🔊 Unmute" : "🔇 Mute"}
    </button>
  </div>

  {/* 🔹 Features Grid directly below video */}
  <section className="max-w-6xl mx-auto px-6 py-12 relative z-10">
    <h2 className="text-2xl font-bold mb-8 text-center">Features</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((f, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="p-6 rounded-2xl bg-gray-900 border border-gray-800 shadow-lg hover:bg-gray-800 cursor-pointer"
        >
          <h3 className="text-lg font-bold mb-2">{f.title}</h3>
          <p className="text-gray-400 text-sm">{f.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
</section>


      {/* 🔹 Footer */}
      <footer className="text-center text-gray-500 py-6 sm:py-8 border-t border-gray-800 text-xs sm:text-sm">
        © {new Date().getFullYear()} Team HoloLearn
      </footer>
    </div>
  );
}
