import React from 'react';
import Plate from './Plate';
import Barbell from './Barbell';
import ToolTip from './ToolTip';

class PlatesVisialisation extends React.Component{
  state={
    showToolTip:false,
    displayedWeight:'',
    toolTipX:0,
  }
  render(){
    const styles={
      PlatesVisialisation:{
        display:'flex',
        flexDirection:'row-reverse',
        alignItems:'center',
        height:'calc(var(--height)+20)',
        width:'100%',
        overflow:'hidden',
        gap:'var(--border-or-gap-in-px)',
        paddingRight:'30px',
        paddingTop:'calc(var(--width)*2)',
        paddingBottom:'calc(var(--width)*2)',
        position:'relative',
      },
    }
    const show=(newState)=>{
      this.setState({showToolTip:newState});
    }
    const newDisplayedWeight=(newState)=>{
      this.setState({displayedWeight:newState});
    }
    return(
      <React.Fragment>
        <div
          id='PlatesVisialisation'
          style={styles.PlatesVisialisation}
          onMouseMove={(e)=>{
            let newLeft=document.querySelector('#PlatesVisialisation')?parseFloat(document.querySelector('#PlatesVisialisation').getBoundingClientRect().left):null;
            this.setState({toolTipX:(e.clientX-newLeft)});
          }}
        >
          <Barbell/>
          {
            Array.from(this.props.platesState)
            .map((x,i)=>
              <Plate
                key={i}
                ID={i}
                weight={x}
                platesState={this.props.platesState}
                newDisplayedWeight={newDisplayedWeight}
                show={show}
              />
            )
          }
        </div>
        {
          this.state.showToolTip===true?
            <ToolTip
              toolTipX={this.state.toolTipX}
              weight={this.state.displayedWeight}
            />
              :null
        }
      </React.Fragment>
    );
  }
}

export default PlatesVisialisation;