"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ImageUploader from "@/components/ImageUploader";
import {
  Save,
  X,
  Calendar,
  DollarSign,
  MapPin,
  Star,
  Eye,
  Image,
  Loader2,
} from "lucide-react";

type Props = {
  params: { id: string };
};

export default function EditTourPage({ params }: Props) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    duration: 1,
    price: 0,
    location: "",
    coverImage: {
      url: "",
      public_id: "",
    },
    featured: false,
    published: false,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    async function fetchTour() {
      try {
        const res = await fetch(`/api/tour/${params.id}`);
        if (!res.ok) throw new Error("Failed to fetch tour");

        const tour = await res.json();
        setFormData({
          title: tour.title || "",
          slug: tour.slug || "",
          description: tour.description || "",
          duration: tour.duration || 1,
          price: tour.price || 0,
          location: tour.location || "",
          coverImage: tour.coverImage || { url: "", public_id: "" },
          featured: tour.featured || false,
          published: tour.published || false,
        });
      } catch (error) {
        console.error("Error fetching tour:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTour();
  }, [params.id]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : type === "number"
          ? parseFloat(value)
          : value,
    }));
  };

  const handleImageUploaded = (imageData: {
    url: string;
    publicId: string;
  }) => {
    setFormData((prev) => ({
      ...prev,
      coverImage: {
        url: imageData.url,
        public_id: imageData.publicId,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        id: params.id,
        title: formData.title,
        slug: formData.slug,
        description: formData.description,
        duration: formData.duration,
        price: formData.price,
        location: formData.location,
        coverImage: formData.coverImage,
        featured: formData.featured,
        published: formData.published,
      };

      const response = await fetch("/api/tour", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to update tour package");

      router.push("/dashboard/tours");
      router.refresh();
    } catch (error) {
      console.error("Error updating tour package:", error);
      alert("Failed to update tour package. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
          <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <h2 className="text-xl font-bold mb-6">Edit Tour Package</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            <label className="block text-sm font-medium mb-1">
              Duration (days)
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
            <label className="block text-sm font-medium mb-1">Price ($)</label>
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
            <label className="block text-sm font-medium mb-1">Location</label>
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
          <label className="block text-sm font-medium mb-1">Cover Image</label>
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
            <label htmlFor="featured" className="text-sm font-medium">
              Featured
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
            <label htmlFor="published" className="text-sm font-medium">
              Publish immediately
            </label>
          </div>
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
            {isSubmitting ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}
