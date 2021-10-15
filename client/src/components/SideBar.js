import React from 'react'
import './Sidebar.css'

function SideBar({apiDocs, getApi}) {
   return (
      <div className='side-bar'>
         <div className='side-bar-content'>
            <h3>API's</h3>
            <ul>
            { apiDocs.map(apiDoc => (<li key={apiDoc._id} onClick={() => getApi(apiDoc._id)}>{ apiDoc.title }</li>)) }
            </ul>
         </div>
      </div>
   )
}

export default SideBar
