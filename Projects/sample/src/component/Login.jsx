import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUserAlt,
  FaLock,
  FaEnvelope,
  FaPhone,
  FaIndustry
} from "react-icons/fa";
import sessLogo from "../assets/sess-logo.png"; // <-- your logo path

export default function SessAuth() {
  const [isLogin, setIsLogin] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1581091870627-3c4bde0f7a29?auto=format&fit=crop&w=1600&q=80",
      title: "Environmental Test Chambers",
      desc: "Precision engineered climatic simulation systems for reliability testing."
    },
    {
      image:
        "https://images.unsplash.com/photo-1581093588401-22d9b63a94b0?auto=format&fit=crop&w=1600&q=80",
      title: "Thermal & Humidity Testing",
      desc: "High-performance validation solutions for industrial environments."
    },
    {
      image:
        "https://images.unsplash.com/photo-1581091870637-3dfb9c2d2f5e?auto=format&fit=crop&w=1600&q=80",
      title: "Industrial Innovation",
      desc: "Delivering reliable environmental testing systems across India."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen flex bg-[#0A1120] overflow-hidden">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-1/2 relative text-white overflow-hidden">

        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={slides[currentSlide].image}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute w-full h-full object-cover"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1120]/95 via-[#0A1120]/85 to-transparent"></div>

        <div className="relative z-10 px-16 flex flex-col justify-center max-w-xl">

          {/* Logo + Brand */}
          <div className="flex items-center gap-4 mb-8">
            <img
              src={sessLogo}
              alt="SESS Logo"
              className="w-16 h-16 object-contain drop-shadow-[0_0_15px_rgba(0,212,255,0.6)]"
            />
            <h1 className="text-4xl font-bold tracking-wide">
              SESS Engineering
            </h1>
          </div>

          <motion.h2
            key={slides[currentSlide].title}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-2xl text-[#00d4ff] font-semibold"
          >
            {slides[currentSlide].title}
          </motion.h2>

          <motion.p
            key={slides[currentSlide].desc}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-4 text-gray-300"
          >
            {slides[currentSlide].desc}
          </motion.p>

          <p className="mt-6 text-gray-400 text-sm">
            Sri Easwari Scientific Solution Pvt. Ltd. (SESS) is a leading
            manufacturer of environmental test chambers and reliability
            testing systems delivering world-class engineering solutions.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE - AUTH CARD */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md bg-[#0F1F35]/95 backdrop-blur-xl p-10 rounded-3xl border border-[#1e3a5f] shadow-2xl"
        >

          {/* Logo Top Center */}
          {/* Logo Top Center */}
          <div className="flex flex-col items-center mb-10">

            {/* Logo Image */}
            <img
              src={sessLogo}
              alt="SESS Logo"
              className="w-24 h-24 object-contain mb-4 
               drop-shadow-[0_0_25px_rgba(255,0,120,0.5)]"
            />

            {/* Gradient Brand Text */}
            <h2 className="text-4xl font-extrabold tracking-[6px] 
                 bg-gradient-to-r 
                 from-red-500 
                 via-purple-500 
                 to-blue-500 
                 bg-clip-text 
                 text-transparent 
                 drop-shadow-[0_0_15px_rgba(255,0,150,0.6)]">
              SESS
            </h2>

            {/* Small Subtitle */}
            <p className="text-gray-400 text-xs tracking-[3px] mt-2">
              SCIENTFIC SOLUTIONS
            </p>

          </div>



          {/* Toggle */}
          <div className="flex bg-[#0A1A2F] rounded-full p-1 mb-8 border border-[#1e3a5f]">
            <button
              onClick={() => setIsLogin(true)}
              className={`w-1/2 py-2 rounded-full font-semibold transition ${isLogin
                  ? "bg-gradient-to-r from-[#00d4ff] to-[#ff4ecd] text-white"
                  : "text-gray-400"
                }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`w-1/2 py-2 rounded-full font-semibold transition ${!isLogin
                  ? "bg-gradient-to-r from-[#00d4ff] to-[#ff4ecd] text-white"
                  : "text-gray-400"
                }`}
            >
              Sign Up
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={isLogin ? "login" : "signup"}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
            >
              <div className="space-y-5">

                {!isLogin && (
                  <>
                    <InputField icon={<FaUserAlt />} placeholder="Full Name" />
                    <InputField icon={<FaEnvelope />} placeholder="Email" />
                    <InputField icon={<FaPhone />} placeholder="Phone" />
                    <InputField icon={<FaIndustry />} placeholder="Company" />
                  </>
                )}

                <InputField icon={<FaUserAlt />} placeholder="User ID" />
                <InputField icon={<FaLock />} type="password" placeholder="Password" />

                {!isLogin && (
                  <InputField icon={<FaLock />} type="password" placeholder="Confirm Password" />
                )}

                <button className="w-full py-4 mt-4 text-white font-bold rounded-xl bg-gradient-to-r from-[#00d4ff] via-[#0099ff] to-[#ff4ecd] shadow-lg hover:scale-105 transition">
                  {isLogin ? "Sign In" : "Register Account"}
                </button>

              </div>
            </motion.div>
          </AnimatePresence>

          <p className="text-center text-gray-600 text-xs mt-8">
            © 2024 SESS Engineering. All rights reserved.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function InputField({ icon, type = "text", placeholder }) {
  return (
    <div className="flex items-center bg-[#0A1A2F] rounded-xl border border-[#1e3a5f] focus-within:border-[#00d4ff] transition-all px-4 py-3">
      <span className="text-gray-500 mr-3">{icon}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent outline-none text-white placeholder-gray-600"
      />
    </div>
  );
}
