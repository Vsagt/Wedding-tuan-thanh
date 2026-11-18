"use client";
import React, { useState } from "react";

const RSVPModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setError(null);
    setIsSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // GỌI ĐẾN API NỘI BỘ CỦA NEXT.JS
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.status === "duplicate") {
        setError("Bị trùng tên mất rồi! Hãy nhập một tên khác như tên thường gọi chẳng hạn, sẽ giúp chúng mình rất nhiều");
      } else if (result.status === "success") {
        setIsSuccess(true);
        setTimeout(() => {
          setIsOpen(false);
        }, 3000);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Có lỗi xảy ra, vui lòng thử lại sau.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Nút bấm xác nhận */}
      <button
        onClick={toggleModal}
        className="px-8 py-3 bg-[#8B5E3C] text-white rounded-full shadow-lg hover:bg-[#6F4a30] transition-all duration-300 transform hover:scale-105 font-medium"
      >
        Xác nhận tham dự
      </button>

      {/* Modal Overlay */}
      <div
        className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-all duration-300 ease-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Modal Box */}
        <div
          className={`bg-[#F5F1E6] p-8 rounded-2xl max-w-md w-full shadow-2xl border border-[#8B5E3C]/20 relative transition-all duration-300 ease-out transform ${
            isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <button
            onClick={toggleModal}
            className="absolute top-4 right-4 text-[#8B5E3C] hover:scale-110 transition-transform text-xl"
          >
            ✕
          </button>

          {isSuccess ? (
            /* Màn hình cảm ơn với hình ảnh hoa cưới */
            <div className="flex flex-col items-center justify-center py-10 animate-in fade-in zoom-in duration-500">
              <div className="mb-6">
                {/* Thay đường dẫn dưới đây bằng ảnh hoa của bạn nếu muốn */}
                <img 
                  src="/images/Wedding flower.png"
                  alt="Wedding Flower"
                  className="w-32 h-32 object-cover rounded-full border-4 border-[#8B5E3C]/20 shadow-lg"
                />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-[#5D4037]">Cảm ơn bạn!</h2>
              <p className="text-center text-[#4A3728] opacity-90">
                Lời nhắn của bạn đã đến được với chúng mình rồi!🥰.
              </p>
            </div>
          ) : (
            /* Form nhập liệu thông thường */
            <div className="text-left">
              <h2 className="text-2xl font-bold mb-6 text-center text-[#5D4037]">
                Xác nhận tham dự
              </h2>

              {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-left">
                  <label className="block text-[#5D4037] mb-1 font-medium">Tên của bạn</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 rounded-lg border border-[#8B5E3C]/30 bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#8B5E3C] text-[#4A3728] transition-all"
                    placeholder="Nhập tên của bạn..."
                  />
                </div>

                <div className="text-left">
                  <label className="block text-[#5D4037] mb-1 font-medium">Lời nhắn gửi đến cô dâu chú rể</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 rounded-lg border border-[#8B5E3C]/30 bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#8B5E3C] text-[#4A3728] transition-all"
                    placeholder="Chia sẻ lời chúc của bạn..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-lg font-bold transition-all shadow-md ${
                    isSubmitting 
                    ? "bg-gray-400 cursor-not-allowed" 
                    : "bg-[#8B5E3C] text-white hover:bg-[#6F4a30]"
                  }`}
                >
                  {isSubmitting ? "Đang gửi..." : "Gửi xác nhận"}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RSVPModal;
