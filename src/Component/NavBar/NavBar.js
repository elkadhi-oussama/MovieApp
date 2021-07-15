import React from 'react'
import{Navbar ,Nav }from 'react-bootstrap';
import StarRatingComponent from "react-star-rating-component";
import "./Navbar.css"

const NavBar = ({rate ,searchTerm,setRate,setSearchTerm,setHandleShow} ) => {
     
    const handleChange = event => {
        setSearchTerm(event.target.value);
      };

      const handleshow = () => {
        setHandleShow(true);
      };

    return (
    <div >
        <Navbar style={{background:'#a82652',height:70}} variant="dark">
        <div className="form">
            
            <div className="nav">
           
            <div className="nav_link">
            <Nav.Link className="link" href="#Film">Film</Nav.Link>
            <Nav.Link className="link" href="#Series">Series</Nav.Link>
            <Nav.Link className="link" href="#Anime">Anime</Nav.Link>
            </div>
            </div>
            <div className="starplusinput"> 
            <StarRatingComponent name="rate" className="reactstars" starCount={5}
                    value={rate}
                    color2={"#fafa48"}
                    onStarClick={(nextValue, prevValue) =>
                        setRate(nextValue, prevValue)
                    } />

            <input type="text" placeholder="Search" className="input" value={searchTerm} onChange={handleChange} />
            
            <button className="Add_btn" onClick={handleshow} >Add Movie</button>
            
            </div>   
               
    </div>
        
            
            
        </Navbar>
    </div>
    )
}

export default NavBar
