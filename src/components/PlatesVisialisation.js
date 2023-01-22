import React from 'react';
import Plate from './Plate';
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
        backgroundColor:'grey',
        background:'radial-gradient(ellipse at top, gray, transparent),radial-gradient(ellipse at bottom, grey, transparent)',
        display:'flex',
        alignItems:'center',
        height:'calc(var(--height)+20)',
        width:'100%',
        overflow:'hidden',
        gap:'1px',
        paddingLeft:'30px',
        paddingRight:'30px',
        paddingTop:'calc(var(--width)*2)',
        paddingBottom:'calc(var(--width)*2)',
        position:'relative',
      },
      bar:{
        width:'100%',
        position:'absolute',
        height:'10px',
        zIndex:'1',
        backgroundColor:'black',
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
        <div id='PlatesVisialisation' style={styles.PlatesVisialisation}
        onMouseMove={(e)=>{
          let newLeft=document.querySelector('#PlatesVisialisation')?parseFloat(document.querySelector('#PlatesVisialisation').getBoundingClientRect().left):null;
          this.setState({toolTipX:(e.clientX-newLeft)});
        }}
        >
          <div id='bar' style={styles.bar}></div>
          {
            Array.from(this.props.platesState).reverse().map((x,i)=>
              <Plate
                key={i}
                ID={i}
                weight={x}
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