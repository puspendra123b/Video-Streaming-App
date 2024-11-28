
import './App.css'
import VideoPlayer from './components/VideoPlayer'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
// import UploadVideo from './components/UploadVideo'
import {Collection} from './components/Collection'
import { Episodes } from './components/Episodes'
import { Landing } from './components/Landing'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<VideoPlayer fileId={"1B_M8tWpSf1wizyYNj-xLZu1YpluBPyT4"} />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/add-episodes' element={<Episodes/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
