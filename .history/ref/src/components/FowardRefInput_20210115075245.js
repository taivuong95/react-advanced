import React, { Component } from 'react';

const FowardRefInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
})

export default FowardRefInput;