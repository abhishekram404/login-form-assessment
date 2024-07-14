const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function isEmailValid(email: string) {
  return EMAIL_REGEX.test(email)
}
