const Reason = require('./Reason.jsx')
const ReasonClicker = require('./ReasonClicker.jsx')
const ReasonWhere = require('./ReasonWhere.jsx')

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
		return <>
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
		</>
	} 
}

module.exports = Index
