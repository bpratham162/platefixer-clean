'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Calendar } from 'lucide-react'
import Image from 'next/image'

interface ResultPlaceholderProps {
  imageUrl: string
}

export function ResultPlaceholder({ imageUrl }: ResultPlaceholderProps) {
  return (
    <section className="px-4 py-12 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Image Section */}
        <Card className="bg-white shadow-lg overflow-hidden border-0">
          <div className="relative w-full aspect-square bg-green-50">
            <img
              src={imageUrl || "/placeholder.svg"}
              alt="Uploaded food"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 bg-gradient-to-r from-green-50 to-green-100">
            <p className="text-sm font-medium text-green-900">Photo uploaded successfully</p>
          </div>
        </Card>

        {/* Text & Fixes Section */}
        <div className="space-y-6">
          {/* AI Fixes */}
          <Card className="bg-white shadow-lg border-0 p-6">
            <h2 className="text-xl font-bold text-green-900 mb-4">AI Nutrition Analysis</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3 pb-3 border-b border-green-100">
                <span className="text-2xl">🥗</span>
                <div>
                  <p className="font-semibold text-green-900">Meal Type</p>
                  <p className="text-sm text-green-700">Analyzing your meal composition...</p>
                </div>
              </div>
              <div className="flex items-start gap-3 pb-3 border-b border-green-100">
                <span className="text-2xl">📊</span>
                <div>
                  <p className="font-semibold text-green-900">Nutritional Facts</p>
                  <p className="text-sm text-green-700">Calculating calories, macros, and vitamins...</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <p className="font-semibold text-green-900">Suggestions</p>
                  <p className="text-sm text-green-700">Personalized health recommendations...</p>
                </div>
              </div>
            </div>
          </Card>

          {/* 7-Day Plan CTA */}
          <Card className="bg-gradient-to-r from-green-600 to-green-500 shadow-lg border-0 p-6">
            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Get Your 7-Day Plan
            </h3>
            <p className="text-green-50 text-sm mb-4">
              Based on this meal and your preferences, get a complete customized meal plan to optimize your nutrition.
            </p>
            <Button className="w-full bg-white hover:bg-green-50 text-green-600 font-semibold rounded-lg">
              Generate Plan
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}
