"use client"

import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold">3RD ROOM</h1>
        <nav className="flex space-x-6">
          <Link href="/">HOME</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/gallery">GALLERY</Link>
          <Link href="/events">EVENTS</Link>
          <Link href="/access">ACCESS</Link>
          <Link href="/contact">CONTACT</Link>
        </nav>
      </div>
    </header>
  )
}
