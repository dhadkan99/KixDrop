import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { useNavigate } from "react-router-dom";

export default function NavyBluePage() {
  const navigate = useNavigate();

  const handleNavigation = (direction) => {
    if (direction === "left") {
      navigate("/lost-and-found");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="bg-[#1a1a1a] min-h-screen font-sans p-4 relative overflow-hidden text-white">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 relative z-20 border-b border-gray-800">
        <motion.img
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          src="/assets/nike-logo.png"
          alt="Nike Logo"
          className="h-6 w-auto brightness-0 invert"
        />
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-x-8 uppercase text-xs tracking-widest font-semibold"
        >
          {["New Release", "Men", "Women", "Kids", "Customize"].map((t) => (
            <a
              key={t}
              href="/"
              className="hover:text-gray-200 transition-colors"
            >
              {t}
            </a>
          ))}
        </motion.nav>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-4"
        >
          <img
            src="/assets/profile.png"
            alt="User"
            className="h-4 brightness-0 invert"
          />
          <div className="relative">
            <img
              src="/assets/cart.png"
              alt="Cart"
              className="h-4 brightness-0 invert"
            />
            <span className="absolute -top-1 -right-1 bg-white text-black text-xs rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </div>
        </motion.div>
      </header>

      {/* Hero */}
      <section className="relative flex items-center justify-center h-[calc(100vh-100px)]">
        {/* Left text & arrows */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute left-10 top-1/2 -translate-y-1/2 z-10 text-left"
        >
          <p className="text-sm max-w-xs leading-relaxed">
            DO not waste your energy .Run in NIKE
            <br />
            feel the responsibility of
            <br />
            the energy!!!
            <br />
            Nike is not just a game <br />
            .Its a sport.
          </p>
          <div className="flex space-x-4 mt-6">
            {[
              { src: "/assets/left.png", direction: "left" },
              { src: "/assets/right.png", direction: "right" },
            ].map(({ src, direction }) => (
              <motion.button
                key={direction}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation(direction)}
                className="p-3 rounded-full border border-white focus:outline-none"
              >
                <img src={src} alt="" className="h-4 brightness-0 invert" />
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* NIKE headline */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute z-0 text-[180px] font-extrabold tracking-widest text-transparent"
          style={{ WebkitTextStroke: "1.5px white" }}
        >
          NIKE
        </motion.h1>

        {/* Shoe */}
        <motion.img
          src="/assets/navy.png"
          alt="Nike Navy Blue"
          initial={{ rotate: -20, scale: 0.8, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 w-[780px] object-contain -mt-16"
        />

        {/* Right info */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="absolute right-10 top-1/2 -translate-y-1/2 z-10 text-sm"
        >
          <p className="font-bold">AIR JORDAN NBA</p>
          <p className="mt-2 text-[12px]">RELEASE DATE</p>
          <p className="text-xs">2024-12-06</p>
          <p className="mt-2 text-[12px]">COLOR ONE</p>
          <p className="text-xs">NAVY BLUE</p>
          <div className="flex space-x-2 mt-4">
            {["/assets/navy1.png", "/assets/navy2.png"].map((src, i) => (
              <motion.img
                key={i}
                whileHover={{ scale: 1.05 }}
                src={src}
                alt={`Thumb ${i + 1}`}
                className="w-28 h-28 object-cover border border-white"
              />
            ))}
          </div>
        </motion.div>

        {/* Pagination dots */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute bottom-16 flex space-x-1 z-10"
        >
          <div className="w-2 h-2 rounded-full bg-white"></div>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-gray-400"></div>
          ))}
        </motion.div>
      </section>

      {/* Poster / Text Sections */}
      <section className="mt-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="p-4 bg-transparent shadow-none border-none">
            <div className="border-8 border-white p-4 relative">
              <div className="border-2 border-white p-4 text-center">
                <h2 className="text-5xl font-bold">NAVY BLUE</h2>
                <img
                  src="/assets/Np1.png"
                  alt="Navy Blue Poster"
                  className="mt-4 mx-auto w-full object-contain rounded-xl shadow-lg"
                />
              </div>
            </div>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">NAVY BLUE</h2>
          <p className="text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </motion.div>
      </section>

      {/* Second Section */}
      <section className="mt-12 px-4 md:grid md:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">BLUE</h2>
          <p className="text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-end"
        >
          <img
            src="/assets/Np2.png"
            alt="Navy Blue Pattern"
            className="h-48 object-contain"
          />
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-20 text-center py-10 border-t border-gray-800"
      >
        <p className="font-semibold text-lg">Stay updated.</p>
        <p className="text-sm">New drops & designs.</p>
      </motion.footer>
    </div>
  );
}
