class Reason extends EventTarget {
    reason
    explained
	constructor(){
		super()
		this.reason = 'why'
		setTimeout(() => {
		  // document.getElementById('cloud').style.opacity = 1
		  document.getElementById('cloud').classList.add('cloud')
		}, 500)
	}
	
	clckVal() {
	
	}
	
	async clck() {

	}
	
	async view() {
		return <>
		<p>{this.reason}  &nbsp;? &nbsp;⚔︎ &nbsp;friends, agents, and what blockchains need</p>
		</>
	} 
}

module.exports = Reason
