class ReasonClicker extends EventTarget {
    reason
    explainer
    fontSize

	constructor(args, fontSize, explainerHalf1, symbol, explainerHalf2){
		super()
		this.reason = args
		this.fontSize = '<span style="font-size: '+fontSize+'px" >'
		this.symbol = symbol
		this.explainerHalf1 = explainerHalf1
		this.explainerHalf2 = explainerHalf2
	}
	
	publicMembers() {
		return [this.reason, this.fontSize, this.symbol, this.explainerHalf1, this.explainerHalf2]
	}
	
	async view() {
		const font = "font-size"
		return <>
		<p style='cursor:pointer;' onclick="alert('via mixed-folder-messages (mfm)')">\$\{this.publicMembers()[0]\} \$\{this.publicMembers()[3]\}\$\{this.publicMembers()[1]\}$\{this.publicMembers()[2]\}</span> \$\{this.publicMembers()[4]\}</p>
		</>
	} 
}

module.exports = ReasonClicker
