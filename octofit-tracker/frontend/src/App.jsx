import { NavLink, Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'

const logo = '/octofitapp-small.png'

function Home() {
  return (
    <section className="card shadow-sm p-4">
      <h2 className="h4">Welcome to OctoFit Tracker</h2>
      <p className="text-muted">
        Track workouts, manage teams, and keep your fitness goals moving forward.
      </p>
      <div className="mt-3 d-flex gap-2 flex-wrap">
        <span className="badge text-bg-primary">Activity logging</span>
        <span className="badge text-bg-success">Team management</span>
        <span className="badge text-bg-warning">Leaderboards</span>
      </div>
    </section>
  )
}

function Leaderboard() {
  return (
    <section className="card shadow-sm p-4">
      <h2 className="h4">Leaderboard</h2>
      <ul className="list-group mt-3">
        <li className="list-group-item d-flex justify-content-between">
          <span>Ava</span>
          <strong>1,250 pts</strong>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Noah</span>
          <strong>1,180 pts</strong>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Mia</span>
          <strong>1,095 pts</strong>
        </li>
      </ul>
    </section>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell container py-4">
        <header className="d-flex flex-column flex-md-row align-items-md-center gap-3 mb-4">
          <img src={logo} alt="OctoFit Tracker logo" className="app-logo" />
          <div>
            <h1 className="h2 mb-1">OctoFit Tracker</h1>
            <p className="text-muted mb-0">A modern multi-tier fitness app</p>
          </div>
        </header>

        <nav className="nav nav-pills mb-4">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/leaderboard">
            Leaderboard
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
