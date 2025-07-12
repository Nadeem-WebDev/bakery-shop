import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import StickyNav from './components/Landing Page/StickyNav'
import LandingPage from './components/Landing Page/LandingPage'
import BakeryData from './assets/BakeryData'
import ProductShow from './components/Products Page/ProductShow'



const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<BakeryData><StickyNav /> <LandingPage /></BakeryData>
    },
    {
      path:"/products",
      element:<>
        <BakeryData>
          <StickyNav />
          <ProductShow />
        </BakeryData>
      </>
    },
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

