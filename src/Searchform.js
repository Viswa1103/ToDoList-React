import React from 'react'

const Searchform = ({ search, setSearch }) => {
    return (
        <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search">Search</label>
            <input type="text"
                id='search'
                role='searchBox'
                placeholder='Search Goals'
                value={search}
                onChange={(e) => setSearch(e.target.value)} />

        </form>
    )
}

export default Searchform