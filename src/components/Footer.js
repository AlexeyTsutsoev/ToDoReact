import React from 'react';

export default function Bottom(props) {


    return (
        <div>
            <span><input id="complete" type="checkbox" onChange={(event) => props.onControl(event)} />Заверешнные</span>
            <span><input id="active" type="checkbox" onChange={(event) => props.onControl(event)} />Не заверешнные</span>
            <button onClick={() => props.onSave()}>Сохранить дела</button>
            <button onClick={() => props.onClear()}>Очистить хранилище</button>
        </div>
    );
}