import React from 'react';

class Menu extends React.Component{
  state={
    isBarInputFocused:true,
  }
  render(){
    const styles={
      Menu:{
        width:'40vw',
        display:'grid',
        borderRadius:'10.5px',
        overflow:'hidden',
        zIndex:'1410',
        flexWrap:'wrap',
        border:'none',
      },
      menuHeader:{
        color:'var(--blast)',
        display:'flex',
        width:'100%',
        height:'auto',
        textAlign:'center',
        border:'none',
      },
      menuHeaderContent:{
        padding:'3px',
        border:'none',
      },
      input:{
        display:'grid',
        border:'none',
        borderRadius:'0px',
        borderTop:'solid var(--lock-grey-color) 1.8px',
        textAlign:'center',
        color:'white',
        padding:'3px',
      },
      secoundRows:{
        display:'flex',
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
        <div style={styles.secoundRows}>
          <input
            type="number"
            placeholder="input empty bar weight"
            defaultValue={this.props.emptyBarWeight}
            step="5"
            min="5"
            max="50"
            style={styles.input}
            onChange={this.props.changeBarWeightState}
            className={this.state.isBarInputFocused===true?'focused':'notfocused'}
            onFocus={()=>{this.setState({isBarInputFocused:true})}}
          />
          <input
            type="number"
            placeholder="input weight"
            min="25"
            max="600"
            style={styles.input}
            defaultValue={this.props.inputWeightState}
            step={(this.props.havePlates[0]*2)}
            onChange={this.props.changeInputWeight}
            className={this.state.isBarInputFocused===false?'focused':'notfocused'}
            onFocus={()=>{this.setState({isBarInputFocused:false})}}
          />
        </div>
      </div>
    );
  }
}

export default Menu;