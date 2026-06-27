function runner() {
	eval(`
	 class ReasonWhere extends EventTarget {
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
		return \`
		<p>\$\{this.publicMembers()[0]\}? &nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#454040" viewBox="0 0 16 16"><path d="m7.792.312-1.533 2.3A.25.25 0 0 0 6.467 3H7.5v7.319a2.5 2.5 0 0 0-.515-.298L5.909 9.56A1.5 1.5 0 0 1 5 8.18v-.266a1.5 1.5 0 1 0-1 0v.266a2.5 2.5 0 0 0 1.515 2.298l1.076.461a1.5 1.5 0 0 1 .888 1.129 2.001 2.001 0 1 0 1.021-.006v-.902a1.5 1.5 0 0 1 .756-1.303l1.484-.848A2.5 2.5 0 0 0 11.995 7h.755a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h.741a1.5 1.5 0 0 1-.747 1.142L8.76 8.99a3 3 0 0 0-.26.17V3h1.033a.25.25 0 0 0 .208-.389L8.208.312a.25.25 0 0 0-.416 0"/></svg> \$\{this.publicMembers()[1]\}</p>
		\`
	} 
}


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
		return \`
		<p style='cursor:pointer;' onclick="alert('via mixed-folder-messages (mfm)')">\$\{this.publicMembers()[0]\} \$\{this.publicMembers()[3]\}\$\{this.publicMembers()[1]\}$\{this.publicMembers()[2]\}</span> \$\{this.publicMembers()[4]\}</p>
		\`
	} 
}


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
		return \`
		<p>\$\{this.publicMembers()[0]\}  \$\{this.publicMembers()[1]\}</p>
		\`
	} 
}


 



class Index extends EventTarget {
	constructor(){
		super()
		setTimeout(() => {
		  document.getElementById('cloud').classList.add('cloud')
		}, 400)
	}
	
	async clck() {
        console.log('clicked')
	}
	
	async view(args) {
		return \`
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<div style="display: initial" class='standing'>
			<div style='width: 45%; margin: 0 auto;' >
				<p id='cloud' style='opacity: 1'>☁︎ there is no cloud </p>
				<div class='cli'>
					<p style='cursor:pointer;'onclick="(() => navigator.clipboard.writeText('wget vfaas.net/vf && node vf'))()">$ wget vfaas.net/vf && node vf</p>
				</div>
				<Reason key={1} reason={'why'} explainer={'&nbsp;? &nbsp;⚔︎ &nbsp;friends, agents, and what blockchains need'}/>
				<Reason key={2} reason={'what'} explainer={'? &nbsp;✱ &nbsp;composable deployed function interfaces (DFIs) & kv storage'}/>
				<Reason key={3} reason={'how'} explainer={'&nbsp;? &nbsp;☈ &nbsp;replicated data, pinball protocol, & timeouts'}/>
				<ReasonClicker key={4} reason={'who'} fontSize={21.4} explainerHalf1={'&nbsp;? &nbsp;'} symbol={'∴'} explainerHalf2={'&nbsp;named data networking'}/>
				<Reason key={5} reason={'when'} explainer={'? &nbsp;⚯ &nbsp;p2p communication phasing'}/>
				<Reason key={6} reason={'huh'} explainer={'  &nbsp;? &nbsp;☢ &nbsp;tricr test runner frmwrk (i.e. i, ive, ill)'}/>
				<ReasonWhere key={8} reason={'where'} explainer={'&nbsp;off-usb hub-spoke'}/>
			</div>
		</div>
		\`
	} 
}



	
	(async () => {
		let index = new Index();
		let reason0 = await (new Reason('why','&nbsp;? &nbsp;⚔︎ &nbsp;friends, agents, and what blockchains need',1,'why','&nbsp;? &nbsp;⚔︎ &nbsp;friends, agents, and what blockchains need',1,'why','&nbsp;? &nbsp;⚔︎ &nbsp;friends, agents, and what blockchains need'));
let reason1 = await (new Reason('what','? &nbsp;✱ &nbsp;composable deployed function interfaces (DFIs) & kv storage',2,'what','? &nbsp;✱ &nbsp;composable deployed function interfaces (DFIs) & kv storage',2,'what','? &nbsp;✱ &nbsp;composable deployed function interfaces (DFIs) & kv storage'));
let reason2 = await (new Reason('how','&nbsp;? &nbsp;☈ &nbsp;replicated data, pinball protocol, & timeouts',3,'how','&nbsp;? &nbsp;☈ &nbsp;replicated data, pinball protocol, & timeouts',3,'how','&nbsp;? &nbsp;☈ &nbsp;replicated data, pinball protocol, & timeouts'));
let reason3 = await (new Reason('when','? &nbsp;⚯ &nbsp;p2p communication phasing',5,'when','? &nbsp;⚯ &nbsp;p2p communication phasing',5,'when','? &nbsp;⚯ &nbsp;p2p communication phasing'));
let reason4 = await (new Reason('huh','  &nbsp;? &nbsp;☢ &nbsp;tricr test runner frmwrk (i.e. i, ive, ill)',6,'huh','  &nbsp;? &nbsp;☢ &nbsp;tricr test runner frmwrk (i.e. i, ive, ill)',6,'huh','  &nbsp;? &nbsp;☢ &nbsp;tricr test runner frmwrk (i.e. i, ive, ill)'));
let reasonclicker5 = await (new ReasonClicker('who',21.4,'&nbsp;? &nbsp;','∴','&nbsp;named data networking',4,'who',21.4,'&nbsp;? &nbsp;','∴','&nbsp;named data networking',4,'who',21.4,'&nbsp;? &nbsp;','∴','&nbsp;named data networking'));
let reasonwhere6 = await (new ReasonWhere('where','&nbsp;off-usb hub-spoke',8,'where','&nbsp;off-usb hub-spoke',8,'where','&nbsp;off-usb hub-spoke'));

		const contents = await index.view();
		const element = document.getElementById('anchor');
		let main = contents;
		main = main.replaceAll("<ReasonWhere key={8} reason={'where'} explainer={'&nbsp;off-usb hub-spoke'}/>", await reasonwhere6.view((await reasonwhere6.publicMembers())[0]))
		main = main.replaceAll("<ReasonClicker key={4} reason={'who'} fontSize={21.4} explainerHalf1={'&nbsp;? &nbsp;'} symbol={'∴'} explainerHalf2={'&nbsp;named data networking'}/>", await reasonclicker5.view((await reasonclicker5.publicMembers())[0]))
		main = main.replaceAll("<Reason key={6} reason={'huh'} explainer={'  &nbsp;? &nbsp;☢ &nbsp;tricr test runner frmwrk (i.e. i, ive, ill)'}/>", await reason4.view((await reason4.publicMembers())[0]))
		main = main.replaceAll("<Reason key={5} reason={'when'} explainer={'? &nbsp;⚯ &nbsp;p2p communication phasing'}/>", await reason3.view((await reason3.publicMembers())[0]))
		main = main.replaceAll("<Reason key={3} reason={'how'} explainer={'&nbsp;? &nbsp;☈ &nbsp;replicated data, pinball protocol, & timeouts'}/>", await reason2.view((await reason2.publicMembers())[0]))
		main = main.replaceAll("<Reason key={2} reason={'what'} explainer={'? &nbsp;✱ &nbsp;composable deployed function interfaces (DFIs) & kv storage'}/>", await reason1.view((await reason1.publicMembers())[0]))
		main = main.replaceAll("<Reason key={1} reason={'why'} explainer={'&nbsp;? &nbsp;⚔︎ &nbsp;friends, agents, and what blockchains need'}/>", await reason0.view((await reason0.publicMembers())[0]))
		element.setHTMLUnsafe(main);
		
	})();
`)
};

(async () => {
	await runner();
})()
