import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../context/AuthContext'

const Home = () => {

  let [notes, setNotes] = useState([])
  let {authTokens, logoutUser} = useContext(AuthContext)

  useEffect(() =>{
    getNotes()
  }, [])

  let getNotes = async () =>{
    let response = await fetch('http://127.0.0.1:8000/api/notes/',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access)
      }
    })
    let data = await response.json()

    if(response.status === 200){
      setNotes(data)
    }else if(response.statusText === 'Unauthorized'){
      logoutUser()
    }
  }

  return (
    <div className='home'>
      <div className="home-content">
        <p className='home-text'>you are logged in to the home page</p>

        <ul>
          {notes.map(note =>{
            return <li key={note.id}>{note.body}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Home
