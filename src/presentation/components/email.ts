// En celular el link mailto: abre la app de correo del teléfono.
// En computadora casi nadie tiene una app de correo configurada (usan Gmail en el navegador),
// así que mailto: no hace nada: ahí se abre Gmail en una pestaña nueva con el correo listo para escribir.
export const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches

export interface Email {
  to: string
  subject?: string
  body?: string
}

/** Dirección para escribir un correo: mailto: en celular, Gmail en computadora */
export function composeEmailUrl({ to, subject = '', body = '' }: Email) {
  if (isTouchDevice) {
    const params = new URLSearchParams({ subject, body }).toString().replace(/\+/g, '%20')
    return `mailto:${to}?${params}`
  }
  return `https://mail.google.com/mail/?${new URLSearchParams({ view: 'cm', fs: '1', to, su: subject, body })}`
}

/** Abre el correo listo para enviar (lo usa el formulario cuando no hay llave de Web3Forms) */
export function openEmail(email: Email) {
  const url = composeEmailUrl(email)
  if (isTouchDevice) window.location.href = url
  else window.open(url, '_blank', 'noopener,noreferrer')
}
