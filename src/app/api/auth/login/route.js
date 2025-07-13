import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import { validateUser } from '@/lib/auth'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function POST(request) {
  try {
    const { email, password } = await request.json()
    
    const user = await validateUser(email, password)
    
    if (user) {
      const token = jwt.sign(
        { userId: user.id }, 
        JWT_SECRET, 
        { expiresIn: '7d' }
      )
      
      cookies().set('auth-token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/', //makes it accessible across the entire domain
        maxAge: 60 * 60 * 24 * 7 // 7 days
      })
      
      return NextResponse.json({ 
        success: true, 
        user: { id: user.id, email: user.email, name: user.name } 
      })
    }
    
    return NextResponse.json(
      { error: 'Invalid credentials' }, 
      { status: 401 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Login failed' }, 
      { status: 500 }
    )
  }
}
