import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = React.useState([]);
    // adding note to notes
    function add(newNote) {
        setNotes((pre) => {
            return [...notes, newNote];
        });
    }

    // deleting note to notes
    function deletenote(index) {
        setNotes((pre) => {
            return pre.filter((e) => pre.indexOf(e) !== index);
        });
    }

    return ( <
        div >
        <
        Header / >
        <
        CreateArea add = { add }
        /> {
            notes.map((note, index) => {
                return ( <
                    Note key = { index }
                    index = { index }
                    title = { note.title }
                    content = { note.content }
                    del = { deletenote }
                    />
                );
            })
        } { /* <Note key={1} title="Note title" content="Note content" /> */ } <
        Footer / >
        <
        /div>
    );
}

export default App;