import * as React from 'react';
import * as ReactDOM from 'react-dom';
function TodoItems(props) {
    const createItem = (itemText, i) => {
        return <li key={i}>{itemText}</li>;
    };
    return <ul>{props.items.map(createItem)}</ul>;
}
export default TodoItems