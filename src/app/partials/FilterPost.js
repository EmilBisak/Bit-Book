import React, { Component } from "react";
import M from 'materialize-css'

export class FilterPost extends Component {
    constructor(props) {
        super(props)
        this.selectFilter = React.createRef();
    }

    
    componentDidMount() {
        M.FormSelect.init(this.selectFilter.current);
    } 

    
    render() {
        return (
            <div className="input-field col s12 m6" id="filter-select">
                <select className="icons"  ref={this.selectFilter} onChange={this.props.selectedPost}>
                    <option value="" data-icon="https://cdn1.iconfinder.com/data/icons/text-bubbles-1-1/64/Text_Bubbles_114-256.png" defaultValue>All Posts</option>
                    <option value="text" data-icon="https://www.freeiconspng.com/uploads/document-extension-file-file-format-filename-text-txt-icon--20.png">Text</option>
                    <option value="image" data-icon="https://i.dlpng.com/static/png/487380_preview.png">Image</option>
                    <option value="video" data-icon="https://cdn4.iconfinder.com/data/icons/cinema-outline-icon-set/30/camera-256.png">Video</option>
                </select>
            </div>
        )
    }
}