import React from "react";

export const Icon = React.memo(({icon, name}) => {
    return (
        <div>
            <img  src={icon} alt={name}/>
        </div>
    );
})
