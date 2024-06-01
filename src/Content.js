import React, { useState } from 'react'
import { FaTrash } from "react-icons/fa6";

const Content = () => {
    const [items, setItems] = useState(
        [
            {
                id: 1,
                checked: true,
                item: "Praticse Coding"
            },
            {
                id: 2,
                checked: false,
                item: "Play Cricket"
            },
            {
                id: 3,
                checked: false,
                item: "Talk With family"
            }
        ]
    )
    const handleCheck = (id) => {
        const ListItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
        setItems(ListItems)
        localStorage.setItem("todolist", JSON.stringify(ListItems))
    }

    const deleteItem = (id) => {
        const ListItems = items.filter((item) => item.id !== id)
        setItems(ListItems)
        localStorage.setItem("todolist", JSON.stringify(ListItems))
    }

    return (
        <main>
            {(items.length) ? (


                <ul>
                    {items.map((item) => (
                        <li className='item' key={item.id}>
                            <input type="Checkbox"
                                onChange={() => handleCheck(item.id)}
                                checked={item.checked} />
                            <label style={item.checked ? { textDecoration: "line-through" } : null}
                                onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
                            <FaTrash
                                role='button'
                                tabIndex="0" onClick={() => deleteItem(item.id)}
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{ color: "red" }}>Your list is empty </p>
            )}
        </main>
    )
}
export default Content