import React from 'react'
import { getMusic, editMusic } from "../services/music-api"
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditMusic() {
    const { id } = useParams()
    const nav = useNavigate()
    const [data, setData] = useState({})

    useEffect(() => {
        getMusic(id) // getting the music that matches this id
            .then(res => setData(res.data))
    }, [])

    const editTheMusic = e => {
        e.preventDefault()
        const updatedMusic = {
            title: e.target.title.value,
            artist: e.target.artist.value,
            imgSrc: e.target.imgSrc.value,
            src: e.target.src.value
        }
        editMusic(id, updatedMusic)
        nav('/:id')
    }
    return (
        <div>
            <form onSubmit={editTheMusic}>
                title: <input type='text' name='title' defaultValue={data.title} /> <br />
                artist: <input type='text' name='artist' defaultValue={data.artist} /> <br />
                img Src: <input type='image' name='imgSrc' alt='img' defaultValue={data.imgSrc} /> <br />
                src: <input type='file' name='song' defaultValue={data.src} /> <br />
                <input type='submit' />
            </form>
        </div>
    )
}