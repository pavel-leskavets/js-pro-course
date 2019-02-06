import React, { Component } from 'react'; 
import plus from './plus.png'; 
import refresh from './refresh.png'; 
import minus from './minus.png'; 
import './App.css'; 
import ClickerSecond from './Clicker2';
import ClickerThird from './Clicker3';
import ClickerFourth from './Clicker3';



class Clicker extends Component { 
constructor(props) { 
super(props); 

this.state = { 
count: 0 
}; 

this.incrementCount = this.incrementCount.bind(this); 
this.decrementCount = this.decrementCount.bind(this); 
this.resetCount = this.resetCount.bind(this); 
} 

incrementCount() { 
this.setState({ 
count: this.state.count + 1 
}) 
} 

decrementCount() { 
this.setState({ 
count: this.state.count - 1 
}) 
} 

resetCount() { 
this.setState({ count: 0 }) 
} 

render() { 

return ( 

<div className="body"> 
<ClickerSecond/>
<ClickerThird/>
<ClickerFourth/>

<div className="main"> 
<div className="text">{this.state.count}</div> 
<div className="bottom"> 

<button className="second" onClick={this.incrementCount}><img src={plus} className="image" alt="" /></button> 
<button className="third" onClick={this.resetCount}><img src={refresh} className="image" alt="" /></button> 
<button className="fourth" onClick={this.decrementCount}><img src={minus} className="image" alt="" /></button> 
</div> 
</div> 
</div> 
); 
} 
} 

export default Clicker;