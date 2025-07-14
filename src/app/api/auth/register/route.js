import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import { validateUserRegister } from '@/lib/auth'

const JWT_SECRET = process.env.JWT_SECRET || 'secret_key_no_2'

export async function POST(request){
    try{
        const {name, email, password} = await request.json()
        const user = await validateUserRegister(name, email, password)

        if (user){
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
            { error: 'Either user name or email in use' }, 
            { status: 401 }
        )
    } catch (error){
        return NextResponse.json(
            { error: `Registration Failed ${error}` }, 
            { status: 500 }
        )
        
    }
}