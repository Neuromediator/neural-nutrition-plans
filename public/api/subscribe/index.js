// Mock API endpoint for email subscriptions
// In production, this would be replaced with actual backend logic

export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock success response
    // In production, this would save to database, send to mailing service, etc.
    console.log(`New email subscription: ${email}`);

    return res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed to early access',
      email: email
    });

  } catch (error) {
    console.error('Subscription error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

// Simple fallback for static hosting
if (typeof module !== 'undefined' && module.exports) {
  module.exports = handler;
} else if (typeof window !== 'undefined') {
  // Browser fallback - simulate the API
  window.mockSubscribeAPI = async (email) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (!email || !email.includes('@')) {
      throw new Error('Invalid email');
    }
    
    console.log(`Mock subscription: ${email}`);
    return { success: true };
  };
}