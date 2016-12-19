import Pupilo from './Pupilo.js';

class Blacklist extends Pupilo{
  constructor(name, lvl, potencial){
    super(name, lvl, potencial);
    this.strikes = 3;
    this.hitList = 10;
  }
  
  addStrike(){
    this.strikes -= 1;
  }
  
  addHitList(){
    this.hitList += 5;
  }
}

export default Blacklist;