import { useState, useEffect } from "react"
import { getMusic, deleteMusic } from "../services/music-api"
import { useParams, useNavigate } from 'react-router-dom'

export default function Music() {
    const nav = useNavigate()
    const { id } = useParams() // destructuring the id params
    const [music, setMusic] = useState({}) // setting up our state
    useEffect(() => {
        getMusic(id) // getting the one Music from the api using the id
            .then(res => setMusic(res.data))
    }, [])
    
    const deleteTheMusic = () => {
        deleteMusic(id)
        nav('/') // delete function needs to go here and navigate back to the main screen
    }

    return (
        <div>
            <h1>{music.imgSrc}</h1>
            <h2>{music.title}</h2>
            <h3>{music.artist}</h3>
            <button onClick={() => { nav(`/${id}/edit`) }}>Edit</button>
            <button onClick={deleteTheMusic}>Delete</button>
            <button onClick={() => { nav('/') }}>Main</button>
        </div>
    )
}