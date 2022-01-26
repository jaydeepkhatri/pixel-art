import React, {useEffect, useState} from 'react';
import './feed.css';


function Feed() {
    const maindivs = [];
    const innerdivs = [];
    const [xPos, setxPos] = useState(0);
    const [yPos, setyPos] = useState(0);

    for(let j = 0; j < 32; j++) {
        innerdivs.push(<div className={"pixel"+j} onMouseOver={() => setxPos(j)}></div>);
    }

    for(let i = 0;i < 32; i++){
        maindivs.push(<div className="row" id={"row"+i} onMouseOver={() => setyPos(i)}>{innerdivs}</div>);
    }
    
    useEffect(() => {
        document.querySelectorAll(".row")
      }, []);

    const colors = [
        {
            name: "Light Red",
            colorhex: "#F78181",
        },
        {
            name: "Orange",
            colorhex: "#FF8A00",
        },
        {
            name: "Yellow",
            colorhex: "#F4EB03",
        },
        {
            name: "Green",
            colorhex: "#6EFF15",
        },
        {
            name: "Teuquilla",
            colorhex: "#1DFFD6",
        },
        {
            name: "Blue",
            colorhex: "#1286F0",
        },
        {
            name: "Dark Blue",
            colorhex: "#200CFF",
        },
        {
            name: "Purple",
            colorhex: "#D731F2",
        },
        {
            name: "Red",
            colorhex: "#FF012F",
        }
    ];
    return(
        <main className="main">
           <div className='boxes-grid'>
               {maindivs}
           </div>
           <div className="sidebar">
           <div className="colors">  
           {
                colors.map((color, index) => (
                    <div className='color_item' key={index} style={{backgroundColor: color.colorhex}}></div>
                ))
            }
            <input type="color" style={{backgroundColor: "#ad1d1d"}}  /> 
           </div>
           <button onClick={() => alert('Download ho gaya')}>Download</button>
           <div className='stats'>
               X: {xPos}<br/>
               Y: {yPos}
           </div>
           </div>
           
        </main>
    )
}

export default Feed;