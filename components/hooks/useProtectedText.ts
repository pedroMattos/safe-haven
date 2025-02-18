import { SecurityStatus } from "@/enums/SecurityStatus.enum"
import { useEffect, useState } from "react"

interface UseProtectedTextParams {
  hasPassword: boolean
  isProtected: boolean
}

export default function useProtectedText({ hasPassword, isProtected }: UseProtectedTextParams): { securityStatusText: string, securityStatus: SecurityStatus } {
  const [text, setText] = useState<string>('Arquivo inseguro')
  const [status, setStatus] = useState<SecurityStatus>(SecurityStatus.INSECURE)

  useEffect(() => {
    const { text, status } = securityDetails()
    setText(text)
    setStatus(status)
  }, [])

  // TODO explicar o que significa estar encriptado
  const securityDetails = (): { text: string, status: SecurityStatus } => {
    if (hasPassword && isProtected) return { text: 'Altamente seguro', status: SecurityStatus.ALL_SECURE }
    else if (hasPassword) return { text: 'Seguro', status: SecurityStatus.SECURE }
    else if (isProtected) return { text: 'Encriptado', status: SecurityStatus.ENCRIPTED }

    return { text: 'Inseguro', status: SecurityStatus.INSECURE }
  }

  return {
    securityStatusText: text,
    securityStatus: status
  }
}
