"use client";
import React, { useState, useEffect } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    // Sử dụng Date.parse để đảm bảo tính tương thích cao nhất với mọi trình duyệt di động
    const targetDate = new Date("2027-03-06T17:00:00Z").getTime();

    const update = () => {
      const now = Date.now();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
        setIsPast(false);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsPast(true);
      }
    };

    // Chạy ngay lập tức khi component mount
    update();

    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-2 mb-4 text-sm md:text-lg font-medium bg-white/40 px-4 py-1 rounded-full backdrop-blur-sm border border-white/30">
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-3xl">{timeLeft.days}</span>
          <span className="text-[10px] uppercase">Ngày</span>
        </div>
        <span className="text-xl md:text-2xl">:</span>
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-3xl">{timeLeft.hours}</span>
          <span className="text-[10px] uppercase">Giờ</span>
        </div>
        <span className="text-xl md:text-2xl">:</span>
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-3xl">{timeLeft.minutes}</span>
          <span className="text-[10px] uppercase">Phút</span>
        </div>
        <span className="text-xl md:text-2xl">:</span>
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-3xl">{timeLeft.seconds}</span>
          <span className="text-[10px] uppercase">Giây</span>
        </div>
      </div>
      
      {/* Chỉ hiển thị dòng chữ đỏ nếu trạng thái isPast đã được set từ phía client */}
      {isPast && (
        <p className="text-[10px] text-red-600 font-bold">
          (Ngày cưới đã trôi qua hoặc giờ trên máy của bạn không chính xác)
        </p>
      )}
    </div>
  );
};

export default Countdown;
