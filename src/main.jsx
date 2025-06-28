import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Router, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Homepage from './pages/Homepage'
import './index.css'

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<Layout/>}>
                <Route path='/' element={<Homepage/>} />
            </Route>
        </>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
