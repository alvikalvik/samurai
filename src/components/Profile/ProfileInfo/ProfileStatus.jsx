import { Component } from "react";


class ProfileStatus extends Component {
    state = {
        editMode: false,
        localStatus: this.props.status
    }  
    
    componentDidUpdate(prevProps, prevState) {
        if (this.props.status !== prevProps.status)
        this.setState({
            localStatus: this.props.status
        });
    }

    setEditMode = (editMode) => {
        this.setState({editMode});
    }

    handleStatusInputBlur = (evt) => {        
        this.setEditMode(false);
        this.props.updateProfileStatus(evt.target.value);
    }

    handleStatusInputChange = (evt) => {               
        this.setState({localStatus: evt.target.value});
    }

    handleSpanDoubleClick = () => {
        this.setEditMode(true);        
    }

    render() {
        let content;
        if (this.state.editMode) {
            content = (
                <div>
                    <input
                        type="text"
                        value={this.state.localStatus}
                        onChange={this.handleStatusInputChange}
                        onFocus={ (e) => e.target.select() } 
                        autoFocus
                        onBlur={this.handleStatusInputBlur}
                    />
                </div>
            );
        } else {
            content = (
                <div>
                    <span
                        onDoubleClick={this.handleSpanDoubleClick}
                    >{this.props.status || '---'}</span>
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