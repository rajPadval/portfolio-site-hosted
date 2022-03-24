import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import '../Routes_css/Home.css'
import myImg from '../Images/mypngimage.png'
import code from '../Images/code-solid.svg'
import js from '../Images/js-brands.svg'
import rea from '../Images/react-brands.svg'
import next from '../Images/next-js.svg'
import ps from '../Images/ps.svg'
import yt from '../Images/youtube-brands.svg'

const data = [
  { 
    img:`${code}`,
    name:'HTML / CSS',
    desc:"HTML is the structure of the Website, and CSS is its beauty"

  },
  { 
    img:`${js}`,
    name:'Javascript',
    desc:"HTML is the structure of the Website, and CSS is its beauty"

  },
  { 
    img:`${rea}`,
    name:'React.Js',
    desc:"HTML is the structure of the Website, and CSS is its beauty"

  },
  { 
    img:`${next}`,
    name:'Next.Js',
    desc:"HTML is the structure of the Website, and CSS is its beauty"

  },
  { 
    img:`${ps}`,
    name:'Photoshop',
    desc:"HTML is the structure of the Website, and CSS is its beauty"

  },
  { 
    img:`${yt}`,
    name:'Youtube',
    desc:"HTML is the structure of the Website, and CSS is its beauty"

  },
]
const Home = () => {
  return (
    <>
      <Navbar />
      <div id='home'>
        <div className="main">
          <div className="intro">
            <h2>Hello.. </h2>
            <h3>Myself Raj,</h3>
            <p>I make Websites with Pure HTML, CSS, JAVSCRIPT</p>
           <div className="btnContainer">
              <Link to='/about' className='btn'>More...</Link>
             </div>
          </div>
          <div className="introImg">
            <img src={myImg} alt="myLogo" srcset="" className='img'/>
          </div>
        </div>
        
        <div className="section">
           <h3 className='skillTitle'>Skills</h3>
          <div className="grid">
           {
             data.map(({img,name,desc,index})=> {
               return (
                <div key={index} className="cardContainer">
                <div className="imgHolder">
  
                  <img src={img} alt="" srcset="" className='svg' />
                </div>
                <div className="infoHolder">
                  <h3>{name}</h3>
                  <p>{desc}</p>
                </div>
              </div>
               )
             })
           }
          </div>
        </div>
      </div>

     <Footer/>
    </>
  )
}

export default Home