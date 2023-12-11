import React from "react";

function Note(props) {
    function deleteitem(event) {
        let id = parseInt(event.target.id);
        return props.del(id);
    }
    return ( <
        div className = "note" >
        <
        h1 > { props.title } < /h1> <
        p > { props.content } < /p> <
        button onClick = { deleteitem }
        id = { props.index } >
        DELETE <
        /button> <
        /div>
    );
}

export default Note;