"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Menu, X, Instagram, Twitter, Facebook, Youtube, MapPin, Clock, Phone, Mail } from "lucide-react"

export default function ThirdRoomPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null)

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

  const handleMenuClick = (item: string) => {
    if (item === "ACCESS" || item === "CONTACT") {
      document.getElementById("map-section")?.scrollIntoView({ behavior: "smooth" })
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

      {/* 以降（Gallery, Events, Follow Us, Access, Footer）はあなたのコードと同じ */}
    </div>
  )
}
