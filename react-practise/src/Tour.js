
import React, { useState} from 'react'

const Tour = ({id,image,info,price,name,removeTour}) => {

    const [readMore, setReadMore] = useState(true)
  return (
    <article className='single-tour'>
    <img style={{marginLeft: "390px", width:"500px"}} src={image} alt={name}  />
    <footer>
        <div className='tour-info'>
        <h4 style={{marginLeft:"410px"}}>{name}</h4>
        <h4 className='tour-price' style={{marginLeft:"410px"}}>{price}</h4>
        </div>
        <p style={{borderBottom:"1px dotted",marginLeft:"330px",marginRight:"330px",textAlign:"center"}}>
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button onClick={() => setReadMore(!readMore)}>
             {readMore ? 'show less' : 'read More'}
            </button>
        </p>
        <button className='delete-btn' onClick={() => removeTour(id)} style={{marginLeft:"450px",marginBottom:"20px"}} >not interested </button>
    </footer>
    </article>
  )
};

export default Tour;
