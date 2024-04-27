import { User } from '@/types/user'
import bcrypt from 'bcrypt'

export async function getUser(email: string): Promise<User | undefined> {
  try {
    // get the user from the db

    return {
      id: '1',
      email: 'cesarvillalobosolmos.01@gmail.com',
      name: 'Cesar Villalobos Olmos',
      password: await bcrypt.hash('123abcABC', 10)
    }
  } catch (error) {
    console.error('Failed to fetch user:', error)
    throw new Error('Failed to fetch user.')
  }
}
