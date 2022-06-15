import * as jwt from "jsonwebtoken"

const JWT_SECRET = "gcbacademy"

export const tokenGenerator = (id: string) => {
    return jwt.sign({ id }, JWT_SECRET)
}

export const tokenVerifier = (token: string) => {
    return jwt.verify(token, JWT_SECRET)
}
