import React from 'react';

const User = (props) => {
 const familiar = props.familiar;  
 let Greetings; // Gretings a value ta joma hoia thakbe conditon ar jeta pore return ar moddee read korbo

 if(familiar){
    Greetings = <p>welcome friend, this is my friend</p>
}  
else{
   Greetings = <p>Who the hell are u?</p>                      
}                     
return (
<div>
         <div>
            <h1>GRETTING</h1>
         {Greetings}  
         </div>
        
        <div>
           <h1>FOOD</h1>
           {
              familiar 
              ? <p>I will buy food for you</p> //mani familiar ta true hole ata dhekabe 
              : <p>you have to buy your food</p> //false hole ata dhekabe
           }
        </div>

        <div>
           <h1>CONNECTION</h1>
           {
              familiar && <p>Join with my facebook</p>
           }
        </div>

</div>
);
};

export default User;