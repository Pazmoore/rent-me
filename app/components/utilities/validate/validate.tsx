export const phoneNumberPattern = /^[0-9]{10,15}$/
export const passwordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^(A-Za-z0-9)]).{8,32}$/
export const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export const isEmailValid = (email: any) => emailPattern.test(email)
export const isPasswordValid = (password: any) => passwordPattern.test(password)