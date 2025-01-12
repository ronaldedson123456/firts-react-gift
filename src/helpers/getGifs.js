
export const getGifs = async ( category ) => {

    try {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=JshU7Ovgcofl4pz0G2S20O5ORVOHhgPX&q=${ category }&limit=10`;
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map( img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
            })
        );

        // console.log( gifs );
        // console.log( category );
        return gifs;

    } catch (error) {
        console.error(error);
    }


}
