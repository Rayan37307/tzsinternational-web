import { model, models, Schema } from "mongoose";

interface IPost {
  title: string;
  slug: string;
  content: string;
  coverImage?: {
    public_id: string;  // Cloudinary ID
    url: string;       // Full image URL
  };
  tags: string[];
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const postSchema = new Schema<IPost>({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
  },
  coverImage: {
    public_id: String,
    url: String
  },
  tags: {
    type: [String],
    required: true,
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

const Post = models.Post || model('Post', postSchema);

export default Post;
