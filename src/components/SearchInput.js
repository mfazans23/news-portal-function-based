import React, { Component } from 'react'

export class SearchInput extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <input
          className='w-full text-xl border-2 border-slate-200 rounded-lg my-16 p-3 focus:outline-none'
          type='text'
          name='searchInput'
          id='searchInput'
          onChange={(e) => this.props.fetchNews(e.target.value)}
          placeholder='search news...'
        />
      </div>
    )
  }
}

export default SearchInput
