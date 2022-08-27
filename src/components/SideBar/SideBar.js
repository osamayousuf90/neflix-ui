import React from 'react'

const SideBar = ({setClose , close}) => {
  return (
    <div>
      <div className={"sidebarActive"}>
        <div className="sidebarActive_inner">
          <i onClick={() => setClose(false)} class="fa-solid fa-xmark"></i>
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