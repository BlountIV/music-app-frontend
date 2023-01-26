import { useNavigate } from "react-router-dom"
import {createMusic} from '../services/music-api'

function Create() {
    const nav = useNavigate()

    const createTheMusic = (e) => {
        const music = {
            title: e.target.title.value, 
            artist: e.target.artist.value,
            imgSrc: e.target.imgSrc.value,
            src: e.target.src.value
        }
        console.log(music)
        createMusic(music)
        nav('/')
    }

return(
    <div>
        <h4>Getting the Jams 🕺🏾</h4>
        <form onSubmit={createTheMusic}>
            Title: <input type='text' name='title' id='title'/> <br />
            Artist: <input type='text' name='artist' id='artist'/> <br />
            Img Src: <input type='text' name='imgSrc' id='imgSrc'/> <br />
            Src: <input type='text' name='src' id='src'/> <br />
            <input type='submit'/>
        </form>
    </div>
)
}

export default Create