class Reason extends EventTarget {
    reason
    explainer
	constructor(args, explanation){
		super()
		this.reason = args
		this.explainer = explanation
	}
	
	publicMembers() {
		return [this.reason, this.explainer]
	}
	
	async view() {
		return <>
		<p>\$\{this.publicMembers()[0]\}  \$\{this.publicMembers()[1]\}</p>
		</>
	} 
}

module.exports = Reason
