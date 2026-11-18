"use client";
import React, { useState, useEffect, useRef } from "react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/music.mp3");
    audio.loop = true;
    audio.preload = "auto";
    audioRef.current = audio;

    const handleFirstInteraction = () => {
      if (audio.paused) {
        audio.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.log("Autoplay blocked, waiting for user interaction.");
        });
      }
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction);
    window.addEventListener("touchstart", handleFirstInteraction);
    window.addEventListener("scroll", handleFirstInteraction, { passive: true });

    return () => {
      audio.pause();
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="fixed bottom-18 left-4 z-[9999] flex items-center justify-center">
      {/* Loại bỏ mọi class bg, border, shadow để icon hoàn toàn tự do */}
      <button
        onClick={togglePlay}
        className="p-0 bg-transparent border-none shadow-none hover:scale-110 transition-transform duration-200 active:scale-90"
        aria-label={isPlaying ? "Mute" : "Unmute"}
      >
        <img
          src={isPlaying ? "/images/mute-ic.png" : "/images/unmute-ic.png"}
          alt="Mute/Unmute"
          className="w-14 h-14 object-contain"
        />
      </button>
    </div>
  );
};

export default MusicPlayer;
