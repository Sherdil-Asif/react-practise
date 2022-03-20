
import React from 'react';
import './Header.css';
 const Header = () => {
   return(
   <>
    <div className='main'>
    <nav className="navbar navbar-dark bg-primary">
    <div className='horse'><ion-icon name="apps-outline"></ion-icon></div>
   
       <div className='container'>
       
       <input type="text" style={{paddingRight:"18%"}} placeholder='' />
       <div className='horse2'><p>TO DO</p></div>
       <div className='hr2'> <button style={{backgroundColor:"blue",borderRadius:"10px",color:"white"}}><ion-icon name="settings-outline"></ion-icon></button></div>
       <div className='hr3' > <ion-icon name="search-outline"></ion-icon> </div>
       <div className='hr4'> <button style={{backgroundColor:"blue",borderRadius:"10px",color:"white"}}><ion-icon name="help-outline"></ion-icon></button> </div>
       <div className='hr5'> <button style={{borderRadius:"10px"}}><ion-icon name="ellipse-outline"></ion-icon> <img src="https://pbs.twimg.com/profile_images/1162267138842755075/zxLifsgg_400x400.jpg" alt=""  width="10px" height="15px"/> </button> </div>
      </div>
     
       </nav>
      </div>
     
      <div className='container2'>
      {/* <div class="wrapper"> */}
     {/* <!--Top Menu & Menu button--> */}
        {/* <div class="sidebar">
            <div class="profile"> */}
                {/* <!--Profile Image-->
                <!--Profile Title & Descruption--> */}
            {/* </div>
             {/* <!--Menu item--> */}
       {/* </div>
        
    </div> */}

    <ul>
        <li><a href=""></a></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</div>

      </>
      
      
   )
  
}
export default Header;

           








































{/* 
//   return (
//     <div   >
//         <nav className="navbar navbar-dark bg-primary">
//   <div className="container-fluid">
//     <form className="d-flex">
//     <div  style={{display:"flex", alignItems:"center"}}> <  ion-icon name="search-outline"></ion-icon></div>
//       <input style={{marginLeft:"190%", paddingRight:"200%" ,  border:"solid" , display:"flex",alignItems:"center"}} className="form-control me-2" type="search" placeholder="fa fa-search" aria-label="Search"/>
     
//       {/* <button className="btn btn-outline-success" type="submit" style={{marginLeft:"70%"}}>Search</button> */}
//     </form>
    
//   </div>
  
// </nav>

//     </div>
//   ) */}
