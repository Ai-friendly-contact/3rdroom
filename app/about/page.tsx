"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Instagram, Twitter, Facebook, Youtube, MapPin, Clock, Phone, Mail } from "lucide-react"

// 基本的なButtonコンポーネント（shadcn/uiの代替）
const Button = ({ children, variant = "default", size = "default", className = "", ...props }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50 disabled:pointer-events-none"
  const variants = {
    default: "bg-gray-900 text-white hover:bg-gray-800",
    outline: "border border-gray-300 bg-white hover:bg-gray-50"
  }
  const sizes = {
    default: "h-10 px-4 py-2",
    lg: "h-11 px-8 text-base"
  }
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // HOME / ABOUT / GALLERY / EVENTS / ACCESS / CONTACT
  const menuItems = ["HOME", "ABOUT", "GALLERY", "EVENTS", "ACCESS", "CONTACT"]

  const handleMenuClick = (item) => {
    if (item === "HOME") {
      window.location.href = "/"
    } else if (item === "ACCESS" || item === "CONTACT") {
      window.location.href = "/#map-section"
    } else if (item === "GALLERY") {
      window.location.href = "/#GALLERY"
    } else if (item === "EVENTS") {
      window.location.href = "/#EVENTS"
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-black">3RD ROOM</Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item, index) => (
                <button
                  key={item}
                  onClick={() => handleMenuClick(item)}
                  className="text-sm font-medium text-gray-700 hover:text-black transition-colors duration-300 relative group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    handleMenuClick(item)
                    setIsMenuOpen(false)
                  }}
                  className="block w-full text-left py-2 text-gray-700 hover:text-black transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* About Content */}
      <div className="pt-24">
        {/* About Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-6">ABOUT 3RD ROOM</h1>
                <h2 className="text-xl font-semibold mb-4">
                  アーティストとクリエイターのためのサードプレイス
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  3RD ROOMは、アーティストやクリエイターが自由に表現し、交流できる革新的なスペースです。
                  展示、制作、コミュニティ活動を通じて、新しい創造性を育みます。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  私たちは、多様なバックグラウンドを持つ人々がつながり、互いに刺激し合うことで生まれる
                  「化学反応」を大切にしています。ここでの出会いが、次のアートシーンを生み出すきっかけとなることを願っています。
                </p>
              </div>
              <div className="relative">
                <img
                  src="/modern-creative-space.png"
                  alt="About 3rd Room"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
 
        {/* Mission Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">OUR MISSION</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              アートをもっと身近に、もっと自由に。3RD ROOMは展示空間であると同時に、
              制作スタジオであり、交流の場でもあります。
              アーティストと来場者が垣根を越えてつながり、新しいカルチャーを生み出す場を目指します。
            </p>
             
            {/* ホームに戻るボタン */}
            <div className="mt-10">
              <Link href="/">
                <Button variant="outline" size="lg">
                  ホームに戻る
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">3RD ROOM</h3>
              <p className="text-gray-400">アーティストとクリエイターのためのサードプレイス</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">FOLLOW US</h4>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/nmwatokyo/" target="_blank" rel="noopener noreferrer">
                  <Instagram size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
                </a>
                <Twitter size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Facebook size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Youtube size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">CONTACT</h4>
              <p className="text-gray-400 text-sm">info@3rdroom.com</p>
              <p className="text-gray-400 text-sm">03-1234-5678</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">&copy; 2025 3RD ROOM. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}