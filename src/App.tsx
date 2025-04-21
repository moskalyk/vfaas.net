import {useEffect, useState} from 'react'
import './App.css'

function App() {
  const [cloud, setCloud] =useState(false)
  useEffect(() => {
    setTimeout(() => {
      setCloud(true)
    }, 200)
  }, [])

  return (
    <>
    <div style={{textAlign: 'left'}}>
      <p className={cloud ? 'cloud': ''} style={{opacity: 1}}>☁︎ there is no cloud </p>
      <br/>
      <p>$ vfaas</p>
      <br/>
      <p className='how'>how  &nbsp;? &nbsp;☈ &nbsp;(soon) pinball protocol for long running compute</p>
      <p className='what'>what ? &nbsp;✱ &nbsp;community serverless js functions & kv storage</p>
      <p className='why'>why  &nbsp;? &nbsp;⚔︎ &nbsp;friends, agents, and what blockchains need</p>
      <p className='who'>who  &nbsp;? &nbsp;𑗘 &nbsp;(soon) named subnets</p>
      <p className='where'>where? &nbsp;♖ &nbsp;at home</p>
      <br/>
      <p>code available soon</p>
      </div>

    </>
  )
}

export default App
