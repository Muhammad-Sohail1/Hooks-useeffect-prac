import React from "react";

export default class Sohail extends React.Component{

              constructor(props){
                super(props)

                this.state = {
                  name : "",
                  todo : []
                }
                
              }


              handle = (event) => {
                    // console.log(event.target.value)

                    this.setState({
                      name : event.target.value
                    })
              }
                  submits = (e) =>{
                    e.preventDefault();
                    let  txt = this.state.todo;
                    let input = this.state.name;
                    txt.push(input);

                    this.setState({
                      todo : txt,
                      name : ""
                    })

                  }

                    delete = (event) =>{
                      let id = event.target.id;
                      let item = this.state.todo;
                      item.splice(id,1);

                      this.setState({
                        todo : item,
                        name : ""
                      })
                    }
                    // componentWillUnmount(){
                    //   console.log("App Unmounted")
                    // }

  render(){
              // console.log("App Rendered")
    return(
      <React.Fragment>
        <form onSubmit={this.submits}>
          <input type="text" value={this.state.name} onChange={this.handle}></input>
          <button>Press</button>
        </form>
        <div>
          {
              this.state.todo.map((e,i)=>{
                return(
                  <li key={i}>{e} <span onClick={this.delete} id={i}>X</span>      </li>
                )
              })
          }
        </div>
      </React.Fragment>
    )
  }
}