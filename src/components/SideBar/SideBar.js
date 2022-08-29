import React from 'react'
import profile from "../../assets/images/profile.png"
import { useRef , useEffect} from 'react'

const SideBar = ({ setClose }) => {
  const sidebarRef = useRef();
  
  const clickOutSidebar = (e) => {
    if (!sidebarRef.current.contains(e.target)) {
      setClose(false)
    }
  }  

  useEffect(() => {
    document.addEventListener("click", clickOutSidebar , true)
  }, [])
  

  return (
    <div>
      <div ref={sidebarRef} onClick={(e) => clickOutSidebar(e)} className={"sidebarActive"}>
        <div className="sidebarActive_inner">
          <i onClick={() => setClose(false)} class="fa-solid fa-xmark"></i>
          <div className="sidebarActive_logOut">
            <img src={profile} alt="" />
            <p>Osama</p>
            <button>Log Out</button>
            <h6>Expiration Time : 28 Days</h6>
          </div>
          <div className="sidebarActive_searchBar">
          <input type="text" placeholder='Search...' />
          </div>
          <div className="sidebarActive_links">
            <p>Home</p>
            <p>Tv Shows</p>
            <p>Movies</p>
            <p>My List</p>
          </div>
         </div>
      </div>  
    </div>
  )
}

export default SideBar