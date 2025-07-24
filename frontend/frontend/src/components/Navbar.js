import '../css/navbarStyles.css'

export default function Navbar() {
  return <nav className="nav">
    
    <a href="/" className="site-title">Job Boarding Page</a>

    <ul>
      <li>
        
        <a href='/'>
          Upload a Job
        </a>

      </li>

      <li> 

        <a href='/'>
          Profile
        </a> 

      </li>


    </ul>
  </nav>
}