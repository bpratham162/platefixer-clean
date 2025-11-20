'use client'

import { Button } from '@/components/ui/button'
import { Upload } from 'lucide-react'

interface UploadHeroProps {
  onUploadClick: () => void
  hasImage: boolean
}

export function UploadHero({ onUploadClick, hasImage }: UploadHeroProps) {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-12 sm:py-16 md:py-20">
      {/* Hero Text */}
      <div className="max-w-2xl text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-900 mb-6 text-balance leading-tight">
          Snap your plate.
          <br className="hidden sm:block" />
          AI fixes it instantly.
        </h1>
        <p className="text-base sm:text-lg text-green-700 mb-8 text-balance">
          Upload a photo of your meal and get instant nutrition insights, dietary fixes, and a personalized 7-day meal plan.
        </p>
      </div>

      {/* Upload Button */}
      <Button
        onClick={onUploadClick}
        size="lg"
        className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-6 h-auto text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
      >
        <Upload className="w-6 h-6" />
        Upload Photo
      </Button>

      {!hasImage && (
        <p className="text-green-600 text-sm mt-4 text-center">
          or drag and drop your food photo here
        </p>
      )}
    </section>
  )
}
