import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Blogs } from "./pages/Blogs"
import { Toaster } from "react-hot-toast"
import { Blog } from "./pages/Blog"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { CreateBlog } from "./pages/CreateBlog"
import { UpdateBlog } from "./pages/UpdateBlog"
import { NotFound } from "./pages/NotFound"

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/signin" replace />} />
          
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='/signin' element={<Signin></Signin>}></Route>
          <Route path='/blog/:id' element={<Blog></Blog>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/publish' element={<CreateBlog></CreateBlog>}></Route>
          <Route path='/updateBlog/:id' element={<UpdateBlog></UpdateBlog>}></Route>

          <Route path='*' element={<NotFound />} />
        </Routes>

        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        
      </BrowserRouter>
    </>
  )
}

export default App
