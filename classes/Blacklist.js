import Pupilo from './Pupilo.js';

class BlackList extends Pupilo{
  constructor( name, lvl, potential ){
      super(name, lvl, potential);
      this.strikes = 3;
      this.hitList = 10;
  }
  
  strike () {
    this.strikes -= 1;
  }
  
  hitme () {
    this.hitList -= 5;
  }
}

export default Blacklist;