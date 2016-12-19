class Pupilo{
  constructor(name, lvl, potencial){
    this.name      = name;
    this.lvl       = lvl;
    this.potencial = potencial;
  }
  
  reduce(){
    this.lvl -= 5;
  }
}

export default Pupilo;