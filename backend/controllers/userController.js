import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'

// login function
const loginUser = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await userModal.findOne({ email })
    if (!user) {
      return res.json({ success: false, message: "User doesn't exist" })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.json({ success: false, message: 'Invalid Creds' })
    }

    const token = createToken(user._id)
    res.json({ success: true, token })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: 'Error' })
  }
}

// create a token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET)
}

// register function
const registerUser = async (req, res) => {
  const { username, password, email } = req.body

  try {
    const exists = await userModal.findOne({ email })
    if (exists) {
      return res.json({ success: false, message: 'User Already Exists' })
    }

    // validation
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: 'Please Enter a valid Email' })
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: 'Please Enter a Strong Password',
      })
    }

    // if everything works
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // new user
    const newUser = new userModal({
      username: username,
      email: email,
      password: hashedPassword,
    })

    const user = await newUser.save()

    const token = createToken(user._id)
    res.json({ sucess: true, token })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: 'Error' })
  }
}

export { loginUser, registerUser }
