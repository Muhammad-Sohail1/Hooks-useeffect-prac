import React from "react";
import Sohail from "./input"

export default class Lifecycles extends React.Component{

        constructor(props){
          super(props)

          this.state = {
            roll : "039905"
          }

          console.log("App Constructor")
          console.log(props)
        }
              static getDerivedStateFromProps(props,state){
                console.log("App - Get Derived State Fropm Props")
                console.log(props, state);
                return null;
              }

              componentDidMount(){
                console.log("App Component Mounted")
              }

              
  render(){
    console.log("Render")
    return(
      <React.Fragment>
<h1>hello</h1>
{/* <Sohail /> */}
      </React.Fragment>
    )
  }
}

