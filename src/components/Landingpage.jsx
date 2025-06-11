import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { useNavigate } from "react-router-dom";

export default function Landingpage() {
  const navigate = useNavigate();

  const handleNavigation = (direction) => {
    if (direction === "left") {
      navigate("/navy-blue");
    } else {
      navigate("/lost-and-found");
    }
  };

  return (
    <div className="bg-[#f1f1f1] min-h-screen font-sans p-4 relative overflow-hidden">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 relative z-20 border-b ">
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
            <span className="absolute -top-1 -right-1 bg-white text-red-600 text-xs rounded-full h-4 w-4 flex items-center justify-center">
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
          <p className="text-sm text-gray-700 max-w-xs leading-relaxed">
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
                className="p-3 rounded-full border border-gray-400 focus:outline-none"
              >
                <img src={src} alt="" className="h-4" />
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
          style={{ WebkitTextStroke: "1.5px black" }}
        >
          NIKE
        </motion.h1>

        {/* Shoe */}
        <motion.img
          src="/assets/dior.png"
          alt="Nike Dior"
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
          className="absolute right-10 top-1/2 -translate-y-1/2 z-10 text-sm text-gray-700"
        >
          <p className="font-bold">AIR JORDAN NBA</p>
          <p className="mt-2 text-[12px]">RELEASE DATE</p>
          <p className="text-xs">2024-12-06</p>
          <p className="mt-2 text-[12px]">COLOR ONE</p>
          <p className="text-xs">DIRO</p>
          <div className="flex space-x-2 mt-4">
            <img
              src="/assets/d2.png"
              alt="Thumb 1"
              className="w-28 h-28 object-cover border border-gray-300"
            />
            <img
              src="/assets/d1.png"
              alt="Thumb 2"
              className="w-28 h-28 object-cover border border-gray-300"
            />
          </div>
        </motion.div>

        {/* Pagination dots */}
        <div className="absolute bottom-16 flex space-x-1 z-10">
          <div className="w-2 h-2 rounded-full bg-black"></div>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-gray-400"></div>
          ))}
        </div>
      </section>

      {/* Poster / Text Sections */}
      <section className="mt-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
        <Card className="p-4 bg-transparent shadow-none border-none">
          <div className="border-8 border-black p-4 relative">
            <div className="border-2 border-black p-4 text-center">
              <h2 className="text-5xl font-bold">DIOR</h2>
              <img
                src="/assets/Dp1.png"
                alt="Dior Poster"
                className="mt-4 mx-auto w-full object-contain rounded-xl shadow-lg"
              />
            </div>
          </div>
        </Card>
        <div>
          <h2 className="text-3xl font-bold mb-4">DIOR</h2>
          <p className="text-sm text-gray-800 leading-relaxed">
            DIOR Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </section>

      {/* Second Section */}
      <section className="mt-12 px-4 md:grid md:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">DIOR</h2>
          <p className="text-sm text-gray-800 leading-relaxed">
            DIOR Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="flex justify-end">
          <img
            src="/assets/Dp2.png"
            alt="Sole"
            className="h-48 object-contain"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-center text-gray-700 py-10 border-t border-gray-300 bg-white">
        <p className="font-semibold text-lg">Stay updated.</p>
        <p className="text-sm">New drops & designs.</p>
      </footer>
    </div>
  );
}
