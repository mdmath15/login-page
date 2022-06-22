import { IdGenerator } from './id-generator'
describe('IdGenerator', () => {
  test('Should return an id', () => {
    const id = IdGenerator()
    expect(id).toBeDefined()
  })
})
