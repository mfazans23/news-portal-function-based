import React from 'react'

const SearchInput = ({ fetchNews }) => {
  return (
    <div>
      <input
        className='w-full text-xl border-2 border-slate-200 rounded-lg my-16 p-3 focus:outline-none'
        type='text'
        name='searchInput'
        id='searchInput'
        onChange={(e) => fetchNews(e.target.value)}
        placeholder='search news...'
      />
    </div>
  )
}

export default SearchInput
