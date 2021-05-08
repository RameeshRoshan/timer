import React from 'react';
import './App.css';
import Input from './Input';
import Timer from './Timer';
import Deadline from './Deadline';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={
        input: "",
        days: 0,
        hours:0,
        minutes:0,
        seconds:0
    };
  }

  onChange=(e)=>{
      this.setState({ input: e.target.value});
      console.log(this.state.input);
  }

  onClick=()=>{
    let deadLineTime=new Date(this.state.input).getTime();
    let timeNow=new Date().getTime();
    let diff=deadLineTime-timeNow;
    if(diff<0){
      window.alert("Enter a future date");
      return;
    }
    let Intrvl=setInterval(() => {
      diff=diff-1000;
      let D=Math.floor(diff/(1000*60*60*24));
      let H=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
      let M=Math.floor((diff%(1000*60*60))/(1000*60));
      let S=Math.floor((diff%(1000*60))/1000);
      this.setState({days: D,hours:H,minutes:M,seconds:S}, ()=> this.timeUp(Intrvl));
    }, 1000);
  }

  timeUp=(props)=>{
    if((this.state.days+this.state.hours+this.state.minutes+this.state.seconds)===0){
      clearInterval(props);
    }
  }
  
  render(){
    return (
      <div className="App">
        <Deadline date={this.state.input}/>
        <Timer days={this.state.days} hours={this.state.hours} minutes={this.state.minutes} seconds={this.state.seconds} />
        <Input onclick={this.onClick} onchange={this.onChange}/>
      </div>
    )
  }
}

export default App;
