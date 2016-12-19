class Pupilo{
	constructor (name, lvl, potential) {
        this.name = name
        this.lvl = lvl
        this.potential = potential
    }
  
    reduce () {
		this.lvl -= 5;
    }
}

export default Pupilo;