import React from "react";
import {Link} from 'react-router-dom'

function Links() {

  return (
    <nav className="navigation">
      <Link to="/" className='link'>All</Link>
      <Link to="/active" className="link">Active</Link>
      <Link to="/completed" className="link">Completed</Link>
    </nav>
  )
}

export default Links;
