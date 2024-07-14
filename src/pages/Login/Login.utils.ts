import { Creds } from '@hooks/useLogin'
import isEmailValid from '@utils/isEmailValid'

export const validateCreds = (creds: Creds) => {
  const errors = {
    email: '',
    password: '',
  }

  if (!creds.email) {
    errors.email = 'Email is required.'
  }

  if (!creds.password) {
    errors.password = 'Password is required.'
  }

  if (creds.email && !isEmailValid(creds.email)) {
    errors.email = 'Email is invalid.'
  }

  return {
    errors,
    hasError: Object.values(errors).some(Boolean),
  }
}
