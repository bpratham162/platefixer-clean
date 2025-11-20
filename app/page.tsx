'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { UploadHero } from '@/components/upload-hero'
import { ResultPlaceholder } from '@/components/result-placeholder'

export default function Page() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (file: File) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      setUploadedImage(e.target?.result as string)
    }
    reader.readAsDataURL(file)
  }

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleFileSelect(file)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 via-green-100 to-green-50">
      {/* Food Emojis Header */}
      <div className="flex justify-center gap-4 pt-8 text-4xl sm:text-5xl md:text-6xl">
        <span className="animate-bounce" style={{ animationDelay: '0s' }}>🍎</span>
        <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🥗</span>
        <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>🍊</span>
        <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🥦</span>
        <span className="animate-bounce" style={{ animationDelay: '0s' }}>🥕</span>
      </div>

      {/* Hero Section */}
      <UploadHero 
        onUploadClick={handleButtonClick}
        hasImage={!!uploadedImage}
      />

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        aria-label="Upload food photo"
      />

      {/* Result Section */}
      {uploadedImage && (
        <ResultPlaceholder imageUrl={uploadedImage} />
      )}

      {/* Footer */}
      <footer className="mt-16 pb-8 text-center text-sm text-green-700">
        <p>🌱 Making nutrition information accessible to everyone</p>
      </footer>
    </main>
  )
}
