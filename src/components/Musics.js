import Music from "./Music"
import { getMusics } from "../services/music-api"
import { useState, useEffect } from "react"
import Create from "./CreateMusic"

export default function Musics() {
    const [musics, setMusics] = useState([])
    useEffect(() => {
        getMusics() // calling the function to get data
            .then(res => setMusics(res.data)) // setting state with returned data
    }, [])
    console.log(musics)
    return (
        <div>
            <ul>
                {musics.map((music) => {
                    return (
                        <li><a href={`/${music._id}`}>{music.title}</a></li>
                    )
                })}
            </ul>
            <Create />
        </div>
    )
}