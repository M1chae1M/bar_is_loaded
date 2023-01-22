const howManyPlates=(plates, weight, barW, calcPerSide,changeState)=>{
  let perSide=calcPerSide(weight,barW)-2.5;
  plates=[];
  plates.push(0);
  while(perSide>0){
    if(perSide>=25){
      perSide-=25;
      plates.push(25);
    }
    else if(perSide>=20){
      perSide-=20;
      plates.push(20);
    }
    else if(perSide>=15){
      perSide-=15;
      plates.push(15);
    }
    else if(perSide>=10){
      perSide-=10;
      plates.push(10);
    }
    else if(perSide>=5){
      perSide-=5;
      plates.push(5);
    }
    else if(perSide>=2.5){
      perSide-=2.5;
      plates.push(2.5);
    }
    else if(perSide>=1.25){
      perSide-=1.25;
      plates.push(1.25);
    }
  }
  plates.push(2.5);
  changeState(plates);
  return plates;
}

export default howManyPlates;