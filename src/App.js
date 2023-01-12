import React, { Component } from 'react'
import SearchInput from './components/SearchInput'
import NewsList from './components/NewsList'
import { RotatingLines } from 'react-loader-spinner'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = { newsArray: [], loading: true, error: null }

    this.fetchNews = this.fetchNews.bind(this)
  }

  async componentDidMount() {
    this.fetchNews()
  }

  async fetchNews(keyword) {
    this.setState({ loading: true })

    try {
      let response

      console.log(keyword, typeof keyword)
      if (keyword === undefined || keyword.trim() === '') {
        response = await fetch(
          'https://gnews.io/api/v4/top-headlines?token=46656601ce34e64abe13bf488460962c&lang=en'
        )
      } else {
        response = await fetch(
          `https://gnews.io/api/v4/search?q=${keyword}&token=46656601ce34e64abe13bf488460962c&lang=en`
        )
      }

      if (!response.ok) throw response

      const data = await response.json()

      this.setState({ loading: false, newsArray: data.articles, error: null })
    } catch (error) {
      if (error.status === 403) {
        this.setState({ loading: false, error: 'Request Limit Reached' })
      } else if (error.status === 429) {
        this.setState({ loading: false, error: 'Too many Request, Try Again' })
      } else {
        this.setState({ loading: false, error: 'Unrecognized Error' })
      }

      console.log(error.status)
    }
  }

  render() {
    return (
      <>
        <div className='text-4xl font-bold text-white text-center bg-red-700  p-8'>
          Today's News
        </div>
        <div className='container'>
          <SearchInput fetchNews={this.fetchNews} />
          {this.state.loading ? (
            <div className='flex justify-center'>
              <RotatingLines
                strokeColor='grey'
                strokeWidth='5'
                animationDuration='0.75'
                width='96'
                visible={true}
              />
            </div>
          ) : this.state.error ? (
            <div className='text-center text-4xl'>{this.state.error}</div>
          ) : (
            <NewsList newsArray={this.state.newsArray} />
          )}
        </div>
      </>
    )
  }
}

export default App
