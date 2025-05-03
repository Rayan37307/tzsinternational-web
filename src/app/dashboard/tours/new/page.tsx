'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import ImageUploader from '@/components/ImageUploader'
import { 
  Save, 
  X, 
  Calendar, 
  DollarSign, 
  MapPin, 
  Star, 
  Eye, 
  Image,
  Loader2
} from 'lucide-react'

export default function NewTourPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    duration: 1,
    price: 0,
    location: '',
    coverImage: {
      url: '',
      public_id: ''
    },
    featured: false,
    published: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' 
        ? (e.target as HTMLInputElement).checked 
        : type === 'number'
        ? parseFloat(value)
        : value
    }))
  }

  const handleImageUploaded = (imageData: { url: string, publicId: string }) => {
    setFormData(prev => ({
      ...prev,
      coverImage: {
        url: imageData.url,
        public_id: imageData.publicId
      }
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const payload = {
        title: formData.title,
        slug: formData.slug,
        description: formData.description,
        duration: formData.duration,
        price: formData.price,
        location: formData.location,
        coverImage: formData.coverImage,
        featured: formData.featured,
        published: formData.published
      }
      
      const response = await fetch('/api/tour', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => null)
        console.error('Server error:', errorData)
        throw new Error(`Failed to create tour package: ${response.status} ${response.statusText}`)
      }
      
      router.push('/dashboard/tours')
      router.refresh()
    } catch (error) {
      console.error('Error creating tour package:', error)
      alert(`Error creating tour package: ${error instanceof Error ? error.message : 'Unknown error'}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Generate slug from title
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value
    setFormData(prev => ({
      ...prev,
      title,
      slug: title.toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
    }))
  }

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <h2 className="text-xl font-bold mb-6">Create New Tour Package</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleTitleChange}
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Slug</label>
            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            required
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1 flex items-center gap-1">
              <Calendar size={16} />
              <span>Duration (days)</span>
            </label>
            <input
              type="number"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              min="1"
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1 flex items-center gap-1">
              <DollarSign size={16} />
              <span>Price ($)</span>
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              min="0"
              step="0.01"
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1 flex items-center gap-1">
              <MapPin size={16} />
              <span>Location</span>
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1 flex items-center gap-1">
            <Image size={16} />
            <span>Cover Image</span>
          </label>
          <ImageUploader onImageUploaded={handleImageUploaded} />
          {formData.coverImage.url && (
            <div className="mt-2">
              <img 
                src={formData.coverImage.url} 
                alt="Cover preview" 
                className="h-40 object-cover rounded-md"
              />
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="featured"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
              className="h-4 w-4 mr-2"
            />
            <label htmlFor="featured" className="text-sm font-medium flex items-center gap-1">
              <Star size={16} className="text-yellow-500" />
              <span>Featured</span>
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="published"
              name="published"
              checked={formData.published}
              onChange={handleChange}
              className="h-4 w-4 mr-2"
            />
            <label htmlFor="published" className="text-sm font-medium flex items-center gap-1">
              <Eye size={16} className="text-green-500" />
              <span>Publish immediately</span>
            </label>
          </div>
        </div>
        
        <div className="flex justify-end gap-2 pt-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-4 py-2 border rounded-md flex items-center gap-2"
          >
            <X size={18} />
            <span>Cancel</span>
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 flex items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>Saving...</span>
              </>
            ) : (
              <>
                <Save size={18} />
                <span>Save Tour Package</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
