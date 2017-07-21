import React from 'react';
import './style.less';

export default function Word ({children, width}) {
    return (
        <span className="Word"
              style={{maxWidth: `${width}em`}}>
            {children}
        </span>
    )
}
