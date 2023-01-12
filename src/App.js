import React, { useState, useEffect } from 'react'
import SearchInput from './components/SearchInput'
import NewsList from './components/NewsList'
import { RotatingLines } from 'react-loader-spinner'

const App = () => {
  const [newsState, setNewsState] = useState({
    newsData: [],
    loading: false,
    error: null,
  })

  const { newsData, loading, error } = newsState

  const fetchNews = async (keyword) => {
    setNewsState({
      ...newsState,
      loading: true,
    })
    try {
      let response

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

      setNewsState({ loading: false, newsData: data.articles, error: null })
    } catch (error) {
      if (error.status === 403) {
        setNewsState({ loading: false, error: 'Request Limit Reached' })
      } else if (error.status === 429) {
        setNewsState({ loading: false, error: 'Too many Request, Try Again' })
      } else {
        setNewsState({ loading: false, error: 'Unrecognized Error' })
      }

      console.log(error.status)
    }
  }

  useEffect(() => {
    fetchNews()
  }, [])

  return (
    <>
      <div className='text-4xl font-bold text-white text-center bg-red-700  p-8'>
        Today's News
      </div>
      <div className='container'>
        <SearchInput fetchNews={fetchNews} />
        {loading ? (
          <div className='flex justify-center'>
            <RotatingLines
              strokeColor='grey'
              strokeWidth='5'
              animationDuration='0.75'
              width='96'
              visible={true}
            />
          </div>
        ) : error ? (
          <div className='text-center text-4xl'>{error}</div>
        ) : (
          <NewsList newsData={newsData} />
        )}
      </div>
    </>
  )
}

export default App
