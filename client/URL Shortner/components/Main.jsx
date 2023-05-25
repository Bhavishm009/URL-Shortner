import axios from 'axios';
import React, { useState } from 'react'
export default function Main() {
    const [data,setData] = useState('')
    const [url,setUrl] = useState('')
  
    function handleClick(e){
      axios.post('http://localhost:3000/url/shorten',{longUrl:url})
      .then(res=>setData(res.data.data))
      .catch(err=>alert(err.response.data.message))
    }
  
    return (
      <div className='container'>
  <h1 id='head'>URL Shortner</h1>
  <div id='about'> 
A URL shortener application is a tool that transforms long, complex URLs into shorter, more manageable links.
It offers convenience and efficiency by simplifying the sharing and distribution of URLs.
Users can input a lengthy URL, and the application generates a unique shortened link.
When clicked, the shortened link redirects users to the original URL.
URL shorteners are commonly used in social media, email marketing, and any situation where concise links are desirable.
  </div>
  <div id='inp'>
  <input type="text" className="txt" onChange={e=>setUrl(e.target.value)} /><br/><br/>
  <button className="btn" onClick={handleClick} >Trim</button>
  </div>
  {data&&<p>Your Short URL : <a href={data.shortUrl} target="_blank" >{data.shortUrl}</a></p>}
      </div>
    )
}
