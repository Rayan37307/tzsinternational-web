import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init({
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'p0gCMNf7j-Galk4nW',
  // Do not allow headless browsers
  blockHeadless: false, // Temporarily disable to test
  limitRate: {
    // Set the limit rate for the application
    id: 'app',
    // Allow 1 request per 10s (to respect rate limits)
    throttle: 10000,
  },
});

export default emailjs;