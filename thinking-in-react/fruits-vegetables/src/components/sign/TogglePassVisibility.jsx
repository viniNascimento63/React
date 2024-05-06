import { useState } from 'react';
import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons';

function ToggleEye({ eyeSlashFill, onEyeSlashFillChange, onToggleVisibility}) {

    const handleClick = () => {
        onEyeSlashFillChange(!eyeSlashFill);
        onToggleVisibility(eyeSlashFill);
    };

    return (
        <span
            onClick={handleClick}
            className="toggle-eye align-self-center border rounded-end text-bg-light"
        >
            {eyeSlashFill ? <EyeSlashFill /> : <EyeFill />}
        </span>
    );
}

export default function TogglePassVisibility() {
    const [eyeSlashFill, setEyeSlashFill] = useState(true);
    
    const handlePasswordVisibility = (showPassword) => {
        const inputPassword = document.querySelector('.input-pass');
        inputPassword.type = showPassword ? 'text' : 'password';
       
    };

    return (
        <>
            <ToggleEye
                eyeSlashFill={eyeSlashFill}
                onEyeSlashFillChange={setEyeSlashFill}
                onToggleVisibility={handlePasswordVisibility}
            />
        </>
    );
}