import React from 'react';
import './aboutus.css';
import aboutimg from './about_svg.svg';


function Aboutus() {
    const creators = [
        {
            name: "Jaydeep Khatri",
            url: "https://github.com/jaydeepkhatri",
            img: "https://avatars.githubusercontent.com/u/29619945"
        }
    ];
    return(
        <div className="about">
            <div className="about_img"><img src={aboutimg} alt="Pixel Art by JD" /></div>
            <div className="about_desc">
                <h2 className="about_desc-heading">Pixel Art</h2>
                <p className="about_desc-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quia, saepe iure iste corporis dolor architecto dolorum rem tenetur voluptatibus molestiae quas quaerat nobis amet ipsam sint laudantium necessitatibus maxime.
Id, voluptas quisquam accusantium architecto ab aliquam veritatis amet error consequuntur dolorem a voluptatum delectus eveniet, quidem quibusdam eos consectetur fugiat obcaecati tenetur? Totam doloremque quas sapiente tempore nisi vel!
Voluptates.<br/><br/> voluptatem aliquam reiciendis inventore eveniet officia praesentium excepturi debitis fugiat quae facilis soluta consectetur, beatae, numquam sequi facere velit corrupti provident cumque sit! Totam at repellat dolorum ab natus.
Eveniet quasi eius doloremque nobis maiores odio aperiam tempore consequuntur recusandae eaque sequi iste at optio debitis, reiciendis incidunt illo officia. Reprehenderit sunt perferendis doloribus possimus natus, non aliquid! Labore!
                </p>
                <div className="about_desc-creator-container">
                    {
                        creators.map((creator) => (
                            <a href={creator.url} title={creator.name} target="_blank" rel="noopener noreferrer">
                                <img src={creator.img} alt={creator.name} className="" />
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Aboutus;