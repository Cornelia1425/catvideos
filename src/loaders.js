export async function videosLoader(){
    const response = await fetch ('http://localhost:3000/videos')

    const data = await response.json()

    console.log(data)
    return data
}