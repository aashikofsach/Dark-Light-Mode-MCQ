import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../theme-context'

function Navbar() {
 const {theme, toggleTheme} =  useTheme();
 console.log(theme)
  return (<>
  
   <div className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
    </div>
    <div>
      <input type="checkbox" onClick={()=>toggleTheme()} checked={theme==="dark"} />
    </div>
  </>
   

  )
}

export default Navbar