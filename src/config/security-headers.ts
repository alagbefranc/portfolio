// Security headers configuration for Next.js
export const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(self "https://genvoice-n7usixhv.livekit.cloud"), geolocation=()'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://static-bundles.visme.co https://cdnjs.cloudflare.com https://app.supademo.com https://www.googletagmanager.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      img-src 'self' data: blob: https:;
      font-src 'self' https://fonts.gstatic.com;
      connect-src 'self' wss://genvoice-n7usixhv.livekit.cloud https://genvoice-n7usixhv.livekit.cloud https://portfolio-voice-ai.onrender.com https://api.visme.co https://app.supademo.com https://identitytoolkit.googleapis.com https://firestore.googleapis.com https://firebase.googleapis.com https://securetoken.googleapis.com https://firebaseinstallations.googleapis.com https://www.googletagmanager.com;
      media-src 'self' blob:;
      object-src 'none';
      frame-src 'self' https://my.visme.co https://app.supademo.com;
      base-uri 'self';
      form-action 'self' https://api.visme.co;
      frame-ancestors 'none';
      upgrade-insecure-requests;
    `.replace(/\s{2,}/g, ' ').trim()
  }
];
