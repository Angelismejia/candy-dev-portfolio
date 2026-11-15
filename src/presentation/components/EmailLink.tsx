import type { ReactNode } from 'react'
import { composeEmailUrl, isTouchDevice, type Email } from './email'

// Link de correo que de verdad abre algo para escribir (ver email.ts)

interface EmailLinkProps extends Email {
  children: ReactNode
  className?: string
  'aria-label'?: string
}

export function EmailLink({ to, subject, body, children, className, 'aria-label': ariaLabel }: EmailLinkProps) {
  const external = !isTouchDevice
  return (
    <a
      href={composeEmailUrl({ to, subject, body })}
      className={className}
      aria-label={ariaLabel}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  )
}
