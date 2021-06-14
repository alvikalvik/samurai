import { useEffect } from "react";
import { useState } from "react";



const ProfileStatus = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [localStatus, setLocalStatus] = useState(props.status);

    useEffect( () => {
        setLocalStatus(props.status);
    }, [props.status]);

    const handleStatusInputBlur = (evt) => {        
        setEditMode(false);
        props.updateProfileStatus(evt.target.value);
    }

    const handleStatusInputChange = (evt) => {               
        setLocalStatus(evt.target.value);
    }

    const handleSpanDoubleClick = () => {
        setEditMode(true);        
    }

    
    let content;
    if (editMode) {
        content = (
            <div>
                <input
                    type="text"
                    value={localStatus}
                    onChange={handleStatusInputChange}
                    onFocus={ (e) => e.target.select() } 
                    autoFocus
                    onBlur={handleStatusInputBlur}
                />
            </div>
        );
    } else {
        content = (
            <div>
                <span
                    onDoubleClick={handleSpanDoubleClick}
                >{props.status || '---'}</span>
            </div>
        );
    }
    return (
        <div>
            {content}          
        </div>
    );
    
    
}

export default ProfileStatus;