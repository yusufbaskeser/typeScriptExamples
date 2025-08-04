import mongoose, { Document, Schema } from "mongoose"

export interface IUser extends Document {
  username: string
  password: string
  token: string
  age: number
  isAdmin: boolean
}

const userSchema: Schema<IUser> = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  token: { type: String, required: true },
  age: { type: Number, required: true },
  isAdmin: { type: Boolean, default: false },
})

const User = mongoose.model<IUser>("User", userSchema)

export default User
