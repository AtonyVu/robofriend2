import React from 'react'

const Searchbox =({searchfi,onChangeSearch}) =>
{
    return(
        <div className="pa2 "> 
            <input
            className='pa3 ba bg-lightest-blue b--green' 
            type='search' placeholder='nhap vo cu '  
            onChange={onChangeSearch}
            />
            
            </div>
       
    )
}
export default Searchbox;