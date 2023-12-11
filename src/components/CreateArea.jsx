import React from "react";

function CreateArea(props) {
    const [item, setItem] = React.useState({ title: "", content: "" });

    function handelItem(event) {
        const { name, value } = event.target;
        setItem((pre) => {
            return {...pre, [name]: value };
        });
    }

    function add(event) {
        props.add(item);
        setItem({ title: "", content: "" });
        event.preventDefault();
        return;
    }
    return ( <
        div >
        <
        form >
        <
        input name = "title"
        placeholder = "Title"
        onChange = { handelItem }
        value = { item.title }
        /> <
        textarea name = "content"
        placeholder = "Take a note..."
        rows = "3"
        onChange = { handelItem }
        value = { item.content }
        /> <
        button onClick = { add } > Add < /button> <
        /form> <
        /div>
    );
}

export default CreateArea;