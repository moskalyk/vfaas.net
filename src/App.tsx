import {useEffect, useState} from 'react'
import './App.css'

function App() {
  const [cloud, setCloud] =useState(false)
  useEffect(() => {

    let result = window.location.href.split("/").pop();
    console.log(result)
    setTimeout(() => {
      setCloud(true)
    }, 200)
  }, [])

  function copyLibrary() {
    // Get the text field
  
    // Select the text field
     // Copy the text inside the text field
    navigator.clipboard.writeText(`
const { createEnsWalletClient, createEnsPublicClient } = require('@ensdomains/ensjs');
const { http } = require('viem')
const { sepolia, mainnet } = require('viem/chains')
const { setTextRecord } = require('@ensdomains/ensjs')
const { generatePrivateKey, privateKeyToAccount } = require('viem/accounts');
const { getTextRecord, getAddressRecord } = require('@ensdomains/ensjs/public');

function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
}
  
class VFAAS {
    server;

    constructor() {
    }

    async fetch(name, payload) {

        const client = createEnsPublicClient({
            chain: mainnet,
            transport: http()
        })

        let hasReachedEndNode = false;
        let nextNode = null

        nextNode = name

        const ipAddresses = []
        while(!hasReachedEndNode){
            const [ nextNodeName, ip ] = await client.ensBatch(getTextRecord.batch({ name: nextNode, key: 'vfaas' }), getTextRecord.batch({ name: nextNode, key: 'vfaas.net' }))
            if(ip != null) ipAddresses.push(ip)
            if(nextNodeName == null) hasReachedEndNode = true
            nextNode = nextNodeName
        }

        let response;

        console.log(ipAddresses)
        
        shuffle(ipAddresses)

        for(let i = 0; i < ipAddresses.length; i++){
            {
                try{
                    response = await fetch(ipAddresses[i]+/run, {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json",
                          },
                        body: JSON.stringify({
                            bundleID: payload.bundleID,
                            functionName: payload.functionName,
                            args: payload.args,
                        })
                    })
                    break;
                }catch(err){
                    console.log(err)
                    console.log('err')
                }
            }
        }

        return await response.json()
    }
}
      `);
  
    alert("Copied the class")
  }

  return (
    <>
    <div style={{textAlign: 'left'}}>
      <p className={cloud ? 'cloud': ''} style={{opacity: 1}}>☁︎ there is no cloud </p>
      <br/>
      <p>$ wget vfaas.net/cli && chmod +x ./cli && ./cli</p>
      <br/>
      <p className='why'>why  &nbsp;? &nbsp;⚔︎ &nbsp;friends, agents, and what blockchains need</p>
      <p className='what'>what ? &nbsp;✱ &nbsp;composable serverless js functions & kv storage</p>
      <p className='how'>how  &nbsp;? &nbsp;☈ &nbsp;replicated data, pinball protocol, & timeouts</p>
      <p className='who'>who  &nbsp;? &nbsp;∴ &nbsp;ens named linked nets</p>
      <p className='when'>when ? &nbsp;⚯ (future) p2p communication phase</p>
      <p className='where'>where? &nbsp;♖ &nbsp;at home</p>
      <br/>
      <p>docker self-hosting available soon</p>
      <p style={{cursor: 'pointer'}} onClick={() => copyLibrary()}>{'> client library code here'}</p>
      </div>

    </>
  )
}

export default App
