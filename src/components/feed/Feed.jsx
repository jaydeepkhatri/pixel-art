import React from 'react';
import './feed.css';


function Feed() {
    return(
        <main>
           <div className='boxes-grid'>
               {
                Array.from(Array(100).keys())?.map(x=>(
                    <div className="gr"></div>
                ))
               }
           </div>
        </main>
    )
}

export default Feed;