import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from './components/Menu';
import Info from './components/Info';
import InfoButton from './components/InfoButton';
import havePlates from './components/functions/havePlates';
import calcPerSide from './components/functions/calcPerSide';
import howManyPlates from './components/functions/howManyPlates';
import PlatesVisialisation from './components/PlatesVisialisation';
import './index.css';

var plates=[2.5,0];

class App extends React.Component{
  state={
    inputWeightState:205,
    emptyBarWeight:20,
    platesState:plates,
  }
  componentDidMount(){
    plates=howManyPlates(plates,this.state.inputWeightState,this.state.emptyBarWeight,calcPerSide,(plates)=>{this.setState({platesState:plates})});
  }
  render(){
    const styles={
      App:{
        display:'grid',
        justifyItems:'center',
        position:'relative',
        height:'40vh',
        width:'40vw',
        borderRadius:'10.5px',
        overflow:'hidden',
        boxShadow:'grey 2px 2.5px 11px',
      },
    }
    const roundNumberFunction=(perSide)=>{
      let roundNumber=Math.floor(perSide/havePlates[0])*havePlates[0];
      roundNumber=((roundNumber+2.5)*2)+this.state.emptyBarWeight;
      this.setState({inputWeightState:roundNumber});
      return roundNumber;
    }
    let timeoutIDchangeWeightState;
    const changeInputWeight=(e)=>{
      let target=parseFloat(e.target.value),
      perSide=calcPerSide(target,this.state.emptyBarWeight)-2.5;

      if(timeoutIDchangeWeightState){clearTimeout(timeoutIDchangeWeightState)}
      timeoutIDchangeWeightState=setTimeout(
        () => {
            this.setState({inputWeightState:target});
            if((this.state.emptyBarWeight+5)<=target){
              e.target.value=roundNumberFunction(perSide);
              plates=howManyPlates(plates,e.target.value,this.state.emptyBarWeight,calcPerSide,(plates)=>{this.setState({platesState:plates})});
            }
            else{
              e.target.value=25;
              this.setState({inputWeightState:e.target.value});
              plates=howManyPlates(plates,e.target.value,this.state.emptyBarWeight,calcPerSide,(plates)=>{this.setState({platesState:plates})});
            }
        }, 1000);
    }
    let timeoutIDchangeBarWeightState;
    const changeBarWeightState=(e)=>{
      let targ=parseInt(e.target.value),
      perSide=calcPerSide(this.state.inputWeightState, targ)-2.5;

      if(timeoutIDchangeBarWeightState){clearTimeout(timeoutIDchangeBarWeightState)}
      timeoutIDchangeBarWeightState=setTimeout(()=>{
        if(perSide%havePlates[0]===0&&targ >0){
          this.setState({emptyBarWeight:targ});
          plates=howManyPlates(plates,this.state.inputWeightState,targ,calcPerSide,(plates)=>{this.setState({platesState:plates})});
        }
        else{
          this.setState({emptyBarWeight:20});
          e.target.value=20;
          plates=howManyPlates(plates,this.state.inputWeightState,e.target.value,calcPerSide,(plates)=>{this.setState({platesState:plates})});
        }
      },1000);
    }
    return(
      <React.Fragment>
        <InfoButton/>
        <Info/>
        <div id='App' style={styles.App}>
          <Menu
            changeBarWeightState={changeBarWeightState}
            emptyBarWeight={this.state.emptyBarWeight}
            havePlates={havePlates}
            inputWeightState={this.state.inputWeightState}
            changeInputWeight={changeInputWeight}
          />
          <PlatesVisialisation platesState={this.state.platesState}/>
        </div>
      </React.Fragment>
    );
  }
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);