import { WhatsAppIcon } from './Icons'
import { useLanguage } from '../i18n/language'
import styles from './WhatsAppButton.module.css'

interface WhatsAppButtonProps {
  phone: string
}

// Botón redondo que flota en la esquina y abre un chat de WhatsApp con un saludo listo
export function WhatsAppButton({ phone }: WhatsAppButtonProps) {
  const { t } = useLanguage()
  if (!phone) return null

  return (
    <a
      className={styles.button}
      href={`https://wa.me/${phone}?text=${encodeURIComponent(t.whatsapp.greeting)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsapp.label}
    >
      <WhatsAppIcon size={30} />
      <span className={styles.tooltip}>{t.whatsapp.tooltip}</span>
    </a>
  )
}
