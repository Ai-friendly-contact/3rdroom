"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
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

export default function ThirdRoomPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [enlargedImage, setEnlargedImage] = useState(null)

  // HOME / ABOUT / GALLERY / EVENTS / ACCESS / CONTACT
  const menuItems = ["HOME", "ABOUT", "GALLERY", "EVENTS", "ACCESS", "CONTACT"]

  const galleryImages = [
    "/modern-art-gallery.png",
    "/artistic-workspace.png",
    "/modern-event-space.png",
    "/artist-studio-natural-light.png",
    "/modern-creative-space.png",
  ]

  const events = [
    { date: "2025.01.20", title: "アーティスト展示会", type: "Exhibition" },
    { date: "2025.01.25", title: "ワークショップ開催", type: "Workshop" },
    { date: "2025.02.01", title: "オープンスタジオ", type: "Open Studio" },
    { date: "2025.02.10", title: "トークイベント", type: "Talk Event" },
  ]

  const handleMenuClick = (item) => {
    if (item === "ACCESS" || item === "CONTACT") {
      document.getElementById("map-section")?.scrollIntoView({ behavior: "smooth" })
    } else if (item === "GALLERY") {
      document.getElementById("GALLERY")?.scrollIntoView({ behavior: "smooth" })
    } else if (item === "EVENTS") {
      document.getElementById("EVENTS")?.scrollIntoView({ behavior: "smooth" })
    } else if (item === "ABOUT") {
      document.getElementById("ABOUT")?.scrollIntoView({ behavior: "smooth" })
    } else if (item === "HOME") {
      document.getElementById("HOME")?.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [galleryImages.length])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-black">3RD ROOM</div>

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

      {/* Hero */}
      <section id="HOME" className="pt-24">
        <div className="container mx-auto px-4">
          <div className="relative h-[60vh] md:h-[70vh] rounded-xl overflow-hidden">
            <img
              src={galleryImages[currentImageIndex]}
              alt="3RD ROOM"
              className="w-full h-full object-cover transition-opacity duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">3RD ROOM</h1>
              <p className="max-w-xl text-sm md:text-base text-white/90">
                アーティストとクリエイターのための、展示・制作・交流のためのサードプレイス
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="ABOUT" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">ABOUT 3RD ROOM</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                3RD ROOMは、アーティストとクリエイターのための革新的な空間です。
                展示、制作、交流の場として、新しい創造性を育む環境を提供しています。
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                私たちは、多様な表現活動をサポートし、アートとコミュニティの架け橋となることを目指しています。
              </p>
              <Link href="/about">
                <Button variant="outline" size="lg">もっと詳しく</Button>
              </Link>
            </div>
            <div className="relative">
              <img src="/modern-creative-space.png" alt="About 3rd Room" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="GALLERY" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">GALLERY</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="relative group cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setEnlargedImage(image)}
              >
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="EVENTS" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">EVENTS</h2>
          <div className="grid gap-4 max-w-2xl mx-auto">
            {events.map((event, index) => (
              <div key={index} className="flex items-center justify-between p-6 bg-white rounded-lg border hover:shadow-md transition-shadow">
                <div>
                  <p className="text-sm text-gray-500 mb-1">{event.date}</p>
                  <h3 className="font-semibold text-lg">{event.title}</h3>
                </div>
                <span className="px-3 py-1 bg-gray-100 text-sm rounded-full text-gray-700">
                  {event.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Follow Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">FOLLOW US</h2>
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://www.instagram.com/nmwatokyo/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
              <Instagram size={24} className="text-gray-700 hover:text-black" />
            </a>
            <a href="#" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
              <Twitter size={24} className="text-gray-700 hover:text-black" />
            </a>
            <a href="#" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
              <Facebook size={24} className="text-gray-700 hover:text-black" />
            </a>
            <a href="#" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
              <Youtube size={24} className="text-gray-700 hover:text-black" />
            </a>
          </div>
          
          {/* Instagram Feed */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6">最新のInstagram投稿</h3>
            <div className="bg-white rounded-lg shadow-lg p-6 overflow-hidden">
              <div className="h-96 overflow-y-auto">
                <iframe 
                  src="https://www.instagram.com/nmwatokyo/embed" 
                  width="100%" 
                  height="600"
                  frameBorder="0" 
                  scrolling="yes"
                  allowTransparency="true"
                  className="border-0 rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access & Contact */}
      <section id="map-section" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">ACCESS & CONTACT</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">アクセス情報</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="mr-4 text-gray-600" size={20} />
                  <span className="text-gray-700">東京都台東区西浅草3-25-11 國立劇場前ビル3F</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-4 text-gray-600" size={20} />
                  <span className="text-gray-700">10:00 - 19:00 (火曜定休)</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-4 text-gray-600" size={20} />
                  <span className="text-gray-700">03-1234-5678</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-4 text-gray-600" size={20} />
                  <span className="text-gray-700">info@3rdroom.com</span>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.440367202229!2d139.77581379999998!3d35.715386900000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188e9cfa41cc7f%3A0xbb23dcd494e13c8b!2z5Zu956uL6KW_5rSL576O6KGT6aSo!5e0!3m2!1sja!2sjp!4v1755445226116!5m2!1sja!2sjp" 
                  width="100%" 
                  height="450" 
                  style={{border:0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-96"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <Instagram size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
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

      {/* Image Modal */}
      {enlargedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setEnlargedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={enlargedImage} 
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button 
              onClick={() => setEnlargedImage(null)}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}