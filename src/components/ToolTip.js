import React from 'react';

class ToolTip extends React.Component{
  render(){
    const styles={
      ToolTip:{
        position:'absolute',
        color:'white',
        backgroundColor:'black',
        zIndex:'140',
        left:'0px',
        width:'30px',
        textAlign:'center',
        transform:'translateX('+(this.props.toolTipX-15)+'px) translateY(calc(var(--height)*1.85))',
        borderRadius:'5px',
        padding:'5px auto',
        verticalAlign:'middle',
      },
    }
    return(
      <div id='ToolTip' style={styles.ToolTip}>
        {this.props.weight}
      </div>
    );
  }
}

export default ToolTip;