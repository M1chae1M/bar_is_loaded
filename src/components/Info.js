import React from 'react';

class Info extends React.Component{
  render(){
    const styles={
      Info:{
        position:'absolute',
        zIndex:'55555',
        padding:'20px',
        borderRadius:'20px',
        textAlign:'center',
        backgroundColor:'var(--light-grey)',
        height:'42vh',
        width:'42vw',
        border:'solid var(--lock-grey-color) 1px',
        color:'var(--lock-grey-color)',
        opacity:'0',
        transform:'scale(0%)',
        display:'grid',
        justifyItems:'center',
        gridTemplateRows:'15% 85%',
        transition:'opacity 0.4s 0.55s ease-in-out, transform 0.64s 0.55s ease-in-out',
      },
      header:{
        fontWeight:'bold',
        fontSize:'1.6rem',
        height:'fit-content',
      },
      content:{
        width:'70%',
        height:'fit-content',
      },
    }
    return(
      <div id='Info' style={styles.Info}>
        <div style={styles.header}>Info</div>
        <div style={styles.content}>
          The app is simple but extremely useful and you can agree with me if anywhen someone missloaded weight on your 3rd attempt on competition. In 2 main inputs I implemented a "debounce effect". It stops rounding numbers and changing plates on the virtual bar. The color of the plates is in accordance with powerlifting standards, but you can hover over a specific plate to find out how much it weighs.
        </div>
      </div>
    );
  }
}

export default Info;