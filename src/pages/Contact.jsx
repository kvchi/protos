import React, { useState } from "react";
import { meeting, woman } from "../assets/images";
import { FiPhone } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const countryCodes = [
  { code: "+1", label: "🇺🇸 US" },
  { code: "+44", label: "🇬🇧 UK" },
  { code: "+234", label: "🇳🇬 Nigeria" },
  { code: "+91", label: "🇮🇳 India" },
  { code: "+61", label: "🇦🇺 Australia" },
  { code: "+49", label: "🇩🇪 Germany" },
];

const contactInfo = [
  {
    id:1,
    icon:<MdMailOutline className=""/>,
    title: "Chat to office",
    desc: "Speak to our friendly team.",
    link: "Protos/whatsapp.com",
  },
  {
    id:2,
    icon:<IoLocationOutline />,
    title: "Visit us",
    desc: "Visit our office HQ.",
    link: "Lagos, Nigeria",
  },
  {
    id:3,
    icon:<FiPhone />,
    title: "Call us",
    desc: "Mon-Fri from 8am to 5pm.",
    link: "+(234) 703-773-4027",
  },

];

export default function Contact() {
  const [selectedCountryCode, setSelectedCountryCode] = useState("+234");
  const [phone, setPhone] = useState("");

  const handleCodeChange = (e) => setSelectedCountryCode(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);

  return (
    <div className="overflow-hidden">
      <section className="flex justify-center gap-50 md:px-28 py-20  items-center w-[100%]">
        <aside className="">
          <h1 className="font-bold text-2xl mb-5">Contact us</h1>
          <p>Our friendly team would love to hear from.</p>
          <form action="" className="">
            <div className="flex flex-col md:flex-row gap-6 mt-10">
              <div className="flex flex-col">
                <label htmlFor="firstname">First name</label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="First name"
                  className="border-2 rounded-md border-gray-400 p-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastname">Last name</label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Last name"
                  className="border-2 rounded-md border-gray-400 p-2"
                />
              </div>
            </div>
            <div className="flex flex-col mt-8">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="abc@gmail.com"
                className="border-2 rounded-md border-gray-400 p-2"
              />
            </div>
            <div className="flex flex-col mt-8">
              <label htmlFor="phone">Phone</label>
              <div className="flex border-2 rounded-md border-gray-400 p-2 gap-3">
                <select
                  value={selectedCountryCode}
                  onChange={handleCodeChange}
                  className="focus:outline-none"
                  
                >
                  {countryCodes.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.code}
                    </option>
                    
                  ))}
                </select>
                <input
                  type="tel"
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="000-000-000"
                  className="  "
                />
              </div>
            </div>
            <div className="flex flex-col mt-8">
              <label htmlFor="message">Message</label>
              <textarea
                type="message"
                name="message"
                id="message"
                placeholder="abc@gmail.com"
                className="border-2 rounded-md border-gray-400 p-2 resize-none h-30"
              />
            </div>
           <div className="flex justify-center mt-14 bg-[#0E375F] p-2.5 text-white rounded-md">
             <button>Send Message</button>
           </div>
          </form>
        </aside>
        <aside className="hidden lg:flex justify-center">
          <img src={woman} alt="" />
        </aside>
      </section>
      <section>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-xl font-semibold mt-14 py-2 px-4 bg-[#E7EBEF] rounded-full text-[#0E375F]">Contact us</h2>
          <p className="text-[#0E375F] font-semibold text-3xl my-8 text-center px-6">We'd love to hear from you.</p>
          <p>Chat to our friendly team</p>
        </div>
        <div className="flex justify-center items-center my-14 px-8 md:px-28 ">
          <img src={meeting} alt="" className="w-full h-[200px] md:h-[100%] object-fit"/>
        </div>
      </section>
      <section>
        <div className="grid md:grid-cols-3 gap-6 px-8 md:px-28 mb-20">
            {contactInfo.map((i) => (
              <div 
                key={i.id}
                className="bg-[#E7EBEF] p-6 rounded-sm shadow-sm flex flex-col gap-3">
                  <div className="bg-[#0E375F] w-10 h-10 flex items-center justify-center rounded-md text-white mb-4">
            {i.icon}
          </div>
          <h3 className="text-lg font-semibold text-[#0E375F]">
            {i.title}
          </h3>
          <p className="text-[#0E375F]">{i.desc}</p>
          <span className="text-sm text-[#0E375F] font-medium">
            {i.link}
          </span>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
