import { passwordValidator, Response } from './password-validator'

describe('PasswordValidator', () => {
  let sut: Response

  beforeEach(() => {
    sut = {
      result: false,
      errors: ['']
    }
  })

  test('Should throws if password is less than 8 characters', () => {
    const error = 'A senha precisa ter mais de 8 caracteres'
    sut = passwordValidator('@nyPas$')
    const { result, errors } = sut
    expect(result).toEqual(false)
    expect(errors).toEqual([error])
  })

  test('Should throws if the password does not have a lowercase character', () => {
    const error = 'A senha precis ter pelo menos uma letra minúscula'
    sut = passwordValidator('ANY_UPPERCASE_CHARACTERS')
    const { result, errors } = sut
    expect(result).toEqual(false)
    expect(errors).toEqual([error])
  })

  test('Should throws if the password does not have a uppercase character', () => {
    const error = 'A senha precisa ter pelo menos uma letra maiúscula'
    sut = passwordValidator('any_lowercase_characters')
    const { result, errors } = sut
    expect(result).toEqual(false)
    expect(errors).toEqual([error])
  })

  test('Should throws if the password does not have two special characters', () => {
    const error = 'A senha precisa ter pelo menos 2 caracteres especiais'
    sut = passwordValidator('anypasswordVALUE')
    const { result, errors } = sut
    expect(result).toEqual(false)
    expect(errors).toEqual([error])
  })

  test('Should throws if the password have a sequence of numbers', () => {
    const error = 'A senha não pode ter uma sequencia de numeros ou letras'
    sut = passwordValidator('any_password!VALUE1234567')
    const { result, errors } = sut
    expect(result).toEqual(false)
    expect(errors).toEqual([error])
  })

  test('Should throws if the password have a sequence of letters', () => {
    const error = 'A senha não pode ter uma sequencia de numeros ou letras'
    sut = passwordValidator('abC_password!VALUE1234567')
    const { result, errors } = sut
    expect(result).toEqual(false)
    expect(errors).toEqual([error])
  })

  test('Should have more than one error if the password does not pass in more cases ', () => {
    sut = passwordValidator('ANYPASSWORD')
    const { result, errors } = sut
    expect(result).toEqual(false)
    expect(errors.length).not.toBe(0 | 1)
  })

  test('Should return success if password is correct', () => {
    sut = passwordValidator('!password@CORRECT1512')
    const { result, errors } = sut
    expect(result).toEqual(true)
    expect(errors).toEqual([''])
  })
})
