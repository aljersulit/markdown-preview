import { marked } from 'marked'

function Preview(props) {
    return ( 
        <div id="preview" dangerouslySetInnerHTML={{__html: marked(props.text)}}></div>
     );
}

export default Preview;