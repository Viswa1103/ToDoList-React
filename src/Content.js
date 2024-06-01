import React from 'react';
import { FaTrash } from 'react-icons/fa6';

const Content = ({ items, setItems }) => {
    const handleCheck = (id) => {
        const listItems = items.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setItems(listItems);
        localStorage.setItem('Todo_List', JSON.stringify(listItems));
    };

    const deleteItem = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
        localStorage.setItem('Todo_List', JSON.stringify(listItems));
    };

    return (
        <main>
            {items.length ? (
                <ul>
                    {items.map((item) => (
                        <li className='item' key={item.id}>
                            <input
                                type='checkbox'
                                onChange={() => handleCheck(item.id)}
                                checked={item.checked}
                            />
                            <label
                                style={item.checked ? { textDecoration: 'line-through' } : null}
                                onDoubleClick={() => handleCheck(item.id)}
                            >
                                {item.item}
                            </label>
                            <FaTrash
                                role='button'
                                tabIndex='0'
                                onClick={() => deleteItem(item.id)}
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{ color: 'red' }}>Your list is empty</p>
            )}
        </main>
    );
};

export default Content;
