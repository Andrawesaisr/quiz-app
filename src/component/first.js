import React from 'react'
export default function First(props){
  
    return(
        <div className='card-container'>
            <h1 className='quiz'>Quiz App</h1>
            <h5 className='intro'>this app made by andrew aisr</h5> 
            <button className='start-button' onClick={props.value} >
                start quize!
            </button>
        </div>
    )
}