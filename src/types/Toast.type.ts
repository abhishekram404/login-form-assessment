export module IToast {
  export type ToastType = 'success' | 'error' | 'info'

  export type Toast = {
    message: string
    type: ToastType
  }

  export type ToastContextType = {
    toasts: Toast[]
    addToast: (toast: Toast) => void
  }
}
