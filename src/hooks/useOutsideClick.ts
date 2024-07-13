import { RefObject, useEffect } from 'react'

export default function useOutsideClick(
  ref: RefObject<HTMLElement>,
  handler: (event: Event) => void,
) {
  useEffect(() => {
    const listener: EventListenerOrEventListenerObject = event => {
      if (!ref.current || ref.current?.contains?.(event.target as Node)) {
        return
      }
      handler(event)
    }
    document.addEventListener('mousedown', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [ref, handler])
}
