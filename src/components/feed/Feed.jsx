import React, { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import './feed.css';

const downloadPic = () => {
    html2canvas(document.querySelector(".boxes-grid")).then(function (canvas) {
        let lnk = document.createElement('a');
        lnk.download = "myimage";
        lnk.href = canvas.toDataURL("image/png;base64");
        // Download image with Fake link
        lnk.click();
    });
}

function Feed() {
    const maindivs = [];
    const innerdivs = [];
    const [xPos, setxPos] = useState(0);
    const [yPos, setyPos] = useState(0);
    const [CurrentColor, setCurrentColor] = useState("#F00");
    const [size, setSize] = useState(32);

    for (let j = 0; j < size; j++) {
        innerdivs.push(<div className={"pixel" + j} style={{width: 512/size, height: 512/size}} key={j} onMouseEnter={() => setxPos(j)}></div>);
    }

    for (let i = 0; i < size; i++) {
        maindivs.push(<div className="row" id={"row" + i} style={{ gridTemplateColumns: `repeat(${size}, ${512/size}px)`}} key={i} onMouseEnter={() => setyPos(i)}>{innerdivs}</div>);
    }

    useEffect(() => {
        document.querySelector("#row" + yPos + " .pixel" + xPos).style.backgroundColor = CurrentColor;
        document.querySelector(".currentcolor").style.backgroundColor = CurrentColor;
    }, [xPos, yPos, CurrentColor]);

    const colors = [
        { name: "Light Red", colorhex: "#F78181" },
        { name: "Orange", colorhex: "#FF8A00" },
        { name: "Yellow", colorhex: "#F4EB03" },
        { name: "Green", colorhex: "#6EFF15" },
        { name: "Teuquilla", colorhex: "#1DFFD6" },
        { name: "Blue", colorhex: "#1286F0" },
        { name: "Dark Blue", colorhex: "#200CFF" },
        { name: "Purple", colorhex: "#D731F2" },
        { name: "Red", colorhex: "#FF012F" }
    ];
    return (
        <main className="main">
            <div className='boxes-grid'>
                {maindivs}
            </div>
            <div className="sidebar">
                <div className="currentcolor"></div>
                <div className="img-size-container">
                    <span>Board Pixels:</span> 
                    <input type="number" className="img-size" min="4" max="64" value={size} onInput={(e) => {setSize(e.target.value)}} />
                </div>
                <div className="colors">
                    {
                        colors.map((color, index) => (
                            <div className='color_item' title={color.name} key={index} onClick={() => setCurrentColor(color.colorhex)} style={{ backgroundColor: color.colorhex }}></div>
                        ))
                    }
                    <input type="color" style={{ backgroundColor: "#ad1d1d" }} onChange={(e) => setCurrentColor(e.target.value)} />
                </div>
                <button onClick={() => downloadPic()}>Download</button>
                <div className='stats'>
                    X: {xPos + 1}<br />
                    Y: {yPos + 1}
                </div>
            </div>

        </main>
    )
}

export default Feed;