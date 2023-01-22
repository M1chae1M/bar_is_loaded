import React from 'react';

class InfoButton extends React.Component{
  render(){
    const styles={
      InfoButton:{
        position:'absolute',
        right:'5%',
        top:'5%',
        borderRadius:'50%',
        width:'40px',
        height:'40px',
        textAlign:'center',
        verticalAlign:'middle',
        justifyAlign:'center',
        alignItems:'center',
        fontWeight:'bold',
        border:'solid 2px blac',
        display:'grid',
        justifyItems:'center',
      },
    }
    return(
      <div id='InfoButton' style={styles.InfoButton}>
        <p>i</p>
      </div>
    );
  }
}

export default InfoButton;