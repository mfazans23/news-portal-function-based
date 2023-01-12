import React from 'react'
import NewsItem from './NewsItem'

const NewsList = ({ newsData }) => {
  return (
    <div className='newsList flex flex-wrap gap-y-6'>
      {newsData.map((news, i) => (
        <NewsItem key={i} news={news} />
      ))}
    </div>
  )
}

export default NewsList
