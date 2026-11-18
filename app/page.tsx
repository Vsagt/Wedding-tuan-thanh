"use client";
import React from "react";
import Image from "next/image";
import { WEDDING_CONFIG } from "../config";
import Countdown from "../components/Countdown";
import RSVPModal from "../components/RSVPModal";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F1E6] text-[#4A3728] font-serif">
      {/* Hero Section */}
      <header className="relative h-[100vh] w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={WEDDING_CONFIG.images.hero}
            alt="Head"
            fill
            className="object-cover opacity-80"
            priority
          />
        </div>
        
        {/* Overlay content */}
        <div className="relative z-10 flex flex-col items-center text-center bg-white/20 backdrop-blur-[2px] p-8 rounded-lg border border-white/30">
          <Countdown />
          <p className="text-xl mb-4 tracking-widest">T&T</p>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tighter">
            {WEDDING_CONFIG.coupleNames}
          </h1>
          
          <p className="text-2xl md:text-3xl italic mb-12">
            "{WEDDING_CONFIG.slogan}"
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg max-w-2xl">
            <div className="flex flex-col items-center md:items-start">
              <p className="font-bold">Ngày {WEDDING_CONFIG.weddingDate}</p>
              <p>{WEDDING_CONFIG.weddingTime}</p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <p className="font-bold">Địa điểm tổ chức</p>
              <p>{WEDDING_CONFIG.location}</p>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Story */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold leading-tight">
              {WEDDING_CONFIG.content.storyTitle}
            </h2>
            <p className="text-lg leading-relaxed opacity-90">
              {WEDDING_CONFIG.content.storyText}
            </p>
            <p className="text-lg italic">
              {WEDDING_CONFIG.content.storySubtitle}
            </p>
          </div>
          
          {/* Right Side - Couple Photo */}
          <div className="relative h-[400px] w-full">
            <Image
              src={WEDDING_CONFIG.images.couple}
              alt="Chúng mình"
              fill
              className="object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
        
        {/* Section: Event Info & Dress Code */}
        <div className="mt-24 p-8 bg-white/30 rounded-2xl border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold mb-6">
                {WEDDING_CONFIG.content.eventTitle}
              </h3>
              <div className="space-y-4">
                <p><strong className="text-xl">NGÀY:</strong> {WEDDING_CONFIG.weddingDate}</p>
                <p><strong className="text-xl">ĐỊA ĐIỂM:</strong> {WEDDING_CONFIG.location}</p>
                <p><strong className="text-xl">LƯU Ý!:</strong> <br/>
                  <span className="italic">{WEDDING_CONFIG.content.dressCode}</span>
                </p>
              </div>
            </div>
            <div className="relative h-[300px] w-full">
              <Image
                src={WEDDING_CONFIG.images.story}
                alt="Ảnh 3"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Footer Decoration - Moved BEFORE Gifts & RSVP as requested */}
        <footer className="mt-12 md:mt-24 border-t border-[#4A3728]/10 pt-8 md:pt-16 pb-8 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <div className="relative h-[150px] md:h-[200px] w-full mb-4 md:mb-8">
              {/* Giảm chiều cao ảnh một chút trên điện thoại để không chiếm quá nhiều diện tích */}
              <Image
                src={WEDDING_CONFIG.images.footer}
                alt="Trang trí cuối"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-base md:text-lg italic opacity-80">
              "Cảm ơn bạn đã cùng chúng mình lưu giữ những khoảnh khắc đẹp nhất."
            </p>
          </div>
        </footer>

        {/* Section: Gifts & RSVP */}
        <div className="mt-8 md:mt-24 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="flex-1 space-y-4 md:space-y-6">
            <p className="text-xl md:text-2xl font-bold leading-snug">
              {WEDDING_CONFIG.content.giftMessage}
            </p>
          </div>
          <div className="flex-1 bg-[#4A3728] text-white p-6 md:p-8 rounded-2xl shadow-lg text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
              {WEDDING_CONFIG.content.rsvpTitle}
            </h3>
            <p className="mb-4 md:mb-6 text-sm md:text-base">Vui lòng phản hồi trước ngày {WEDDING_CONFIG.content.rsvpDeadline}.</p>
            <RSVPModal />
          </div>
        </div>

        {/* New Section: Google Maps Location */}
        <section className="mt-20 md:mt-32 text-center border-t border-[#4A3728]/10 pt-16">
          <p className="text-xl md:text-2xl italic mb-10 text-[#4A3728]">
            Để thuận tiện hơn cho bạn, chúng mình đã để định vị Google map ở đây!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
            {/* Nhà Trai */}
            <div className="flex flex-col items-center">
              <a
                href="https://maps.app.goo.gl/iXMTCTDma8uBw7BP7"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl border-2 border-transparent group-hover:border-[#8B5E3C] transition-all duration-300 shadow-lg">
                  <img
                    src="/images/chu re.gif"
                    alt="Định vị nhà trai"
                    className="w-64 h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <p className="mt-4 font-bold text-[#4A3728]">Nhà Trai</p>
              </a>
            </div>

            {/* Nhà Gái */}
            <div className="flex flex-col items-center">
              <a
                href="https://maps.app.goo.gl/QGW8qRhXHSCcXRuDA"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl border-2 border-transparent group-hover:border-[#8B5E3C] transition-all duration-300 shadow-lg">
                  <img
                    src="/images/co dau.gif"
                    alt="Định vị nhà gái"
                    className="w-64 h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <p className="mt-4 font-bold text-[#4A3728]">Nhà Gái</p>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
