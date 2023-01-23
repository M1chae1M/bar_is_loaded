import React from 'react';
import addPlateColors from './functions/addPlateColors';
class Plate extends React.Component{
  render(){
    const styles={
      Plate:{
        display:'flex',
        zIndex:'1',
        width:'var(--width)',
        border:'solid black var(--border-or-gap-in-px)',
      },
    }
    return(
      <div
        id='Plate'
        style={styles.Plate}
        className={addPlateColors(this.props.weight,this.props.ID,
          this.props.platesState
          )}
        onMouseEnter={(e)=>{
          this.props.newDisplayedWeight(this.props.weight);
          if(this.props.weight>0){
            this.props.show(true);
          }
        }}
        onMouseLeave={()=>{
          this.props.show(false);
        }}
      >
      </div>
    );
  }
}

export default Plate;