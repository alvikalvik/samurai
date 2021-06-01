import { Component } from "react";


class ProfileStatus extends Component {
    state = {
        editMode: false
    }

    setEditMode = (editMode) => {
        this.setState({editMode});
    }

    handleStatusInputBlur = () => {        
        this.setEditMode(false);
    }

    render() {
        let content;
        if (this.state.editMode) {
            content = (
                <div>
                    <input
                        type="text"
                        value={this.props.status}
                        onFocus={ (e) => e.target.select() } 
                        autoFocus
                        onBlur={ this.handleStatusInputBlur }
                    />
                </div>
            );
        } else {
            content = (
                <div>
                    <span
                        onDoubleClick={ () => this.setEditMode(true) }
                    >{this.props.status}</span>
                </div>
            );
        }
        return (
            <div>
                {content}          
            </div>
        );
    }
    
}

export default ProfileStatus;