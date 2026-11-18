"use client";
import React, { useState, useEffect, useRef } from "react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Khởi tạo đối tượng âm thanh
    const audio = new Audio("/music.mp3"); // Thay tên file nhạc của bạn vào đây
    audio.loop = true;
    audio.preload = "auto";
    audioRef.current = audio;

    // Xử lý cơ chế tự động phát khi có tương tác đầu tiên (do trình duyệt chặn tự động phát hoàn toàn)
    const handleFirstInteraction = () => {
      if (audio.paused) {
        audio.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.log("Autoplay blocked, waiting for user interaction.");
        });
      }
      // Gỡ bỏ listener sau khi đã kích hoạt thành công
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction);
    window.addEventListener("touchstart", handleFirstInteraction);

    return () => {
      audio.pause();
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
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
    <div className="fixed bottom-4 left-4 z-[9999] flex items-center justify-center">
      <button
        onClick={togglePlay}
        className="p-2 bg-white/30 backdrop-blur-sm border border-white/20 rounded-full shadow-lg hover:bg-white/50 transition-all duration-300 active:scale-90"
        aria-label={isPlaying ? "Mute" : "Unmute"}
      >
        <img
          src={isPlaying ? "/images/mute-ic.png" : "/images/unmute-ic.png"}
          alt="Mute/Unmute"
          className="w-8 h-8 object-contain"
        />
      </button>
    </div>
  );
};

export default MusicPlayer;
