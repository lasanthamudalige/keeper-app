import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'; // Import module for unique icons
import AddIcon from '@mui/icons-material/Add'; // import material ui add icon
import Fab from '@mui/material/Fab';
import { Zoom } from '@mui/material';

function CreateArea(props) {
    // This to keep track of title and content
    const [note, setNote] = useState({ id: "", title: "", content: "" });

    // New ES6 functions
    const handleChange = (event) => {
        const { name, value } = event.target;

        // Generate a unique id for the note 
        const uniqueId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

        setNote((preNote) => {
            if (name === "title") {
                return {
                    id: uniqueId,
                    title: value,
                    content: preNote.content
                }
            } else if (name === "content") {
                return {
                    id: uniqueId,
                    title: preNote.title,
                    content: value
                };
            }
        });
    }

    // Pass the note using onAdd function and clear the note after adding
    const submitNote = () => {
        props.onAdd(note);
        setNote({ id: "", title: "", content: "" });
    }

    // Expand the note form when clicked
    const [isExpanded, setIsExpanded] = useState(false);

    const expandInput = () => {
        // change isExpanded boolean to opposite state
        setIsExpanded(!isExpanded);
    }

    return (
        <div>
            <form className="create-note">
                {/* When the input box is clicked show this input. otherwise it won't show until the user click on it */}
                {isExpanded ?
                    <input
                        name="title"
                        onChange={handleChange}
                        value={note.title}
                        placeholder="Title"
                    /> : null}
                <div >
                    <textarea
                        name="content"
                        onChange={handleChange}
                        onClick={expandInput}
                        value={note.content}
                        placeholder="Take a note..."
                        rows={isExpanded ? 3 : 1}
                    />
                    {/* Add zoom effect to the add icon */}
                    <Zoom in={isExpanded}>
                        <Fab onClick={submitNote} type="button">
                            <AddIcon />
                        </Fab>
                    </Zoom>
                </div>
            </form >
        </div >
    );
}

export default CreateArea;
