import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const features = [
  {
    title: "Offline AI Tutor",
    description: "AI models run locally on smartphones without internet.",
    details:
      "HoloLearn's offline AI tutor enables students in rural areas to get AI-powered learning without requiring internet. Lessons are personalized, adaptive, and data is stored on-device."
  },
  {
    title: "Sign Language → Speech → Text",
    description: "Real-time sign gesture translation for hearing-impaired students.",
    details:
      "Transforms sign gestures into speech and text in real time. This helps teachers communicate with hearing-impaired students seamlessly."
  },
  {
    title: "Multilingual Translation",
    description: "Supports 10+ Indian languages offline.",
    details:
      "Ensures inclusivity by translating lessons into multiple regional languages — even without internet connectivity."
  },
  {
    title: "AR Learning with Holograms",
    description: "Interactive augmented reality lessons for engagement.",
    details:
      "Bring lessons to life! Students can interact with 3D holograms of planets, molecules, and historical events."
  },
  {
    title: "Voice + Image Teaching",
    description: "Guided lessons for visually impaired students.",
    details:
      "Lessons come with descriptive voice narration and braille-compatible outputs, making education more inclusive."
  },
  {
    title: "Offline Progress Tracking",
    description: "Parents & teachers track performance without internet.",
    details:
      "Tracks student scores, attendance, and growth offline and syncs automatically when online."
  },
];

const quotes = [
  "Education is the most powerful weapon to change the world.",
  "Learning never exhausts the mind.",
  "Technology empowers inclusive learning.",
  "Knowledge grows when shared.",
];

const containerVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function HomePage() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 sm:px-10 py-4 border-b border-gray-800 sticky top-0 z-50 bg-black/90 backdrop-blur-md">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-lg sm:text-2xl font-bold tracking-wide"
        >
          HoloLearn
        </motion.h1>
        <ul className="hidden sm:flex gap-6 text-gray-400 font-medium text-sm sm:text-base">
          {["Home", "Features", "About", "Contact"].map((item, idx) => (
            <motion.li
              key={idx}
              whileHover={{ scale: 1.1, color: "#fff" }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className="cursor-pointer"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Hero */}
      <header className="text-center max-w-3xl mx-auto py-12 sm:py-20 px-4">
        <div className="relative min-h-[6rem] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={quoteIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-xl sm:text-4xl font-extrabold text-white px-2 leading-snug text-center"
            >
              {quotes[quoteIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>
        <div className="mt-4 flex justify-center">
          <span className="w-20 sm:w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></span>
        </div>
      </header>

      {/* Photo Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
          className="flex flex-col gap-8"
        >
          {/* Row 1 */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-6">
            {[
              { img: "/assets/img1.webp", text: "AR Science", desc: "Explore molecules in AR with interactive 3D models." },
              { img: "/assets/img2.webp", text: "Voice → Text", desc: "Convert speech to text instantly with AI." },
              { img: "/assets/img3.webp", text: "Sign Language AI", desc: "Real-time AI-powered sign language translation." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                onClick={() => setActivePhotoIndex(idx)}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative overflow-hidden rounded-2xl shadow-lg group w-full sm:w-80 md:w-96 h-56 sm:h-64 cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={item.text}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                  <span className="text-white text-base sm:text-lg font-semibold">{item.text}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap justify-center sm:justify-end gap-6">
            {[
              { img: "/assets/img4.webp", text: "Scan & Learn", desc: "Scan books and get instant AI-powered explanations." },
              { img: "/assets/img5.webp", text: "Smart Analytics", desc: "AI dashboards for smarter student insights." },
              { img: "/assets/img6.webp", text: "Rural Learning", desc: "Bringing digital education to remote areas." },
            ].map((item, idx) => (
              <motion.div
                key={idx + 3}
                onClick={() => setActivePhotoIndex(idx + 3)}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative overflow-hidden rounded-2xl shadow-lg group w-full sm:w-80 md:w-96 h-56 sm:h-64 cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={item.text}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                  <span className="text-white text-base sm:text-lg font-semibold">{item.text}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Photo Modal */}
        <AnimatePresence>
          {activePhotoIndex !== null && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActivePhotoIndex(null)}
              />
              <motion.div
                key="photo-modal"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 flex items-center justify-center z-50 p-4"
              >
                <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl">
                  <button
                    onClick={() => setActivePhotoIndex(null)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
                  >
                    ✕
                  </button>
                  <img
                    src={`/assets/img${activePhotoIndex + 1}.png`}
                    alt=""
                    className="rounded-xl mb-4 w-full"
                  />
                  <h2 className="text-xl sm:text-2xl font-bold mb-2 text-white">
                    {[
                      "AR Science",
                      "Voice → Text",
                      "Sign Language AI",
                      "Scan & Learn",
                      "Smart Analytics",
                      "Rural Learning",
                    ][activePhotoIndex]}
                  </h2>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {[
                      "Explore molecules in AR with interactive 3D models.",
                      "Convert speech to text instantly with AI.",
                      "Real-time AI-powered sign language translation.",
                      "Scan books and get instant AI-powered explanations.",
                      "AI dashboards for smarter student insights.",
                      "Bringing digital education to remote areas.",
                    ][activePhotoIndex]}
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto text-center py-14 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-2xl sm:text-4xl font-extrabold text-white mb-4"
        >
          Empowering Education for Everyone 🌍
        </motion.h2>
        <p className="text-gray-400 text-base sm:text-lg mb-6 leading-relaxed">
          Our mission is to make learning inclusive, accessible, and engaging 
          for students everywhere — online or offline.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 sm:px-8 sm:py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white font-semibold shadow-lg text-sm sm:text-base"
        >
          Join the Journey
        </motion.button>
      </section>

      {/* Feature Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {features.map((f, i) => (
            <motion.article
              key={i}
              custom={i}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              onClick={() => setActiveFeatureIndex(i)}
              className="group rounded-2xl border border-gray-800 bg-gray-900/80 hover:bg-gray-900 shadow-xl cursor-pointer transition-all duration-300 p-6 sm:p-10 h-full flex flex-col justify-between"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3">{f.title}</h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {f.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Feature Modal */}
        <AnimatePresence>
          {activeFeatureIndex !== null && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveFeatureIndex(null)}
              />
              <motion.div
                key="feature-modal"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 flex items-center justify-center z-50 p-4"
              >
                <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl">
                  <button
                    onClick={() => setActiveFeatureIndex(null)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
                  >
                    ✕
                  </button>
                  <h2 className="text-xl sm:text-2xl font-extrabold mb-3">
                    {features[activeFeatureIndex].title}
                  </h2>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {features[activeFeatureIndex].details}
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </section>

      {/* Tagline */}
      <section className="text-center py-8 px-4">
        <AnimatePresence mode="wait">
          <motion.p
            key={quoteIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-base sm:text-lg font-medium text-gray-300 italic"
          >
            {[
              "Bringing AR, AI & Accessibility together.",
              "Technology that adapts to every learner.",
              "Offline. Inclusive. Powerful.",
            ][quoteIndex % 3]}
          </motion.p>
        </AnimatePresence>
      </section>

      <footer className="text-center text-gray-500 py-8 border-t border-gray-800 text-sm sm:text-base">
        © {new Date().getFullYear()} Team HoloLearn
      </footer>
    </div>
  );
}
