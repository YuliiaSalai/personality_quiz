const computedResult = (selectedValue) =>{
    let count = 0;
    for(let key in selectedValue){
      count += +selectedValue[key]
    }
    if(count===5) return 1;
    else if(count>5 && count <=10) return 2;
    else if(count>10 && count<=15) return 3;
    else if(count>15 && count<=20) return 4;
  }

export default computedResult