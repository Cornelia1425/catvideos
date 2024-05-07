import {useLoaderData} from 'react-router-dom'
import { useState } from 'react'

function Videos(){
    const videos = useLoaderData()

    const [search, setSearch]= useState('')

    console.log("videos: ",videos)
    const mappedVideos = videos
        .filter(video => video.name.toLowerCase().includes(search.toLowerCase()))
        .map(video=>{
            return(
                <iframe key={video.id} width="560" height="315" src={video.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            )
        }

    )

    return(

        <div>
            <h2>Your videos</h2>

            <input type='text' onChange={e=>setSearch(e.target.value)} value={search}/>

          {mappedVideos}

        </div>
    )

}

export default Videos