import React from "react";
import ButtonHome from "./ButtonHome";

const Contact = ({ details, swalStyles, formData, handleChange, handleSubmit }) => {

  return (
    <>
      <ButtonHome/>
      <style dangerouslySetInnerHTML={{ __html: swalStyles }} />
      <section className="bg-[#202020] text-gray-300 min-h-screen px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-widest mb-4">
            CONTACT US
          </h2>
          <p className="text-[#999] tracking-widest font-light text-sm sm:text-base">
            Premium motorcycles, expert service, and genuine parts — all in one place.
          </p>
        </div>


        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {details.map((detail, index) => {
            const Icon = detail.icon;
            
            return (
              <div key={index} className="flex gap-6 bg-zinc-900 p-6 border border-zinc-800 hover:border-orange-500 transition">
                <Icon className="text-orange-500 text-xl mt-1 shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-2 uppercase text-sm tracking-widest">
                    {detail.section}
                  </h4>

                  {detail.info.map((line, i) => (
                    <p key={i} className="text-gray-400 text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-5xl mx-auto mt-12 bg-zinc-900 p-6 sm:p-8 border border-zinc-800">
          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2 tracking-widest">FULL NAME</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full bg-[#1F1F22] border border-zinc-700 p-3 outline-none focus:border-orange-500 text-gray-300 placeholder-zinc-600 caret-orange-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 tracking-widest">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full bg-[#1F1F22] border border-zinc-700 p-3 outline-none focus:border-orange-500 text-gray-300 placeholder-zinc-600 caret-orange-500 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2 tracking-widest">PHONE</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 000-0000"
                className="w-full bg-[#1F1F22] border border-zinc-700 p-3 outline-none focus:border-orange-500 text-gray-300 placeholder-zinc-600 caret-orange-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 tracking-widest">MESSAGE</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your motorcycle or what you need..."
                required
                rows="5"
                className="w-full bg-[#1F1F22] border border-zinc-700 p-3 outline-none focus:border-orange-500 text-gray-300 placeholder-zinc-600 caret-orange-500 transition resize-none"
              />
            </div>

            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white py-4 tracking-widest font-semibold transition">
              SEND MESSAGE
            </button>

          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;