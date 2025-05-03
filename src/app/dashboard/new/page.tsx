'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import ImageUploader from '@/components/ImageUploader'

export default function NewBlogPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    coverImage: {
      url: '',
      public_id: ''
    },
    tags: '',
    published: true
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' 
        ? (e.target as HTMLInputElement).checked 
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
      const tagsArray = formData.tags.split(',').map(tag => tag.trim()).filter(Boolean)
      
      const payload = {
        title: formData.title,
        slug: formData.slug,
        content: formData.content,
        coverImage: formData.coverImage,
        tags: tagsArray,
        published: formData.published
      }
      
      console.log('Sending payload:', payload) // Debug log
      
      const response = await fetch('/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => null)
        console.error('Server error:', errorData)
        throw new Error(`Failed to create blog post: ${response.status} ${response.statusText}`)
      }
      
      router.push('/dashboard')
      router.refresh()
    } catch (error) {
      console.error('Error creating blog post:', error)
      alert(`Error creating blog post: ${error instanceof Error ? error.message : 'Unknown error'}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <h2 className="text-xl font-bold mb-6">Create New Blog Post</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
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
        
        <div>
          <label className="block text-sm font-medium mb-1">Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows={6}
            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Cover Image</label>
          <ImageUploader onImageUploaded={handleImageUploaded} />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Tags (comma separated)</label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            name="published"
            checked={formData.published}
            onChange={handleChange}
            className="h-4 w-4 mr-2"
          />
          <label className="text-sm font-medium">Publish immediately</label>
        </div>
        
        <div className="flex justify-end gap-2 pt-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-4 py-2 border rounded-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
          >
            {isSubmitting ? 'Saving...' : 'Save Post'}
          </button>
        </div>
      </form>
    </div>
  )
}

