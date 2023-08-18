// question 1

const express = require('express')
const app = express()

app.use(express.json())

// POST /api/login
app.post('/api/login', (req, res) => {
  const {phoneNumber} = req.body

  // Validate phone number format
  if (!isValidPhoneNumber(phoneNumber)) {
    return res.status(400).json({error: 'Invalid phone number format'})
  }

  // Perform phone number login logic here

  // Assuming successful login, return a response
  return res.json({message: 'Phone number login successful'})
})

// Helper function to validate phone number format
function isValidPhoneNumber(phoneNumber) {
  // Implement your phone number validation logic here
  // Return true if the phone number is valid, false otherwise
}

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
