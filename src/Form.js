import './App.css';
import { Component } from "react";
class Form extends Component{
    
    state={
            name:"",
            dpt:"",
            rating:"",
            data:[]
    }

    handlechange = (event)=>{
      this.setState({[event.target.name]:event.target.value})
    }
      
    handleClick=()=>{
      const obj={
            name:this.state.name,
            dpt:this.state.dpt,
            rating:this.state.rating
          }
      this.state.data.push(obj);
      this.setState({data:this.state.data, name: "", dpt: "", rating:""})
    }
    render(){
      return(
          <div className="App">
          <h2>EMPLOYEE FEEDBACK FORM</h2>
          <br></br>
          <label>Name :  
          <input type="text" name="name" onChange={this.handlechange}  value={this.state.name} className="inputBox"/>
          </label>
          <br></br>
          <br></br>
          <label>Department :  
          <input type="text" name="dpt" onChange={this.handlechange}  value={this.state.dpt} className="inputBox"/>
          </label>
          <br></br>
          <br></br>
          <label>Rating :  
          <input type="text" name="rating" onChange={this.handlechange}  value={this.state.rating} className="inputBox"/>
          </label>
          <br></br>
          <br></br>
          <button onClick={this.handleClick}>Submit</button>
          <br></br>
          <br></br>
          <div className="mainBox">
          {this.state.data.map((item)=>{
            return(
              <h4 className="box">Name : {item.name} | Department : {item.dpt} | Rating : {item.rating}</h4>
            )
          })}
          </div>
          </div>
      )
    }
}

export default Form;
