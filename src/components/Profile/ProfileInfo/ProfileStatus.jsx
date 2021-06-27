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
            <input
                type="text"
                value={localStatus}
                onChange={handleStatusInputChange}
                onFocus={ (e) => e.target.select() } 
                autoFocus
                onBlur={handleStatusInputBlur}
            />            
        );
    } else {
        content = (            
            <span
                onDoubleClick={handleSpanDoubleClick}
            >{props.status || '---'}</span>            
        );
    }
    return (
        <>
            <hr />
            <div>
                Status: {content}          
            </div>
        </>        
    );
    
    
}

export default ProfileStatus;