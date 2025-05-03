# TZS International - Travel Website

A modern travel website built with Next.js, featuring tours, blogs, and a dark mode theme.

## Features

- **Dark Mode Design**: Sleek dark-themed UI throughout the website
- **Tour Packages**: Browse and view detailed tour information
- **Blog Section**: Read travel tips and stories
- **Responsive Design**: Works on all devices from mobile to desktop
- **Smooth Animations**: Enhanced user experience with subtle animations
- **API Integration**: Backend API for tours and blog content
- **Cloudinary Integration**: Image storage and optimization

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: GSAP
- **Database**: MongoDB with Mongoose
- **Image Storage**: Cloudinary
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- MongoDB database
- Cloudinary account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/tzsinter-website.git
   cd tzsinter-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Fill in your MongoDB and Cloudinary credentials

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment on Vercel

### Automatic Deployment

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Configure the environment variables in Vercel dashboard
4. Deploy

### Manual Deployment

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

## Environment Variables

Make sure to set these environment variables in your Vercel project:

- `MONGODB_URI`: Your MongoDB connection string
- `CLOUDINARY_CLOUD_NAME`: Your Cloudinary cloud name
- `CLOUDINARY_API_KEY`: Your Cloudinary API key
- `CLOUDINARY_API_SECRET`: Your Cloudinary API secret
- `NEXT_PUBLIC_SITE_URL`: Your production URL

## License

This project is licensed under the MIT License - see the LICENSE file for details.
