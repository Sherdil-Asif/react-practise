import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
      <div>
    <div className='nav'>
      <p style={{marginTop:"2%",marginLeft:"10%",fontStyle:"italic",fontWeight:"bolder",fontSize:"25px"}}>besnik</p>
    
      <p style={{display:"flex",marginLeft:"30%",marginTop:"2%"}}>Home</p>
      <p style={{marginTop:"2%"}}>About us</p>
      <p style={{marginTop:"2%"}}>Features</p>
      <p style={{marginTop:"2%"}}>contact</p>
      <form class="d-flex">
        
        <button class="btn btn-outline-success" type="submit" style={{marginRight:"20px",marginTop:"14%",height:"55%"}}>Sign in</button>
        <button type="button" class="btn btn-primary" style={{marginTop:"14%",height:"55%"}}>Sign up</button>

      </form>
     
    </div>
    
    <div className='text'>
        <h1 style={{lineHeight:"130%",fontWeight:"bold",fontSize:"250%"}}>Search for Homes in your Neighborhood</h1>
        
    </div>
    <div>'
        <p style={{width:"30%",display:"flex",flexDirection:"row",marginLeft:"10%",color:"grayText"}}>Online Estate Agency,the modern way to sell your home You can use griffin residential to market your property</p>
    </div>
    <div  style={{display:"flex", flexDirection:"row",justifyContent:"flex-start",marginLeft:"10%"}}>
        <img src="/Search.jpg" alt="" width="30%" height="10%" />
        <img src="/Right.jpg"  height="70%" width="450px" alt="" style={{marginLeft:"20%",position:"absolute",top:"33%",left:"40%"}}  />
      </div>
    
      <div><img src="/Logo.jpg" width="1120px" height="30%" alt="" style={{display:"flex",marginLeft:"7%",marginTop:"10%",marginBottom:"10%"}} /></div>

      <div><h3 style={{fontSize:"220%",fontWeight:"bold"}}>What can We Help you Find?</h3></div>

<container>
    <div style={{display:"flex",justifyContent:"space-around",marginTop:"6%"}} >
      <div>
        <img src="/icon 01.jpg" alt="" />
         <h5 style={{marginTop:"10%"}}>Buy a Home</h5>
         <p style={{width:"220px",marginTop:"10%"}} >Interested in Buying or Selling through an Auction? Town  Country Can Help Fast and Free.</p>
      </div>
   <div>
     <img src="/icon 02.jpg" alt="" />
     <h5 style={{marginTop:"10%"}}>Rent a home</h5>
     <p style={{width:"230px" ,marginTop:"10%"}}>We offer office space for rent throughout London and the United Kingdom including many major towns and cities.</p>
   </div>
   <div>
     <img src="/icon 03.jpg" alt="" />
     <h5 style={{marginTop:"10%"}}>See Neighborhood</h5>
     <p style={{width:"220px" ,marginTop:"10%"}}>With more Neighborhood insight than other and releated to website and also take a people</p>
   </div>
    </div>
    </container>

    <container2>
      <div style={{display:"flex",justifyContent:"space-around",marginTop:"6%"}}>
      <div>
        <h6 style={{fontSize:"70px",width:"605px",textAlign:"justify"}}>Our trending latest property</h6>
        <p style={{width:"80%",display:"flex",marginLeft:"1%",marginTop:"5%",textAlign:"justify",color:"gray"}}>Our unique process givers you peace of mind from home rent to services</p>
      </div>
      <div>
      <button id="btnGroupDrop1" type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{ marginTop:"25%"}}>
      Property Type
    </button>
    <button type="button" class="btn btn-primary" style={{marginTop:"25%"}}>See All Property</button>
      </div>
      
      </div>
    </container2>

    <container3>
    <div class="container" style={{marginRight:"15%"}}>
  <div class="row row-cols-2">
    <div class="col">
    <img src="/image (1).jpg" alt="" style={{marginTop:"5%"}} />
    <div style={{position:"relative",position:"absolute",right:"250px",left:"10px",top:"1720px"}}>
   <button style={{marginLeft:"23%",marginTop:"2%"}}><svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg></button> 
    <h5 style={{fontWeight:"bold",color:"blue"}}>$259,000</h5>
    <h5>Case Alda</h5>
      <p> Co Rd Tribune Tribune</p>
      <img src="/icon.jpg" alt="" />
      <button type="button" class="btn btn-primary" style={{display:"flex",marginTop:"2%",marginLeft:"45%"}}>View Details</button>
      </div>
    </div>
    <div class="col">
      <img src="/iamge.jpg" alt="" style={{marginRight:"20px",marginTop:"5%"}} />
      
      <div style={{position:"relative",position:"absolute",left:"1000px",top:"1730px"}}>
      <button style={{marginLeft:"90%",marginTop:"2%"}}><svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg></button> 
      
      <h5  style={{fontWeight:"bold",color:"blue"}} >$259,000</h5>
      <h5>Langes Beach House</h5>
      <p>375 Highland Ave NE UNIT 1002</p>
      <img src="/icon.jpg" alt="" />
      <button type="button" class="btn btn-primary" style={{display:"flex",marginTop:"5%",marginLeft:"37%"}}>View Details</button>
      </div>
    </div>
    <div class="col">
      <img src="image (2).jpg" alt="" style={{marginTop:"15%"}} />

      <div style={{position:"relative",position:"absolute",left:"450px",top:"2010px"}}>
      <button style={{marginLeft:"105%",marginTop:"10%"}}><svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg></button> 
      <h5 style={{fontWeight:"bold",color:"blue"}} >$259,000</h5>
     <h5>Super Deluxe Home</h5> 
     <p>1356 Lyonford Dr Sw Atlanta</p>
      <img src="/icon.jpg" alt="" />
      <button type="button" class="btn btn-primary" style={{display:"flex",marginTop:"12%",marginLeft:"20%"}}>View Details</button>
      </div>
    </div>
    <div class="col">
      <img src="/image (4).jpg" alt="" style={{marginTop:"15%"}} />
 
     <div style={{position:"relative",position:"absolute",left:"1030px",top:"2030px"}}>

     <button style={{marginLeft:"90%",marginTop:"2%"}}><svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg></button> 
      <h5 style={{fontWeight:"bold",color:"blue"}}>$259,000</h5>
      <h5>Clinton Vella</h5>
      <p>656 Lyonford Dr Sw Atlanta</p>
      <img src="/icon.jpg" alt="" />
      <button type="button" class="btn btn-primary" style={{display:"flex",marginTop:"5%",marginLeft:"30%"}}>View Details</button>
      </div>
    </div>
  </div>
</div>
    </container3>

    <container4>
    <div>
      <img src="Testimonial.jpg" width="100%" alt="" />
    </div>
    </container4>
    <container5>
      <div style={{border:"1px solid",marginBottom:"5%",padding:"7%",backgroundColor:"#0F2A47"}}>
        <h1 style={{fontWeight:"bold",fontSize:"50px",marginRight:"55%",color:"white"}}>Talk to a redfin Agent</h1>
        <p style={{width:"38%",textAlign:"justify",color:"white"}}>Start your Search with an local agent- theres no pressure or obligation</p>
        <p style={{marginLeft:"30%",position:"relative",position:"absolute",top:"3225px",left:"425px",color:"white"}}>Where are you searching for homes</p>
        <input style={{position:"absolute",top:"3270px",left:"835px",paddingBottom:"8px",width:"20%"}} type="text" name="" id=""  /> <button style={{ position:"absolute",top:"3270px",left:"1070px",height:"37px"}} type="button" class="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></button>
      </div>
      <div >
        <img src="/Footer.jpg"  width="100%" alt="" />
      </div>
    </container5>
    </div>
  )
}

export default Navbar
