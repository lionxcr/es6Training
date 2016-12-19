import Pupilo from './Pupilo.js';

class Zapolist extends Pupilo {
	constructor (name, lvl, potential){
		super(name, lvl, potential);
		this.bonusPoints = -100;
		this.warning = 2;
	}
	    
	reward(){
		this.bonusPoints += 5;
		this.warning -= 1;
	}
}

export default Zapolist;