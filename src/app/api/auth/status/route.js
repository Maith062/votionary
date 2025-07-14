// app/api/auth/status/route.js
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers'; // Used to read cookies in App Router API routes

export async function GET(request) {
  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret) {
    console.error('JWT_SECRET is not defined in environment variables.');
    return NextResponse.json(
      { message: 'Server configuration error: JWT secret missing.' },
      { status: 500 }
    );
  }

  // Get the cookies store
  const cookieStore = await cookies();
  // Attempt to retrieve the 'auth_token' cookie
  const token = cookieStore.get('auth-token')?.value;

  let isAuthenticated = false;
  let user = null;

  // If a token exists in the cookie, attempt to verify it
   
  if (token) {
    
    try {
      // Verify the token using the secret.
      // If valid, 'decoded' will contain the original payload.
      const decoded = jwt.verify(token, jwtSecret);
      console.log('Decoded in /auth/status ', decoded)

      isAuthenticated = true;
      // Extract user data from the decoded token payload
      user = {
        id: decoded.userId || 'unknown_id',
        name: decoded.userName || 'Guest User',
        email: decoded.userEmail || 'guest@example.com',
        icon: decoded.userIcon || 'https://picsum.photos/64/64?random=16'
      };

    } catch (error) {
      // Handle cases where the token is invalid, expired, or malformed
      console.error('JWT verification failed (from cookie):', error.message);
      // For a status check, we just return isAuthenticated: false.
      // For a protected route, you might return a 401 Unauthorized here.
    }
  }

  // Return the authentication status and user data
  return NextResponse.json({
    isAuthenticated: isAuthenticated,
    user: user,
  });
}