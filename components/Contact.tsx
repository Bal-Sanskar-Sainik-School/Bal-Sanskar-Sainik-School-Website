"use client";

import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Star, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      detail: "Jeolikot, Nainital, Uttarakhand",
      sub: "In the heart of the Himalayas",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call / WhatsApp",
      detail: "+91 99272 89673",
      sub: "Mon - Sat, 8 AM - 6 PM",
      href: "tel:+919927289673",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      detail: "balsansars@gmail.com",
      sub: "We reply within 24 hours",
      href: "mailto:balsansars@gmail.com",
    },
    {
      icon: <FaInstagram size={24} />,
      title: "Follow Us",
      detail: "Instagram and Facebook",
      sub: "@bal.sansar.sainik.school",
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-ivory" ref={ref}>
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 h-60 w-60 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-[family-name:var(--font-body)] text-gold-light text-lg tracking-[0.3em] uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-navy-dark text-3xl sm:text-4xl md:text-5xl font-bold gold-underline">
            Contact Us
          </h2>
          <div className="star-divider mt-8">
            <Star className="w-4 h-4 text-gold fill-gold" />
          </div>
        </motion.div>

        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((info, i) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-panel rounded-[1.75rem] p-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold/20 bg-gold/15 text-gold">
                {info.icon}
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-navy-dark mb-2">
                {info.title}
              </h3>
              {"href" in info ? (
                <a
                  href={info.href}
                  className="text-lg font-semibold text-gold transition-colors hover:text-gold-light"
                >
                  {info.detail}
                </a>
              ) : (
                <p className="text-lg font-semibold text-navy-dark/80">{info.detail}</p>
              )}
              <p className="mt-1 text-sm text-navy-dark/40">{info.sub}</p>

              {info.title === "Follow Us" && (
                <div className="mt-4 flex justify-center gap-3">
                  <a
                    href="https://wa.me/919927289673"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 bg-gold/10 text-gold transition-all duration-300 hover:border-gold/40 hover:bg-gold/20"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/bal.sansar.sainik.school"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 bg-gold/10 text-gold transition-all duration-300 hover:border-gold/40 hover:bg-gold/20"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={18} />
                  </a>
                  <a
                    href="https://www.facebook.com/deepideeksha110/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 bg-gold/10 text-gold transition-all duration-300 hover:border-gold/40 hover:bg-gold/20"
                    aria-label="Facebook"
                  >
                    <FaFacebookF size={16} />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-xl overflow-hidden border border-gold/10 h-[500px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13881.973449099165!2d79.55!3d29.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0a1b28e5b5bcb%3A0x8d1e2d3f4a5b6c7d!2sJeolikot%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bal Sansar Sainik School Location - Jeolikot, Nainital"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
