import React from 'react';
import './style.less';

export default function BtnRemove ({onClick}) {
    return (
        <button className="BtnRemove"
                type="button"
                onClick={onClick}>
            Убрать мягкие переносы
        </button>
    )
}