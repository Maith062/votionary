import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

// Mock user database (replace with your actual database)
const users = [
  { id: 1, email: 'user@example.com', password: 'password123', name: 'John Doe', imageUrl: 'https://picsum.photos/64/64?random=116' },
  { id: 2, email: 'admin@example.com', password: 'admin123', name: 'Admin User', imageUrl: 'https://picsum.photos/64/64?random=117' }
]

export async function validateUserLogin(email, password) {
  // In production, hash passwords with bcrypt
  const user = users.find(u => u.email === email && u.password === password)
  return user ? { id: user.id, email: user.email, name: user.name, imageUrl: user.imageUrl } : null //also return user icon image
}

export async function validateUserRegister(name, emailEntered, password){
  //will have to replaced with a proper check where the db is scanned for identical usernames and emails
  const user = users.find(u => u.email == emailEntered || u.name == name)

  let account = {}

  //if there is not match, then add it to users  
  if (!user){
    account = {id: users.length + 1, email: emailEntered, password: password}
    users.push(account)
  }
  //if the user is not found, then send it back 
   return !user ? account : null
}

export async function getUser() {
  try {
    const token = cookies().get('auth-token')?.value
    
    if (!token) return null
    
    const payload = jwt.verify(token, JWT_SECRET)
    const user = users.find(u => u.id === payload.userId)
    
    return user ? { id: user.id, email: user.email, name: user.name } : null
  } catch (error) {
    return null
  }
}

export async function getAuthData() {
  const user = await getUser()
  return { user, isAuthenticated: !!user }
}