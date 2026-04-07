"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    classSeeking: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enquiry Form Submitted:", formData);

    // Mailto fallback
    const subject = encodeURIComponent(
      `Admission Enquiry - ${formData.classSeeking} | Bal Sanskar Sainik School`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nClass Seeking: ${formData.classSeeking}\nMessage: ${formData.message}`
    );
    window.open(
      `mailto:balsanskarsainikschool@gmail.com?subject=${subject}&body=${body}`,
      "_blank"
    );

    setFormData({ name: "", phone: "", classSeeking: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      detail: "Jeolikot, Nainital, Uttarakhand",
      sub: "In the heart of the Himalayas",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      detail: "+91 99272 89673",
      sub: "Mon – Sat, 8AM – 6PM",
      href: "tel:+919927289673",
    },
    {
      icon: <FaInstagram size={24} />,
      title: "Follow Us",
      detail: "Instagram & Facebook",
      sub: "@bal.sansar.sainik.school",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-navy-dark relative overflow-hidden" ref={ref}>
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-60 h-60 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-[family-name:var(--font-body)] text-gold-light text-lg tracking-[0.3em] uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-ivory text-3xl sm:text-4xl md:text-5xl font-bold gold-underline">
            Contact Us
          </h2>
          <div className="star-divider mt-8">
            <Star className="w-4 h-4 text-gold fill-gold" />
          </div>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, i) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card-navy rounded-2xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-gold/15 border border-gold/20 flex items-center justify-center mx-auto mb-4 text-gold">
                {info.icon}
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-ivory text-lg font-bold mb-2">
                {info.title}
              </h3>
              {info.href ? (
                <a
                  href={info.href}
                  className="font-[family-name:var(--font-body)] text-gold text-lg font-semibold hover:text-gold-light transition-colors"
                >
                  {info.detail}
                </a>
              ) : (
                <p className="font-[family-name:var(--font-body)] text-ivory/80 text-lg font-semibold">
                  {info.detail}
                </p>
              )}
              <p className="font-[family-name:var(--font-body)] text-ivory/40 text-sm mt-1">
                {info.sub}
              </p>

              {/* Social links for last card */}
              {info.title === "Follow Us" && (
                <div className="flex justify-center gap-3 mt-4">
                  <a
                    href="https://www.instagram.com/bal.sansar.sainik.school"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold hover:bg-gold/20 hover:border-gold/40 transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={18} />
                  </a>
                  <a
                    href="https://www.facebook.com/share/1CAbyUUs2R/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold hover:bg-gold/20 hover:border-gold/40 transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <FaFacebookF size={16} />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Map & Form Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-xl overflow-hidden border border-gold/10 h-[400px] lg:h-full min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13881.973449099165!2d79.55!3d29.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0a1b28e5b5bcb%3A0x8d1e2d3f4a5b6c7d!2sJeolikot%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bal Sanskar Sainik School Location - Jeolikot, Nainital"
            />
          </motion.div>

          {/* Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card-navy rounded-2xl p-6 sm:p-8 space-y-5"
            >
              <h3 className="font-[family-name:var(--font-heading)] text-ivory text-2xl font-bold mb-2">
                Send an Enquiry
              </h3>
              <p className="font-[family-name:var(--font-body)] text-ivory/50 text-base mb-4">
                Fill in the form and we&apos;ll get back to you shortly.
              </p>

              <div>
                <label className="font-[family-name:var(--font-body)] text-ivory/60 text-sm block mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-navy/60 border border-gold/15 rounded-lg px-4 py-3 text-ivory font-[family-name:var(--font-body)] text-lg focus:border-gold/40 focus:outline-none transition-colors placeholder:text-ivory/20"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="font-[family-name:var(--font-body)] text-ivory/60 text-sm block mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full bg-navy/60 border border-gold/15 rounded-lg px-4 py-3 text-ivory font-[family-name:var(--font-body)] text-lg focus:border-gold/40 focus:outline-none transition-colors placeholder:text-ivory/20"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="font-[family-name:var(--font-body)] text-ivory/60 text-sm block mb-1.5">
                  Class Seeking Admission
                </label>
                <select
                  required
                  value={formData.classSeeking}
                  onChange={(e) =>
                    setFormData({ ...formData, classSeeking: e.target.value })
                  }
                  className="w-full bg-navy/60 border border-gold/15 rounded-lg px-4 py-3 text-ivory font-[family-name:var(--font-body)] text-lg focus:border-gold/40 focus:outline-none transition-colors"
                >
                  <option value="" className="bg-navy text-ivory/50">
                    Select Class
                  </option>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((cls) => (
                    <option key={cls} value={`Class ${cls}`} className="bg-navy">
                      Class {cls}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-[family-name:var(--font-body)] text-ivory/60 text-sm block mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-navy/60 border border-gold/15 rounded-lg px-4 py-3 text-ivory font-[family-name:var(--font-body)] text-lg focus:border-gold/40 focus:outline-none transition-colors resize-none placeholder:text-ivory/20"
                  placeholder="Tell us about your enquiry..."
                />
              </div>

              <button
                type="submit"
                className="font-[family-name:var(--font-heading)] w-full btn-primary font-bold text-sm px-8 py-4 rounded-lg tracking-wider"
              >
                SEND ENQUIRY
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
