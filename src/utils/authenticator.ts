import * as jwt from 'jsonwebtoken'

const JWT_SECRET = 'gcbacademy'

const tokenGenerator = (id: string) => {
  return jwt.sign({ id }, JWT_SECRET, { expiresIn: '1h' })
}

const tokenVerifier = (token: string) => {
  let isValid: { id: string } | boolean = { id: '' }
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      isValid = false
    }
    isValid = decoded as { id: string }
  })
  return isValid
}

export const Authentication = {
  tokenGenerator,
  tokenVerifier
}