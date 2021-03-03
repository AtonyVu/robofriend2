import React from 'react';
import Card from './Card';

const Cardlist = ({robots}) =>
{
    const cardCompo = robots.map((user,i)=>{
       return   <Card key={i} id={user.id} name={user.name} email={user.email} />
    })
    return(
        <div>
              {cardCompo} 
        </div>
    );

}
export default Cardlist;