import React from 'react';

class Menu extends React.Component{
  state={
    isBarInputFocused:true,
  }
  render(){
    const styles={
      Menu:{
        width:'40vw',
        display:'flex',
        borderRadius:'10.5px',
        overflow:'hidden',
        position:'absolute',
        zIndex:'1410',
        flexWrap:'wrap',
        border:'none',
      },
      input:{
        display:'flex',
        border:'none',
        borderRadius:'0px',
        borderTop:'solid var(--lock-grey-color) 1.8px',
        textAlign:'center',
        color:'white',
        padding:'3px',
      },
      menuHeader:{
        color:'var(--blast)',
        display:'flex',
        width:'100%',
        height:'fit-content',
        textAlign:'center',
        border:'none',
      },
      menuHeaderContent:{
        padding:'3px',
        border:'none',
      },
    }
    return(
      <div id='Menu' style={styles.Menu}>
        <div style={styles.menuHeader}>
          <div
            style={styles.menuHeaderContent}
            className={this.state.isBarInputFocused===true?'focused':'notfocused'}
          >
            bar weight:
          </div>
          <div
            style={styles.menuHeaderContent}
            className={this.state.isBarInputFocused===false?'focused':'notfocused'}
          >
            full weight:
          </div>
        </div>
        <input
          type="number"
          placeholder="input empty bar weight"
          defaultValue={this.props.emptyBarWeight}
          step="5"
          style={styles.input}
          onChange={this.props.changeBarWeightState}
          className={this.state.isBarInputFocused===true?'focused':'notfocused'}
          onFocus={()=>{this.setState({isBarInputFocused:true})}}
        />
        <input
          type="number"
          placeholder="input weight"
          min="25"
          style={styles.input}
          defaultValue={this.props.inputWeightState}
          step={(this.props.havePlates[0]*2)}
          onChange={this.props.changeInputWeight}
          className={this.state.isBarInputFocused===false?'focused':'notfocused'}
          onFocus={()=>{this.setState({isBarInputFocused:false})}}
        />
      </div>
    );
  }
}

export default Menu;