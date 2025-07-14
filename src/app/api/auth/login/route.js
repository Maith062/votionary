import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import { validateUserLogin } from '@/lib/auth'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function POST(request) {
  try {
    const { email, password } = await request.json()
    
    const user = await validateUserLogin(email, password)
    
    if (user) {
      const token = jwt.sign(
        { userId: user.id, userEmail: user.email, userName: user.name, userIcon: user.imageUrl }, 
        JWT_SECRET, 
        { expiresIn: '7d' }
      )
        const cookieStore = await cookies()
        cookieStore.set('auth-token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/', //makes it accessible across the entire domain
        maxAge: 60 * 60 * 24 * 7 // 7 days
      })
      
      return NextResponse.json({ 
        success: true, 
        user: { id: user.id, email: user.email, name: user.name, imageUrl: user.imageUrl} 
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
