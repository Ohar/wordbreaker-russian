import React from 'react';
import './style.less';

export default function BtnAdd ({onClick}) {
    return (
        <button className="BtnAdd"
                type="button"
                onClick={onClick}>
            Убрать мягкие переносы
        </button>
    )
}