import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import './App.css'
import EditMusic from './components/EditMusic'
import Music from './components/Music'
import Musics from './components/Musics'

function App() {
  return (
    <div className="App">
      This is the DJ Fire Up Da Blount Jamz app 🕺🏾
    <Router>
        <Routes>
          <Route path='/' element={<Musics />} />
          <Route path='/:id' element={<Music />} />
          <Route path='/:id/edit' element={<EditMusic />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App