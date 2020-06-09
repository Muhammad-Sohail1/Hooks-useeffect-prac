import React, { useState } from "react";

// TODO List in Function use State 

const Hook = () => {

  const [sub ,setsub] = useState({
    todo : []
  })

const [name ,setname] = useState({

      firstname  :  "",
      // todo : []
      
})

const changehandle = (event) =>{

          // First Method Just Practicing 

    //    const {name,value} = event.target
    // console.log(name ,"name");
    // console.log(name ,value)

      // Second Method 

      const _evnet = event.target.value;
      console.log("firstname" ,  _evnet)

        // event = event.target.value
    // console.log(event.target.value)
    
    setname({
      firstname : event.target.value
    })


}

const submits = (e) =>{
  e.preventDefault();

    const txt = sub.todo;
    const input = name.firstname;
    txt.push(input);

    setname({
        todo : txt,
        firstname : ""
    })
}









  return(
    <React.Fragment>
      <form onSubmit={submits}>
        First Name :
        <input type="text" placeholder="First Name" name = "firstname" value={name.firstname} onChange={changehandle}></input>
        <button>Press</button>
      </form>
      <br />
      <div>
        {
         sub.todo.map((e,i)=>{
            return(
              <li key={i}>{e}</li>
            )
          })
        }
      </div>
    </React.Fragment>
  )
}

export default Hook;