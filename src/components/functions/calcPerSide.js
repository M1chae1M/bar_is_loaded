const calcPerSide=(weight, barW)=>{
    let newPerSide=(weight-barW)/2;
    return newPerSide;
}

export default calcPerSide;