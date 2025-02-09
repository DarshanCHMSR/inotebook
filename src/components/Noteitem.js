import React, {useContext} from 'react'
import noteContext from "../context/notes/noteContext"
import './Noteitem.css'

//this is to display the things in the frontend that cart one 
const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className="noteitem">  
            <div className="card my-3">
                <div className="card-body" style={{border: "2px solid black", borderRadius: "5px", padding: "5px"}}>
                    <div className="d-flex align-items-center ">
                        <h5 className="card-title" style={{fontSize:"25px"}}>{note.title}</h5>
                        <i className="far fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id)}} style={{fontSize:"20px"}}></i>
                        <i className="far fa-edit mx-2" onClick={()=>{updateNote(note)}} style={{fontSize:"20px",padding:0}}></i>
                    </div>
                    <p className="card-text">{note.description}</p>
                    <i className="far fa-edit mx-2" onClick={()=>{updateNote(note)}}></i>
                </div>   
            </div>
        </div>
    )
}

export default Noteitem
