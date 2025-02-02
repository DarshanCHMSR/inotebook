import React, {useContext, useState} from 'react'
import noteContext from "../context/notes/noteContext"
import './AddNote.css'
//this is to add the notes to the database 

const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title: "", description: "", tag: ""})

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""})
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        //this is the frontend form of the form
        <div className="addnote">
            <p>Add a Note</p>
            <form className="my-3">
                <div className="title">
                    {/* <label htmlFor="title" className="title">Title</label> */}
                    <input type="text" className="text1" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required placeholder='Title' /> 
                </div>
                <div className="des">
                    {/* <label htmlFor="description" className="form-label">Description</label> */}
                    <input type="text" className="text2" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required placeholder='Description' />
                </div>
                <div className="tag">
                    {/* <label htmlFor="tag" className="form-label">Tag</label> */}
                    <input type="text" className="text3" id="tag" name="tag" value={note.tag} onChange={onChange} minLength={5} required placeholder='Tag'/>
                </div>
               
                <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="button" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote
