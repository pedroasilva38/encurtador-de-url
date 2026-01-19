import { z } from 'zod'
import { relativeDate } from '@/services/utils'

const linkComponentSchema = z.object({
    data: z.object({
        shortenedLink: z.string(),
        baseLink: z.string(),
        createdAt: z.iso.datetime(),
        clicks: z.number()
    })
})

type LinkComponentType = z.infer<typeof linkComponentSchema>

function LinkComponent( { data }: LinkComponentType ) {
    const relativeTime = relativeDate(data.createdAt)    

    return (
        <div className="rounded-2xl p-4 bg-lume-dark border-2 border-gray-700 flex flex-col gap-1">
            <p className="text-2xl text-lume-bright font-semibold">{data.shortenedLink}</p>
            <p className="text-lg text-gray-500">{data.baseLink}</p>
            <p className="text-lg font-semibold text-gray-700">Criado há {relativeTime} • {data.clicks} cliques</p>
            
        </div>
    )
}

export default LinkComponent