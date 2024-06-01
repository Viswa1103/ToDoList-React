import React from 'react'
import { FaPlus } from 'react-icons/fa6'

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    return (
        <form className='addForm' onSubmit={handleSubmit}>


            <input type="text"
                id='addItem'
                placeholder='Enter Goal'
                required
                autoFocus
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button type='submit'>
                <FaPlus />
            </button>
        </form>
    )
}

export default AddItem