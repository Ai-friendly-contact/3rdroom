export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
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
                3RD ROOMは、アーティストやクリエイターが自由に表現し、交流できるための革新的なスペースです。
                展示、制作、そしてコミュニティ活動を通じて、新しい創造性を育みます。
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
          <p className="text-gray-600 leading-relaxed">
            アートをもっと身近に、もっと自由に。3RD ROOMは展示空間であると同時に、
            制作スタジオであり、交流の場でもあります。
            アーティストと来場者が垣根を越えてつながり、新しいカルチャーを生み出す場を目指します。
          </p>
        </div>
      </section>
    </div>
  )
}
