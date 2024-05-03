import { useState } from 'react';
import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons';

function ToggleEye({ eyeSlashFill, onEyeSlashFillChange }) {

    const handleClick = () => {
        onEyeSlashFillChange(!eyeSlashFill);
    };

    return (
        <span
            onClick={handleClick}
            className="toggle-eye align-self-center border rounded text-bg-light"
        >
            {eyeSlashFill ? <EyeSlashFill /> : <EyeFill />}
        </span>
    );
}

export default function TogglePassVisibility() {
    const [eyeSlashFill, setEyeSlashFill] = useState(true);

    return (
        <>
            <ToggleEye
                eyeSlashFill={eyeSlashFill}
                onEyeSlashFillChange={setEyeSlashFill}
            />
        </>
    );
}