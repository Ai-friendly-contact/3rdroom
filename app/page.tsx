export default function ThirdRoomPage() {
  // ... 既存のコード

  return (
    <div className="min-h-screen bg-white">
      {/* 既存のコード */}
      
      {/* Gallery Section */}
      <section id="GALLERY" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">GALLERY</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group cursor-pointer">
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg"
                  onClick={() => setEnlargedImage(image)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="EVENTS" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">EVENTS</h2>
          <div className="grid gap-4 max-w-2xl mx-auto">
            {events.map((event, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border">
                <div>
                  <p className="text-sm text-gray-500">{event.date}</p>
                  <h3 className="font-semibold">{event.title}</h3>
                </div>
                <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">{event.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="map-section" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">ACCESS & CONTACT</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">アクセス情報</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="mr-3" size={20} />
                  <span>東京都渋谷区〇〇-〇-〇</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-3" size={20} />
                  <span>10:00 - 19:00 (火曜定休)</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-3" size={20} />
                  <span>03-1234-5678</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-3" size={20} />
                  <span>info@3rdroom.com</span>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Map Area</p>
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
                <Instagram size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                <Twitter size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                <Facebook size={20} className="text-gray-400 hover:text-white cursor-pointer" />
                <Youtube size={20} className="text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">CONTACT</h4>
              <p className="text-gray-400 text-sm">info@3rdroom.com</p>
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
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setEnlargedImage(null)}
        >
          <img 
            src={enlargedImage} 
            alt="Enlarged view"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  )
}