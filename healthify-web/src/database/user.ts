import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required']
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true
    },
    password: {
      type: String,
      required: [true, 'Password is required']
    }
  },
  {
    toJSON: { virtuals: true },
    timestamps: true,
    toObject: { virtuals: true },
    collection: 'users'
  }
)

userSchema.methods.toJSON = function () {
  const { __v, password, _id, ...user } = this.toObject()
  user.id = _id
  return user
}

export const User = mongoose.models.User || mongoose.model('User', userSchema)
