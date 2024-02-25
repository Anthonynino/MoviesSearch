
import './App.css'

import {Routes, Route, BrowserRouter} from 'react-router-dom'
import MainPages from './components/MainPage'
import SingleMovie from './components/SingleMovie'

function App() {

  //https://www.omdbapi.com/?apikey=8f1e7b9d&s=troya

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<MainPages/>}/>
      <Route path='/movies/:id' element={<SingleMovie/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
