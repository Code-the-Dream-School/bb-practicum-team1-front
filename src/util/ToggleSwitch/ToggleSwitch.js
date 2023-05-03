import React from 'react';
import ReactSwitch from 'react-switch';


// Switch sort direction using react-switch
const ToggleSwitch = ({toggleChecked, handleToggleChange, labelOn, labelOff}) => {
    return (
        <div className="ToggleSwitch">
            <label className="ToggleSwitchLabel" htmlFor="ReactSwitch">
                {toggleChecked ? labelOn : labelOff}
            </label>
            <ReactSwitch
                checked={toggleChecked}
                onChange={handleToggleChange}
                onColor='#415A77'
                offColor="#858585"
            />
        </div>
    );
}

export default ToggleSwitch;