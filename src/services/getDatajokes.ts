export async function getDataJo() {
    try{
        const data = await fetch ('https://api.chucknorris.io/jokes/search?query={query}').then(res =>res.json());
        console.log(data);
        return data.results;
    } catch (error) {
        console.error(error);
    }
    }