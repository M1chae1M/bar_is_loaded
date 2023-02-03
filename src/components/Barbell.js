import React from 'react';

export default class Barbell extends React.Component{
  render(){
    const styles={
      Barbell:{
        position:'absolute',
        right:'0%',
        width:'calc(20% + calc(var(--width)*9) + calc(var(--border-or-gap-in-px)*4*9))',
        height:'10px',
        zIndex:'1',
        backgroundColor:'black',
        },
    }
    return(
      <div id='Barbell' style={styles.Barbell}></div>
    );
  }
}