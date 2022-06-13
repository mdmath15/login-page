const MIN_LENGTH = 8
const SPECIAL_CHARACTERES = '!@#$%^&*)(+=._-<>?/:;'
const NUMBERS = '0123456789'

export type Response = {
  result: boolean
  errors: string[]
}

export const passwordValidator = (password: string | undefined): Response => {
  let response: Response = {
    result: false,
    errors: []
  }

  const validations = [
    {
      validate: (password: string) => password.length < MIN_LENGTH,
      message: 'Password is too short'
    },
    {
      validate: (password: string) => lowerCaseValidator(password),
      message: 'Password must contain at least one lower case letter'
    },
    {
      validate: (password: string) => upperCaseValidator(password),
      message: 'Password must contain at least one upper case letter'
    },
    {
      validate: (password: string) => specialCharactersValidator(password),
      message: 'Password must contain at least two special characters'
    },
    {
      validate: (password: string) => sequenceValidator(password),
      message: 'Password must not contain sequence'
    }
  ]

  for (let validation of validations) {
    if (validation.validate(password as string)) {
      response.errors.push(validation.message)
    }
  }

  if (response.errors.length > 0) {
    return response
  }

  return {
    result: true,
    errors: ['']
  }
}

const lowerCaseValidator = (password: string): boolean => {
  let hasLowerCase = true
  password.split('').forEach((char) => {
    if (SPECIAL_CHARACTERES.includes(char) || NUMBERS.includes(char)) {
      return true
    }
    if (char.toLowerCase() == char) {
      hasLowerCase = false
    }
  })
  return hasLowerCase
}

const upperCaseValidator = (password: string): boolean => {
  let hasUpperCase = true
  password.split('').forEach((char) => {
    if (SPECIAL_CHARACTERES.includes(char) || NUMBERS.includes(char)) {
      return true
    }
    if (char.toUpperCase() === char) {
      hasUpperCase = false
    }
  })
  return hasUpperCase
}

const specialCharactersValidator = (password: string): boolean => {
  const specialCaracteres = password.split('').filter((char) => SPECIAL_CHARACTERES.includes(char))

  if (specialCaracteres.length < 2) {
    return true
  }

  return false
}

const sequenceValidator = (password: string): boolean => {
  for (let i = 0; i < password.length; i++) {
    if (+password[i + 1] === +password[i] + 1 && +password[i + 2] === +password[i] + 2) {
      return true
    }
  }

  const passwordUpperCase = password.toUpperCase()

  for (let i = 0; i < passwordUpperCase.length; i++) {
    if (
      String.fromCharCode(passwordUpperCase.charCodeAt(i) + 1) === passwordUpperCase[i + 1] &&
      String.fromCharCode(passwordUpperCase.charCodeAt(i) + 2) === passwordUpperCase[i + 2]
    ) {
      return true
    }
  }

  return false
}
