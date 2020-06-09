import React, { useState } from "react";

const Doubleuse = () => {

   const [name ,setname] = useState({

          firstname : "",
          lastname : ""
    });

    const changehandle = (event) => {

      // Destructuring Method

        const {name ,value} =   event.target;
console.log(name ,value)
// const _event = event.target.value;
// console.log(_event)

        setname(preve =>({

              ...preve,
              [name] : value
        }))


     

              // [event.target.name] : event.target.value
        

    }
        
console.log(name)
  return(
    <React.Fragment>
      <form>
        <input type="text" placeholder="First Name" name="firstname" value={name.firstname} onChange={changehandle}  />
          <br />
          <input type="text" placeholder="Last Name" name="lastname" value={name.lastname} onChange={changehandle}/> 
        <br />
        <button>Press</button>
      </form>
    </React.Fragment>
  )
}

export default Doubleuse;