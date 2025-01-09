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
    if (hasPassword && isProtected) return { text: 'Arquivo altamente protegido', status: SecurityStatus.ALL_SECURE }
    else if (hasPassword) return { text: 'Arquivo protegido por senha', status: SecurityStatus.SECURE }
    else if (isProtected) return { text: 'Arquivo encriptado', status: SecurityStatus.ENCRIPTED }

    return { text: 'Arquivo inseguro', status: SecurityStatus.INSECURE }
  }

  return {
    securityStatusText: text,
    securityStatus: status
  }
}
