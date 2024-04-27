import { useEffect,useState } from 'react'
import { RiMenuLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { FiBook } from "react-icons/fi";
import { LuLogIn } from "react-icons/lu";
import { LuLogOut } from "react-icons/lu";

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => {
    if (window.innerWidth <= 991) {
      setSidebarVisible(!sidebarVisible);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
      if (window.innerWidth > 991) {
        setSidebarVisible(true); // Show sidebar by default on larger screens
      } else {
        setSidebarVisible(false); // Hide sidebar by default on smaller screens
      }
    };
    handleResize(); // Check on initial render
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>    
      <header>
      <div className="header-wrapper">
        <div className="userprofile">
          <img
            src="src/assets/avtar.jpg"
            alt=""
            width={50}
            height={50}
            className=""
          />
        </div>
        <div className="buttons ">
          <a href="" className='btn-auth'>Login</a>
          <a href="" className='btn-auth'>Signup</a>
          <div onClick={toggleSidebar} className='menu-bar'><RiMenuLine /></div>
        </div>
      </div>
    </header>
     <main className='main-content'>
        { <Menu />}
        {(sidebarVisible || !isMobile) && <Sidebar />}
      </main>
         
    </>
  );
}
function Menu() {
  return (
<div className='main-area'>
  <h1>This is Main Content Area</h1>
</div>
  );
}

function Sidebar( { toggleSidebar }) {
  return (
    <aside className='sidebar'>
       <div>
        <ul className='sidebar-ul'>
          <li><a href="" className='links'><IoHomeOutline /> Home</a></li>
          <li><a href="" className='links'><FiBook />Courses</a></li>
          <li><a href="" className='links loginsignup'><LuLogIn /> Login</a></li>
          <li><a href="" className='links loginsignup'><LuLogOut />Sign Up</a></li>
        </ul>
      </div>
    </aside>
  );
}
export default App
