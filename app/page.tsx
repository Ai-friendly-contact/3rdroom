"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Menu, X, Instagram, Twitter, Facebook, Youtube, MapPin, Clock, Phone, Mail } from "lucide-react"

export default function ThirdRoomPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const menuItems = ["HOME", "ABOUT", "GALLERY", "EVENTS", "RENTAL", "ACCESS", "CONTACT"]

  const galleryImages = [
    "/modern-art-gallery.png",
    "/artistic-workspace.png",
    "/placeholder-m82ar.png",
    "/modern-event-space.png",
    "/artist-studio-natural-light.png",
    "/placeholder-09kpq.png",
  ]

  const events = [
    { date: "2025.01.20", title: "アーティスト展示会", type: "Exhibition" },
    { date: "2025.01.25", title: "ワークショップ開催", type: "Workshop" },
    { date: "2025.02.01", title: "オープンスタジオ", type: "Open Studio" },
    { date: "2025.02.10", title: "トークイベント", type: "Talk Event" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [galleryImages.length])

  return (
    <div className="min-h-screen bg-white">
      {/* Flowing Navigation Menu */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-black">3RD ROOM</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item, index) => (
                <button
                  key={item}
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
                  className="block w-full text-left py-2 text-gray-700 hover:text-black transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-16 h-screen relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={galleryImages[currentImageIndex] || "/placeholder.svg"}
            alt="3rd Room Gallery"
            className="w-full h-full object-cover transition-opacity duration-1000"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">3RD ROOM</h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">
              クリエイティブな空間で、新しい表現を発見する。
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 animate-fade-in-delay-2">
              詳細を見る
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">ABOUT 3RD ROOM</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                3RD ROOMは、アーティストとクリエイターのための革新的な空間です。
                展示、制作、交流の場として、新しい創造性を育む環境を提供しています。
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                私たちは、多様な表現活動をサポートし、 アートとコミュニティの架け橋となることを目指しています。
              </p>
              <Button variant="outline" size="lg">
                もっと詳しく
              </Button>
            </div>
            <div className="relative">
              <img src="/modern-creative-space.png" alt="About 3rd Room" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">GALLERY</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">UPCOMING EVENTS</h2>
          <div className="space-y-6">
            {events.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl font-bold text-gray-400">{event.date}</div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
                        <Badge variant="secondary">{event.type}</Badge>
                      </div>
                    </div>
                    <Button variant="outline">詳細</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SNS Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">FOLLOW US</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* SNS Buttons */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-6">SNSでつながろう</h3>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="flex items-center space-x-2 h-12 bg-transparent">
                  <Instagram size={20} />
                  <span>Instagram</span>
                </Button>
                <Button variant="outline" className="flex items-center space-x-2 h-12 bg-transparent">
                  <Twitter size={20} />
                  <span>Twitter</span>
                </Button>
                <Button variant="outline" className="flex items-center space-x-2 h-12 bg-transparent">
                  <Facebook size={20} />
                  <span>Facebook</span>
                </Button>
                <Button variant="outline" className="flex items-center space-x-2 h-12 bg-transparent">
                  <Youtube size={20} />
                  <span>YouTube</span>
                </Button>
              </div>
            </div>

            {/* SNS Feed Simulation */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-6">最新の投稿</h3>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full"></div>
                      <div>
                        <div className="font-semibold">3rdroom_official</div>
                        <div className="text-sm text-gray-500">2時間前</div>
                      </div>
                    </div>
                    <p className="text-sm mb-3">新しい展示が始まりました！ぜひお越しください 🎨 #3rdroom #art</p>
                    <img src="/art-exhibition-opening.png" alt="SNS Post" className="w-full h-32 object-cover rounded" />
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                      <div>
                        <div className="font-semibold">3rdroom_official</div>
                        <div className="text-sm text-gray-500">1日前</div>
                      </div>
                    </div>
                    <p className="text-sm">ワークショップの参加者募集中です！ #workshop #creative</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">CONTACT & ACCESS</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">お問い合わせ</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin size={20} className="text-gray-500" />
                  <span>東京都渋谷区〇〇 1-2-3</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-gray-500" />
                  <span>03-1234-5678</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={20} className="text-gray-500" />
                  <span>info@3rdroom.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock size={20} className="text-gray-500" />
                  <span>10:00 - 19:00 (月曜定休)</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">アクセス</h3>
              <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">地図エリア</span>
              </div>
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
