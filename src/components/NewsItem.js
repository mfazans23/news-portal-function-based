import React from 'react'
import { Button } from 'react-bootstrap'

const NewsItem = ({
  news: { image, title, source, publishedAt, description, url },
}) => {
  return (
    <div className='newsItem flex flex-col border border-stone-200 rounded-lg overflow-hidden'>
      <img src={image} />
      <div className='p-3'>
        <h2 className='text-2xl md:text-3xl'>{title}</h2>
        <div className='text-gray-600'>
          <span>{source.name}</span> -{' '}
          <span>
            {publishedAt
              .replaceAll('-', '/')
              .replaceAll('T', ' ')
              .replaceAll('Z', '')}
          </span>
        </div>
        <div className='mt-3'>{description}...</div>
      </div>
      <Button
        className='w-fit ml-3 mb-2'
        variant='danger'
        href={url}
        target='_blank'
      >
        Read More
      </Button>
    </div>
  )
}

export default NewsItem
