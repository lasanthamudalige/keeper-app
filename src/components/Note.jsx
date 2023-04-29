import React from "react";
import DeleteIcon from '@mui/icons-material/Delete'; // Import delete icon from material ui

function Note(props) {
    const handleClick = () => {
        props.onDelete(props.id)
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            {/* Call a passed in function when this button is pressed */}
            <button onClick={handleClick}><DeleteIcon /></button> {/* Delete material ui icons */}
        </div>
    );
}

export default Note;
