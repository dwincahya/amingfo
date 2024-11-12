export const getAnimeRespons = async(resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resorce}?${query}`)
    const anime = await response.json
    return anime
}