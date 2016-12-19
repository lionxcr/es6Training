import Pupilo from './Pupilo.js';

class Blacklist extends Pupilo {
	constructor (name, lvl, potential){
		super(name, lvl, potential);
		this.strikes = 3;
		this.hitList = 10;
	}
	  
	hitMe(){
		this.strikes -= 1;
	}
	  
	noreward(){
		this.hitList += 5;
	}
}

export default Blacklist;