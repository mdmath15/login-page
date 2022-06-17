import { useState } from 'react'

export interface Form {
  name?: string
  email: string
  password: string
  terms?: boolean
}

export function useForm(initialState: Form) {
  const [form, setForm] = useState<Form>(initialState)

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  return { form, handleInputChange }
}
