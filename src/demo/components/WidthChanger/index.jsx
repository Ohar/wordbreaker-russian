import React from 'react';

export default ({onChange, width}) => (
    <p className="WidthChanger">
        <label>
            Ширина блоков
            <input min="1"
                   max="15"
                   value={width}
                   id="widthChanger"
                   type="range"
                   onChange={onChange}/>
        </label>
    </p>
)
