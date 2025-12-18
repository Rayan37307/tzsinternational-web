import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

// Check if all required environment variables are present
const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

if (!cloudName || !apiKey || !apiSecret) {
  console.error('Missing Cloudinary configuration. Please ensure CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET are set in your environment.');
}

// Initialize Cloudinary with environment variables
cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
});

export async function POST(req: Request) {
  // Check if Cloudinary is properly configured
  if (!cloudName || !apiKey || !apiSecret) {
    return NextResponse.json(
      { error: 'Server configuration error: Cloudinary credentials are missing' },
      { status: 500 }
    );
  }

  const formData = await req.formData();
  const file = formData.get('file') as File | null;

  if (!file) {
    return NextResponse.json(
      { error: 'No file uploaded' },
      { status: 400 }
    );
  }

  try {
    // Validate file type
    if (!file.type || !file.type.startsWith('image/')) {
      return NextResponse.json(
        { error: 'Invalid file type. Only images are allowed.' },
        { status: 400 }
      );
    }

    // Validate file size (limit to 5MB)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'File too large. Maximum size is 5MB.' },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    // Construct the base64 string properly
    const base64String = buffer.toString('base64');
    const fileUri = `data:${file.type};base64,${base64String}`;

    console.log('About to upload to Cloudinary with type:', file.type);
    console.log('File URI length:', fileUri.length);

    const result = await cloudinary.uploader.upload(
      fileUri,
      {
        folder: 'blog-images',
        resource_type: 'auto' // Specify the resource type automatically
      }
    );
    console.log('Upload result:', result);

    return NextResponse.json({
      url: result.secure_url,
      publicId: result.public_id
    });

  } catch (error) {
    console.error('Upload API error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Upload failed';

    // Log the specific error for debugging
    console.error('Detailed error:', {
      message: errorMessage,
      stack: error instanceof Error ? error.stack : undefined
    });

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
