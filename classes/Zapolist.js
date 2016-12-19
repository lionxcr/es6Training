import Pupilo from './Pupilo.js';

class Zapolist extends Pupilo{
  constructor(name, lvl, potencial){
    super(name, lvl, potencial);
    this.bonusPoints = -100;
    this.warning     = 2;
  }
  
  reward(){
    this.bonusPoints += 0.5;
  }
  
  hitMe(){
    this.warning -= 1;
  }
}

export default Zapolist;