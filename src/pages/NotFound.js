import React from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import notFound from '../images/PageNotFound.png'

export default function NotFound() {
  return (
    <div>
        <h2>Not Found</h2>
        <Link to="/" className={"nav-link-links"}><img className='notFound' src={notFound}></img></Link> 
        <p>Click <Link to="/" className={"nav-link-links"}>here</Link> to go the <Link to="/" className={"nav-link-links"}>Homepage</Link></p>
    </div>
  )
}
