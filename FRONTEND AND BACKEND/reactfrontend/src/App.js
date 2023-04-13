
import './App.css';


//aqui importamos los componentes 

import CompShowBlogs from './Blogs/ShowBlog';
import CompCreateBlog from './Blogs/CreateBlog';
import ComEditBlog from './Blogs/EditBlog';

//importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<CompShowBlogs/>}></Route>
        <Route path='/create' element={<CompCreateBlog/>}></Route>
        <Route path='/edit/:id' element={<ComEditBlog/>}></Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
