import React, { useState, useEffect } from "react";
import axios from "axios";

const Effect = () => {

  const [count ,setcount] = useState(0);
  const [name ,setname] = useState("Sohail Memon");
  const [todo ,settodo] = useState([]);

  useEffect(() => {
console.log("Effect Targated")
      document.title = count
  fetchApi();
    },[count])
 
       const fetchApi =() => {

            // First Method for Data Fetching 

          // fetch('http://localhost:3000/employees')
          // .then((res) => {
          //   return res.json();
          // })

          //   .then((res2) => {
          //       console.log(res2)
          //   })

            // Second Method 

   // AXIOS gave a utilies just like a get post del or axois mn console k saht data bhi lihkna hota h


          // axios.get('http://localhost:3000/employees')
          // .then((res) => {
          //   console.log(res.data)
          // // })

          const param = {
            id : "9",
            input : "text",
            last_name : "d",
            email  : "BilalPatni@gamil.com"  
          }

          axios.post('http://localhost:3000/Ecommerce',param)
          .then((res) =>{
          })

          // .catch((error) => {
          //   console.log(error)
          // })

          axios.get('http://localhost:3000/Ecommerce')
          .then((res) => {
            console.log(res.data);

               settodo(res.data);
          })

          //  .catch((error) => {
          //    console.log(error)
          //  })

       }
          // async or  ka kaam hota h vo hamain callback hell or callback function se bachata h 

          // await callback vala kaam karta h or callback hell se bachata h 

          // async  method 

          // const FetchApi = async () => {

          //   let res = await axios.get('http://localhost:3000/employees');
          //   console.log(res.data)
          // }
// console.log(todo)

  return(
    <React.Fragment>
      <h1>Count Up : &nbsp; {count}</h1>
      <br />
      <button onClick={() => setcount(count + 1)}>Increment</button>
      &nbsp; 
      <button onClick={() => setcount(count - 1)}>Decrement</button>
      <br />
      <br />
      <input type="text" value={name} onChange={(e) => setname(e.target.value)}/>
      <br />
      <div>
        {
          todo.map((val,key) => {
            return(
            <li key={key} id={val.id} >{val.first_name}{val.last_name}</li>
            )
          })
        }
      </div>
        </React.Fragment>
  )
}

export default Effect;