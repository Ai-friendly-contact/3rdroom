"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Menu, X, Instagram, Twitter, Facebook, Youtube, MapPin, Clock, Phone, Mail } from "lucide-react"

export default function ThirdRoomPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null)

  // RENTAL を削除 → HOME / ABOUT / GALLERY / EVENTS / ACCESS / CONTACT
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
                アーティストとクリエイターのための、展示・制作・交流のためのサードプレイス。
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
              <Button variant="outline" size="lg">もっと詳しく</Button>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                onClick={() => setEnlargedImage(image)}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overlay for enlarged image */}
      {enlargedImage && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <div className="relative">
            <img src={enlargedImage} alt="拡大" className="max-w-full max-h-screen object-contain" />
            <button
              onClick={() => setEnlargedImage(null)}
              className="absolute top-2 right-2 text-white text-3xl"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Events */}
      <section id="EVENTS" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">EVENTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, idx) => (
              <Card key={idx}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-gray-500">{event.date}</div>
                    <Badge variant="secondary">{event.type}</Badge>
                  </div>
                  <div className="font-semibold">{event.title}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Follow Us */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">FOLLOW US</h2>
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="flex items-center space-x-2 h-12 bg-transparent">
                <Instagram size={20} /> Instagram
              </Button>
              <Button variant="outline" className="flex items-center space-x-2 h-12 bg-transparent">
                <Twitter size={20} /> Twitter
              </Button>
              <Button variant="outline" className="flex items-center space-x-2 h-12 bg-transparent">
                <Facebook size={20} /> Facebook
              </Button>
              <Button variant="outline" className="flex items-center space-x-2 h-12 bg-transparent">
                <Youtube size={20} /> YouTube
              </Button>
            </div>
            {/* Instagram Embed */}
            <div className="w-full">
              <iframe
                src="https://www.instagram.com/tokyo.artmuseum/embed"
                className="w-full h-[500px]"
                scrolling="no"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Access & Contact */}
      <section id="map-section" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">ACCESS / CONTACT</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-3"><MapPin size={18} /><span>東京都〇〇区〇〇 1-2-3</span></div>
                <div className="flex items-center gap-3"><Clock size={18} /><span>営業時間: 11:00 - 19:00（不定休）</span></div>
                <div className="flex items-center gap-3"><Phone size={18} /><span>03-1234-5678</span></div>
                <div className="flex items-center gap-3"><Mail size={18} /><span>info@3rdroom.jp</span></div>
              </CardContent>
            </Card>
            <div id="map" className="h-64 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.9336404029945!2d139.7040592!3d35.6595166"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-3xl font-bold mb-4">3RD ROOM</div>
          <p className="text-gray-400 mb-6">Creative Space for Artists & Creators</p>
          <div className="flex justify-center space-x-6 mb-8">
            <Instagram size={24} className="hover:text-gray-300 cursor-pointer transition-colors" />
            <Twitter size={24} className="hover:text-gray-300 cursor-pointer transition-colors" />
            <Facebook size={24} className="hover:text-gray-300 cursor-pointer transition-colors" />
            <Youtube size={24} className="hover:text-gray-300 cursor-pointer transition-colors" />
          </div>
          <p className="text-gray-500 text-sm">© 2025 3RD ROOM. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
