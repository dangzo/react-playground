import { NavLink } from 'react-router'

const Navigation = function () {
  return (
    <nav className="bg-gray-200  fixed w-full top-0">
      <ul className="flex flex-row gap-4 p-4 max-w-[1080px] mx-[auto]">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/zustand-list'>Zustand list</NavLink></li>
        <li><NavLink to='/context-list'>Context API list</NavLink></li>
        <li><NavLink to='/redux-toolkit-list'>Redux Toolkit list</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navigation