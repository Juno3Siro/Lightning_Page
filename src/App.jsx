import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '#about', label: 'Giới thiệu' },
  { href: '#services', label: 'Dịch vụ' },
  { href: '#works', label: 'Công trình' },
  { href: '#testimonials', label: 'Đánh giá' },
  { href: '#contact', label: 'Liên hệ' },
]

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-[#f6efe6] text-gray-800 font-sans antialiased">
      {/* Header */}
      <header className="container mx-auto flex items-center justify-between py-6 px-6 md:px-0">
        <a href="/" className="text-2xl font-bold" style={{ color: 'var(--brand-brown)' }}>
          SkillCare
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="relative header-link nav-link hover:text-[var(--brand-green)] transition-colors"
            >
              {label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[var(--brand-green)] transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 border border-gray-400 rounded"
          onClick={() => setMobileMenuOpen((v) => !v)}
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[var(--brand-beige)] border-t border-gray-300 overflow-hidden"
          >
            <ul className="flex flex-col gap-4 p-6 text-lg font-semibold text-[var(--brand-brown)]">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 border-b border-gray-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="hero-bg">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center py-24 px-6 md:px-0">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-6xl font-playfair font-bold leading-tight text-[var(--brand-brown)]"
            >
              Chăm sóc da thiên nhiên <br /> An toàn & Hiệu quả
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 max-w-xl text-gray-700 text-lg"
            >
              Sản phẩm & dịch vụ được phát triển dựa trên nghiên cứu lâm sàng và thành phần thiên nhiên, phù hợp cho mẹ và bé, da nhạy cảm.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-8 flex gap-5"
            >
              <a
                href="#contact"
                className="px-6 py-3 rounded bg-[var(--brand-brown)] text-white font-semibold shadow-md hover:bg-[#5a3f27] transition-colors"
              >
                Liên hệ
              </a>
              <a
                href="#services"
                className="px-6 py-3 rounded border border-[var(--brand-brown)] text-[var(--brand-brown)] font-semibold hover:bg-[var(--brand-brown)] hover:text-white transition-colors"
              >
                Tìm hiểu
              </a>
            </motion.div>
          </div>
          <div className="hidden md:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="card rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src="https://caovanduy.com/_next/image?url=%2Fimages%2Fhero.jpg&w=1920&q=75"
                alt="Hero"
                className="w-full h-auto object-cover max-h-[384px]"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="container mx-auto px-6 md:px-0 py-16 flex-grow">
        {/* About */}
        <section id="about" className="grid md:grid-cols-3 gap-10 mb-20">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-playfair font-semibold text-[var(--brand-brown)] mb-6">Giới thiệu</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Tôi là chuyên gia chăm sóc da thiên nhiên với nhiều năm kinh nghiệm trong lĩnh vực tư vấn và phát triển sản phẩm an toàn, phù hợp cho mọi loại da, đặc biệt là da nhạy cảm và mẹ & bé.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-8">
              <div className="card p-6 rounded-xl shadow-md border border-gray-200">
                <h3 className="font-semibold text-lg mb-2">Dịch vụ tư vấn</h3>
                <p className="text-gray-600 text-sm">
                  Tư vấn routine chăm sóc da, lựa chọn thành phần phù hợp cho từng loại da.
                </p>
              </div>
              <div className="card p-6 rounded-xl shadow-md border border-gray-200">
                <h3 className="font-semibold text-lg mb-2">Khóa học & Workshop</h3>
                <p className="text-gray-600 text-sm">
                  Workshop chăm sóc da cho mẹ & bé, hướng dẫn lập công thức an toàn và hiệu quả.
                </p>
              </div>
            </div>
          </div>
          <aside className="space-y-6">
            <div className="card p-5 rounded-xl shadow-md border border-gray-200">
              <div className="text-sm text-gray-600">Hotline</div>
              <div className="font-semibold text-lg mt-1">1900 9999</div>
            </div>
            <div className="card p-5 rounded-xl shadow-md border border-gray-200">
              <div className="text-sm text-gray-600">Email</div>
              <div className="font-semibold text-lg mt-1">hello@skillcare.vn</div>
            </div>
          </aside>
        </section>

        {/* Services */}
        <section id="services" className="mb-20">
          <h3 className="text-3xl font-playfair font-semibold text-[var(--brand-brown)] mb-8">Dịch vụ</h3>
          <div className="grid md:grid-cols-3 gap-10">
            {[{
              title: 'Tư vấn chăm sóc da',
              desc: 'Tư vấn routine và lựa chọn sản phẩm phù hợp cho từng loại da.'
            }, {
              title: 'Phát triển sản phẩm',
              desc: 'Hỗ trợ phát triển sản phẩm chăm sóc da an toàn, hiệu quả.'
            }, {
              title: 'Workshop chuyên sâu',
              desc: 'Khóa học và workshop về chăm sóc da thiên nhiên cho mẹ & bé.'
            }].map(({ title, desc }, i) => (
              <div key={i} className="card p-6 rounded-xl shadow-md border border-gray-200">
                <h4 className="font-semibold text-xl mb-3">{title}</h4>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Works */}
        <section id="works" className="mb-20">
          <h3 className="text-3xl font-playfair font-semibold text-[var(--brand-brown)] mb-8">Công trình</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card rounded-xl shadow-md overflow-hidden border border-gray-200">
                <img
                  src={`https://picsum.photos/seed/works${i}/800/500`}
                  alt={`Project ${i}`}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-5">
                  <h5 className="font-semibold text-lg">Dự án {i}</h5>
                  <p className="text-gray-600 text-sm mt-2">Mô tả ngắn gọn về công trình {i}.</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="mb-20">
          <h3 className="text-3xl font-playfair font-semibold text-[var(--brand-brown)] mb-8">Đánh giá khách hàng</h3>
          <div className="grid md:grid-cols-2 gap-10">
            {[{
              name: 'Khách hàng A',
              content: 'Sản phẩm rất nhẹ dịu, hiệu quả rõ rệt sau vài tuần sử dụng.'
            }, {
              name: 'Khách hàng B',
              content: 'Dịch vụ tư vấn tận tình, giúp tôi hiểu rõ hơn về chăm sóc da.'
            }].map(({ name, content }, i) => (
              <div key={i} className="card p-6 rounded-xl shadow-md border border-gray-200">
                <h5 className="font-semibold text-lg">{name}</h5>
                <p className="text-gray-600 text-sm mt-3 italic">"{content}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-20">
          <h3 className="text-3xl font-playfair font-semibold text-[var(--brand-brown)] mb-8">Liên hệ</h3>
          <div className="card p-8 rounded-xl shadow-md border border-gray-200 max-w-xl mx-auto">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                alert('Cảm ơn bạn đã gửi liên hệ! Chúng tôi sẽ phản hồi sớm nhất.')
              }}
              className="grid gap-6"
            >
              <input
                type="text"
                placeholder="Họ và tên"
                required
                className="p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--brand-green)]"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--brand-green)]"
              />
              <textarea
                placeholder="Lời nhắn"
                required
                rows={5}
                className="p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--brand-green)] resize-none"
              />
              <button
                type="submit"
                className="bg-[var(--brand-brown)] text-white font-semibold py-3 rounded hover:bg-[#5a3f27] transition-colors"
              >
                Gửi
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-600 border-t border-gray-300">
        © {new Date().getFullYear()} SkillCare — Thiết kế theo mẫu caovanduy.com
      </footer>
    </div>
  )
}