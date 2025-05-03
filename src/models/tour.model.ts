import { model, models, Schema } from "mongoose";

interface ITour {
  title: string;
  slug: string;
  description: string;
  duration: number;
  price: number;
  location: string;
  coverImage?: {
    public_id: string;
    url: string;
  };
  featured: boolean;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const tourSchema = new Schema<ITour>({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  coverImage: {
    public_id: String,
    url: String
  },
  featured: {
    type: Boolean,
    default: false,
  },
  published: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Tour = models.Tour || model('Tour', tourSchema);

export default Tour;