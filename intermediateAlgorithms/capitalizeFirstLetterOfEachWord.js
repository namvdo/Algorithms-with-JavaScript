function something(){
  let x = 4;
  let y = 5;
  for(let i = 0; i < y;i++){
    document.write("*");
  }
  for(let i = 2;i <= x - 2; i++){
    document.write("*"+ "  " + "*");
  }
  for(let i = 0; i < y;i++){
    document.write("*");
  }
}
something();