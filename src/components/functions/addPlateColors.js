const addPlateColors=(weight,ID)=>{
    let newClass;
    switch(weight){
      case 0:newClass='sleeve';break;
      case 25:newClass='plate25';break;
      case 20:newClass='plate20';break;
      case 15:newClass='plate15';break;
      case 10:newClass='plate10';break;
      case 5:newClass='plate5';break;
      case 2.5:
        if(ID===0){
            newClass='lock';
        }
        else{
            newClass='plate2h';
        }
        break;
      case 1.25:newClass='plate1q';break;
      default:break;
    }
    return newClass;
}

export default addPlateColors;