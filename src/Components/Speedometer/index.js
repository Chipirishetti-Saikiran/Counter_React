import React,{Component} from 'react'
import './index.css'
class Speedometer extends Component {

    state={Count:0};
    onIncrease=()=>{
        this.setState((prevState)=>({Count:prevState.Count+10}));
    };
    onDecrease=()=>{
        this.setState((prevState)=>({Count:prevState.Count-10}));
    };
        
    
    render(){
        const{Count}=this.state;
        return(
            <div className="Body">
                <h1 className="h1">SPEEDOMETER</h1>
                <img src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png" className="img" alt="123"/>
                <p className="p1">Speed is <span className="Span">{Count}</span></p>
                <p className="p2">Min Speed is 0kmph, Max Speed is 200kmph</p>
                <button className="btn" onClick={this.onIncrease}>Accelerator</button>
                <button className="btn" onClick={this.onDecrease}>Break</button>
            </div>
        )
    }
}

export default Speedometer;