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
	
	async view() {
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
                <p class='why'>why  &nbsp;? &nbsp;⚔︎ &nbsp;friends, agents, and what blockchains need</p>
				<p class='what'>what ? &nbsp;✱ &nbsp;composable deployed function interfaces (DFIs) & kv storage</p>
				<p class='how'>how  &nbsp;? &nbsp;☈ &nbsp;replicated data, pinball protocol, & timeouts</p>
				<p class='who' style='cursor:pointer;' onclick="alert('via mixed-folder-messages (mfm)')">who  &nbsp;? &nbsp;<span style="font-size:21.4px">∴</span> &nbsp;named data networking</p>
				<p class='when'>when ? &nbsp;⚯ &nbsp;p2p communication phasing</p>
				<p class='huh'>huh  &nbsp;? &nbsp;☢ &nbsp;tricr test runner frmwrk (i.e. i, ive, ill)</p>
				<p class='where'>where? &nbsp;<img src="./src/assets/usb-symbol.svg"/> &nbsp;off-usb hub-spoke</p>
			</div>
		</div>
		</>
	} 
}

module.exports = Index
