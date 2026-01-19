import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"

export function relativeDate(date: string) {
    const objectDate = new Date(date)
    const relativeTime = formatDistanceToNow(objectDate, {
        addSuffix: true,
        locale: ptBR,
    })
    
    return relativeTime
}