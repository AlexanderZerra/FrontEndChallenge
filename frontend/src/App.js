import './styles/App.css'
import { Route } from 'react-router-dom'

import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails'

function App() {
  return (
    <div className="app">
      <h1>Welcome to Movie APP</h1>

      <Route exact path="/" component={MovieList} />

      <Route exact path="/movie/:id" component={MovieDetails} />
    </div>
  )
}
export default App
