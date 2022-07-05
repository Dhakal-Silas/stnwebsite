import React from 'react'
import './Home.css'
import Logo from '../Images/SmartTechLogo.png'
import fimg1 from '../Images/fimg4.jpg'
import fimg2 from '../Images/fimg3.jpg'
import fimg3 from '../Images/fimg2.jpg'
import fimg4 from '../Images/fimg1.jpg'
import vid from '../Images/stnvideo.mp4'
import dimg1 from '../Images/dimg1.jpg'
import dimg2 from '../Images/dimg2.jpg'
import ngclientimg1 from '../Images/ngclientimg1.jpg'
import mayorpic from '../Images/mayorpic.jpg'

import { MdChevronLeft,MdChevronRight } from 'react-icons/md';




function Home() {
 

  return (
<>

    <div className='page'>
        <div className='navbar'>
            <div className='logo'>
                <img src={Logo} alt="Smart Tech Logo"/>
            </div>

            <div className='navbar-toggle' id='mobile-menu'>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
            </div>
            <div className='navbar-menu'>
                <a href='#' className='navbar-items'>Home</a>
                <a href='#' className='navbar-items'>About Us</a>
                <a href='#' className='navbar-items'>IT services</a>
                <a href='#' className='navbar-items'>Careers</a>
                <a href='#' className='navbar-items'>Contact</a>
                
            </div>
        </div>

        <div className='parallax1'>
        
        </div>
      
            <div className='hero'>
                <div className='hero-contents'>
                    <h1 className='hero-heading'>ARE YOU LOOKING FOR IT SUPPORT?</h1>
                    <p className='hero-para'>We provide affordable, highly responsive IT Support and Services for small and medium businesses.</p>
                    <button className='btn'>Office Profile<i class="fa-solid fa-address-card"></i></button>
                    <button className='btn' >Get Started new <i class="fa-solid fa-arrow-right-long"></i></button>
                </div>
                
            </div>

        {/* chain section */}
        <div className='features'>
            <div className='rect'>  
            <img src={fimg1} alt="Smart Tech Logo"/>
            <h3>IT Consultancy</h3>
            <p>Our strategic IT consulting will help you automate and digitalise operations, optimise the software portfolio, and implement the latest technologies.</p>
            
            </div>
            <div className='rect'>  
            <img src={fimg2} alt="Smart Tech Logo"/>
            <h3>IT Support</h3>
            <p> we provide assistance and technical support to either businesses or consumers that are experiencing technical, hardware, or software issues.</p>
            
            </div>
            <div className='rect'> 
            <img src={fimg3} alt="Smart Tech Logo"/> 
            <h3>Technology</h3>
            <p>shepherding a technical innovation into routine use are much better equipped by education and experience to guide that innovation’s development than to manage its implementation.</p>
            
            </div>
            <div className='rect'> 
            <img src={fimg4} alt="Smart Tech Logo"/> 
            <h3>Demand and Supply</h3>
            <p>We pledge to supply the healthy products to your business and maintain on going demand supply chain.</p>
            </div>
        </div>

        {/* video section */}
        <div className='video-wrapper'>
        <div className='video'>
            {/* <video src={vid} autoPlay loop muted></video> */}
        </div>
        </div>

        {/* Second Parallex */}
<div className='parallax2'>

</div>
      
        {/* description section */}
    <div className='desc-wrapper'>
        <div className='expert-desc'>
            <h3>Areas of Expertise</h3>
            <div className='main-description'>
            <p>Main Strength of Smart Tech. Nepal lies in the blend of professionals, specialized and highly focused operation. Increasing customer’s awareness is the strength where it excels over its
            competitors. Our strength lies in our ability to blend current management practice and IT
            expertise into cost-effective Computer Aided Management Solutions, Products and
            Services. Our offers cover the following major areas:</p>
            <div className='desc-list'>
            
            <i class="fa-solid fa-circle-check"></i>System Analysis
            <i class="fa-solid fa-circle-check"></i>Process Development Localization
            <i class="fa-solid fa-circle-check"></i>Customized and Target Oriented Workflow Design
            <i class="fa-solid fa-circle-check"></i>Specialization in Client/Server and Internet/Intranet application and technologies
            <i class="fa-solid fa-circle-check"></i>System Integration
            <i class="fa-solid fa-circle-check"></i>Change/Request Implementation
            <i class="fa-solid fa-circle-check"></i>Standby Support Development
            <i class="fa-solid fa-circle-check"></i>Network Monitoring/Network Management Support
            <i class="fa-solid fa-circle-check"></i>Network Security and Threat management Solution
            <i class="fa-solid fa-circle-check"></i>Hardware at Competitive Price
            <i class="fa-solid fa-circle-check"></i>Sever Maintenance and Support
            <i class="fa-solid fa-circle-check"></i>Project Management
            <i class="fa-solid fa-circle-check"></i>Projec Support
            <i class="fa-solid fa-circle-check"></i>Web Based Support and Solution
            <i class="fa-solid fa-circle-check"></i>Data Conversion and Data Entry
            
            
            </div>
        </div>
        </div>
        <div className='expert-pic'>
            <img src={dimg1} alt='expertise Image'/>
        </div>
        

        <div className='techno-desc'>
            <h3>Technology We Embrace</h3>
            <div className='main-description'>
              
                    <div className='desc-list1'>
                   
                    <i class="fa-solid fa-circle-check"></i>Node, for server-side and API requests.
                    <i class="fa-solid fa-circle-check"></i>MongoDB, for database to store all the application data.
                    <i class="fa-solid fa-circle-check"></i>Express, to create a http server.
                    <i class="fa-solid fa-circle-check"></i>React, for web application development.
                    <i class="fa-solid fa-circle-check"></i>Redux, to manage the application-level state in web
                    <i class="fa-solid fa-circle-check"></i>Java, for mobile application development.
                    <i class="fa-solid fa-circle-check"></i>JSON to transmit data objects consisting of attribute–value pairs.
                   
                    <i class="fa-solid fa-circle-check"></i>Bootstrap, a CSS framework for further styling the application.
                    <i class="fa-solid fa-circle-check"></i>Axios: API request to access and manipulate textual representations of 
                                                            Web resources using a uniform and predefined set of stateless operations.
                    <i class="fa-solid fa-circle-check"></i>Passport JS, for local authentication.
                    <i class="fa-solid fa-circle-check"></i>JSON Web Token, to generate the token for validating the user.
                    <i class="fa-solid fa-circle-check"></i>Mongoose, to manipulate the MongoDB database.
                    <i class="fa-solid fa-circle-check"></i>NPM: manages the node packages and library
                   
                    </div>
            </div>
            </div>
            
        <div className='techno-pic'>
            <img src={dimg2} alt='Techonlogy Image'/>
        </div>
        </div>
        
       
        {/* Nepal Government Clients */}
        <div className='ngclients'>
            <div className='clients-list'>
                <h3>Nepali Government Client</h3>
                <ol>
            <li> NIFADP BALAJU (National Inland Fisheries and Aqua Culture Development program)</li>
            <li> DOFD BALAJU (Directorate of Fisheries Development)</li>
            <li> CFLAB BALAJU (Central Fisheries Laboratory)</li>
            <li> PMAMP (Prime Minister Agriculture Modernization Project)</li>
            <li> PMAMP SUPER ZONE (Bara, Kavre, Dang, Jhapa, Jajarkot, Jumla, panchthar,Pyuthan)</li>
            <li> MOSD P1 (Ministry of social Development, Province 1)</li>
            <li> VSPSC (Vegetable Seed Production Center, Rukum)</li>
            <li> DOLFD (Directorate of Livestock and Fisheries Development)</li>
            <li> HMIS TEKU (Health Management Information System)</li>
                <li> MDDOHS (Management Division Department of Health Service)</li>
            </ol>

            </div>
            <div className='rotate-img'>
            <img src={ngclientimg1} alt='BackgroundImage' />
            
            </div>
            </div>
    
        {/* try section */}
    <div className='try'>
        <div className='box'>
        <i class="fa-solid fa-handshake"></i>
             <p>Lets give us a try</p>
        </div>

        
    </div>
    {/* testimony section */}
    {/* < MdChevronLeft size={40} className='left'/>   < MdChevronRight size={40} className='right'/> */}
        <div className='testimonial'>
      <div className='testimony-header'>
            <h3>Check out what are clients are saying about us:</h3>    
            <div className='testimony-card-wrapper'>
            <div className='testimony-card' >
          
                   <div className='testimony-img'>
                    <img src={mayorpic} alt='Picture of Mayor'></img></div> 
                    <div className='testimony-content'>
                    <h4>Ganesh Parsain</h4> <h5>Mayor (Harion Municipality)</h5>
                    “You think about things in such a creative way. You help me think about problem-solving in a new way."
                    </div>
            </div>
            <div className='testimony-card' >
                   <div className='testimony-img'>
                    <img src={mayorpic} alt='Picture of Mayor'></img></div> 
                    <div className='testimony-content'>
                    <h4>Ganesh Parsain</h4> <h5>Mayor (Harion Municipality)</h5>
                    “You think about things in such a creative way. You help me think about problem-solving in a new way."
                    </div>
            </div>
            <div className='testimony-card' >
                   <div className='testimony-img'>
                    <img src={mayorpic} alt='Picture of Mayor'></img></div> 
                    <div className='testimony-content'>
                    <h4>Ganesh Parsain</h4> <h5>Mayor (Harion Municipality)</h5>
                    “You think about things in such a creative way. You help me think about problem-solving in a new way."
                    </div>
            </div>
            <div className='testimony-card'>
                   <div className='testimony-img'>
                    <img src={mayorpic} alt='Picture of Mayor'></img></div> 
                    <div className='testimony-content'>
                    <h4>Ganesh Parsain</h4> <h5>Mayor (Harion Municipality)</h5>
                    “You think about things in such a creative way. You help me think about problem-solving in a new way."
                     </div>
            </div>
            
            <div className='testimony-card'>
                   <div className='testimony-img'>
                    <img src={mayorpic} alt='Picture of Mayor'></img></div> 
                    <div className='testimony-content'>
                    <h4>Ganesh Parsain</h4> <h5>Mayor (Harion Municipality)</h5>
                    “You think about things in such a creative way. You help me think about problem-solving in a new way."
                    </div>
            </div>
            <div className='testimony-card' >
                   <div className='testimony-img'>
                    <img src={mayorpic} alt='Picture of Mayor'></img></div> 
                    <div className='testimony-content'>
                    <h4>Ganesh Parsain</h4> <h5>Mayor (Harion Municipality)</h5>
                    “You think about things in such a creative way. You help me think about problem-solving in a new way."
                    </div>
            </div>
            
            

            </div>
            
            
            
            
        </div>
        
    <p>Thanks to Our admirable team of developers, field managers, and marketing department who  gave 100% to bring this outcome.</p>

    </div>
{/* Case Studies Section */}
<div className='case'>
    <div className='case-header'>
        <h2>We focus on bringing value and solve business main challenges</h2>
    </div>
    <div className='case-content'>
        <p>Our working ideology is the dedication to provide top quality solutions by utilizing
information technology as strategic business tool, both domestically and internationally.</p>
    </div>
    </div>    
<div className='footer'>
    
</div>

</div>
 
   
    </>
  )
}

export default Home