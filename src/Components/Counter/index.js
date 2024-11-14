import './index.css'

import React,{Component} from 'react'

class Counter extends Component {
    
        state={count:0}
        onIncrease=()=>{
            //this.setState((value)=>({count:value+1}));
            this.setState((prevState) => ({ count: prevState.count + 1 }));
              
        };
        onDecrease=()=>{
            
            this.setState((prevState) => ({ count: prevState.count - 1 }));
              
        };
        render() {
            
            return(
                <div className="Body">
                <h1 className="h1">This Button has been clicked <span className="span">{this.state.count}</span> this Times</h1>
                <p className="p">Click the below button to Increase the Count</p>
                <button className="btn"onClick={this.onIncrease}>Increase</button>
                <button className="btn"onClick={this.onDecrease}>Decrease</button>
                </div>
            )
        }
    }

export default Counter;
