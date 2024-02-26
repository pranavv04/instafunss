import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route , RouterProvider , createBrowserRouter ,createRoutesFromElements} from 'react-router-dom'
import Video from './components/Video.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
    <Route path='' element={<App />}></Route>
    <Route path='/video' element={<Video />}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
