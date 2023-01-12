import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class NewsList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='newsList flex flex-wrap gap-y-6'>
        {this.props.newsArray.map((news, i) => (
          <NewsItem key={i} news={news} />
        ))}
      </div>
    )
  }
}

export default NewsList
