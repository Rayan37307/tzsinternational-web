'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ImageUploaderProps {
  onImageUploaded: (imageData: { url: string, publicId: string }) => void
  currentImage?: string
}

export default function ImageUploader({ onImageUploaded, currentImage }: ImageUploaderProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [uploadedImage, setUploadedImage] = useState(currentImage || '')
  const [error, setError] = useState('')

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Reset states
    setError('')
    setIsUploading(true)
    
    // Create form data
    const formData = new FormData()
    formData.append('file', file)
    
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Upload failed: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()
      setUploadedImage(data.url)
      onImageUploaded({ url: data.url, publicId: data.publicId })
    } catch (err) {
      console.error('Upload error details:', err);
      let errorMessage = 'Failed to upload image. Please try again.';

      if (err instanceof Error) {
        if (err.message.includes('Cloudinary credentials')) {
          errorMessage = 'Server configuration error. Please contact the administrator.';
        } else {
          errorMessage = err.message;
        }
      }

      setError(errorMessage);
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              {isUploading ? 'Uploading...' : 'Click to upload cover image'}
            </p>
          </div>
          <input 
            type="file" 
            className="hidden" 
            accept="image/*"
            onChange={handleUpload}
            disabled={isUploading}
          />
        </label>
      </div>
      
      {error && <p className="text-red-500 text-sm">{error}</p>}
      
      {uploadedImage && (
        <div className="relative w-full h-48 mt-4 rounded-lg overflow-hidden">
          <Image 
            src={uploadedImage} 
            alt="Uploaded cover image" 
            fill
            className="object-cover"
          />
        </div>
      )}
    </div>
  )
}