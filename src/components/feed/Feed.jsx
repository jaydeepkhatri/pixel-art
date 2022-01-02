import React from 'react';
import './feed.css';


function Feed() {
    const maindivs = [];
    const innerdivs = [];

    for(let j = 0; j < 32; j++) {
        innerdivs.push(<div className={"pixel"+j}></div>);
    }

    for(let i = 0;i < 32; i++){
        maindivs.push(<div className="row" id={"row"+i}>{innerdivs}</div>);
    }


    return(
        <main>
           <div className='boxes-grid'>
               {maindivs}
           </div>
           <button onClick={() => alert('Download ho gaya')}>Download</button>
        </main>
    )
}

export default Feed;