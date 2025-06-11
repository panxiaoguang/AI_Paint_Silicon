'use server'
import { cookies } from 'next/headers'
import { jwtVerify } from 'jose'

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET_KEY)

export async function getAuthUser() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('auth-token')

    if (!token) {
      return null
    }

    const { payload } = await jwtVerify(token.value, SECRET_KEY)
    
    if (payload.authenticated) {
      return { username: payload.username }
    }
    
    return null
  } catch (error) {
    return null
  }
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete('auth-token')
}