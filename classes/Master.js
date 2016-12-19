class Master {
  constructor( name, lvl, ninja, active ){
      this.name = name;
      this.lvl = lvl;
      this.ninja = ninja;
      this.active = active; 
  }
  
  getState () {
    return `Master  ${this.name} is at level: ${lvl}`;
  }
}

export default Master;