import { useState } from 'react'
// import Header from './Components/Header'
// import Sidebar from './Components/Sidebar'
import { IoMenuSharp } from "react-icons/io5";
import { RiMenuLine } from "react-icons/ri";

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };


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
          <a href="">Login</a>
          <a href="">Signup</a>
          <div onClick={toggleSidebar} className='menu-bar'><RiMenuLine /></div>
        </div>
      </div>
    </header>
     <main className='main-content'>
        { <Menu />}
        {sidebarVisible && <Sidebar />}
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
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Courses</a></li>
        </ul>
      </div>
    </aside>
  );
}
export default App
