export interface Login{
  email: string
  password: string
}

export interface Register{
  name: string
  email: string
  phoneNumber: string
  password: string
}

export interface ResetToken{
  email: string
}

export interface ResetPassword{
  email: string
  token: string
  password: string
  confirmPassword: string
}