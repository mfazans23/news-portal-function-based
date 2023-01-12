import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export class NewsItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='newsItem flex flex-col border border-stone-200 rounded-lg overflow-hidden'>
        <img src={this.props.news.image} />
        <div className='p-3'>
          <h2 className='text-2xl md:text-3xl'>{this.props.news.title}</h2>
          <div className='text-gray-600'>
            <span>{this.props.news.source.name}</span> -{' '}
            <span>
              {this.props.news.publishedAt
                .replaceAll('-', '/')
                .replaceAll('T', ' ')
                .replaceAll('Z', '')}
            </span>
          </div>
          <div className='mt-3'>{this.props.news.description}...</div>
        </div>
        <Button
          className='w-fit ml-3 mb-2'
          variant='danger'
          href={this.props.news.url}
          target='_blank'
        >
          Read More
        </Button>
      </div>
    )
  }
}

export default NewsItem
