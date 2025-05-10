import { useState } from 'react'
import './App.css';

export function CoolHover({position}) {
    
    return(
     <>
        <div className='coolHover' style={{transform: `translate(${position.x - 125}px, ${position.y - 125}px)`}}>
            
        </div>  
     </>
    )
}