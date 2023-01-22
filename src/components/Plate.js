import React from 'react';
import addPlateColors from './functions/addPlateColors';
class Plate extends React.Component{
  render(){
    const styles={
      Plate:{
        zIndex:'1',
        width:'var(--width)',
        border:'solid black 1px',
      },
    }
    return(
      <div
        id='Plate'
        style={styles.Plate}
        className={addPlateColors(this.props.weight,this.props.ID)}
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