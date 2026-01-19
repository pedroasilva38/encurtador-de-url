import MainMenu from "@/components/MainMenuComponent"
import LinkComponent from "@/components/LinkComponent"

const links = [
    {
        shortenedLink: "lume.com/minerva",
        baseLink: "https://www.youtube.com/@GustavoMinerva",
        createdAt: "2023-05-15T22:43:22Z",
        clicks: 26
    },
    {
        shortenedLink: "lume.com/absolut",
        baseLink: "https://www.youtube.com/@CortesdoAbsolut",
        createdAt: "2024-08-20T10:29:15Z",
        clicks: 19
    },
]

function LinksPage() {

    return (
        <MainMenu content={links.map((item) => (
            <LinkComponent data={item} />
        ))}
        />
    )
}

export default LinksPage