import React from 'react'

const FavMovieContext = React.createContext()

export const FavMovieProvider = FavMovieContext.Provider
export const FavMovieConsumer = FavMovieContext.Consumer
export default FavMovieContext;