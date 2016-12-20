import Pupilo from './Pupilo.js';

class ZapoList extends Pupilo{
  constructor( name, lvl, potential ){
      super(name, lvl, potential);
      this.bonusPoints = -100;
      this.warning = 2;
  }
  
  reward (){
    this.bonusPoints += 0.5;
  }
  
  cuidado (){
    this.warning -= 1;
  }
}

export default ZapoList;