function Editor(props) {
    return (
        <textarea 
            name="editor" 
            id="editor" 
            cols="130" 
            rows="20"
            onChange={props.handleChange}
            value={props.value}>
        </textarea>
    );
}

export default Editor;