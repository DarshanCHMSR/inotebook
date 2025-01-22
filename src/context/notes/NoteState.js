import NoteContext from "./noteContext";
import { useState } from "react";
// to create a part to all -- delete , update and read function from one part
const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)


  async function getAuthToken(apiUrl, credentials) {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST', // Assuming a POST request
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: credentials.email, password: credentials.password})
      });
  
    
  
      const data = await response.json();
     
      // Assuming the token is in the `token` field of the response
      return data.authtoken;
    } catch (error) {
      console.error('Failed to fetch auth token:', error.message);
      throw error;
    }
  }
  
  const apiUrl = 'http://localhost:5000/api/auth/login';
  const credentials = {
    email:"yagshq@gmail.com",
    password: "5623772"
  };
  
  getAuthToken(apiUrl, credentials)
    .then(authtoken => {
      // console.log('Auth Token:', authtoken);
    })
    .catch(error => {
      console.error('Error fetching token:', error);
    });
  












  // Get all Notes
  const getNotes = async () => {
    // API Call 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":localStorage.getItem('token')
      }
    });
    const json = await response.json() 
    setNotes(json)
  }

  // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
    });

    const note = await response.json();
    setNotes(notes.concat(note))
  }

  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":localStorage.getItem('token')
      }
    });
    // eslint-disable-next-line 
    const json = response.json(); 
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
    });
    // eslint-disable-next-line 
    const json = await response.json(); 

     let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag; 
        break; 
      }
    }  
    setNotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )

}
export default NoteState;