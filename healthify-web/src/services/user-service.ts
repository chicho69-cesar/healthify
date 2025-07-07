import { User } from '@/types/user'
import * as db from '@/database/db'
import bcrypt from 'bcryptjs'
import { User as UserDB } from '@/database/user'

export async function getUser(email: string): Promise<User | undefined> {
  try {
    await db.connect()
    const user = await UserDB.findOne({ email })
    await db.disconnect()

    if (!user) {
      return undefined
    }

    return user as User
  } catch (error) {
    console.error('Failed to fetch user:', error)
    throw new Error('Failed to fetch user.')
  }
}

export async function createUser(name: string, email: string, password: string): Promise<User> {
  try {
    await db.connect()
    const passwordHashed = await bcrypt.hash(password, 10)
    const newUser = await UserDB.create({ name, email, password: passwordHashed })
    await db.disconnect()

    return newUser as User
  } catch (error) {
    console.error('Failed to create user:', error)
    throw new Error('Failed to create user.')
  }
}
