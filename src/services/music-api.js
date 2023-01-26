// All our endpoints
import axios from 'axios' //similar to fetch but cleaner
const baseURL = 'http://localhost:3001/music'
// Show all
export const getMusics = () => {
    const URL = baseURL //our base url
    const response = axios.get(URL) // using axios's get functionality to get our Todos
    return response
}
// Show one
export const getMusic = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.get(URL)
    return response
}
// Edit the Todo
export const editMusic = (id, updatedMusic) => {
    const URL = `${baseURL}/${id}`
    const response = axios.put(URL, updatedMusic)
    return response
}
// Create the Music
export const createMusic = (music) => {
    const URL = baseURL
    const response = axios.post(URL, music)
    return response
}
// Delete the Todo
export const deleteMusic = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.delete(URL)
    return response
}