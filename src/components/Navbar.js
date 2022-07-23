import React from "react"
import detectEthereumProvider from '@metamask/detect-provider';
import '../App.css';

export default function Navbar(){

    const [connect,setConnect] = React.useState(false)
    const [account,setAccount] = React.useState('')
    
    const authorizeMetamask = async() => {
        const { ethereum } = window
        console.log('inside the authorizeMetamask function')
        const provider = async() => await detectEthereumProvider()
        if(provider){
          try{
            const accounts = await ethereum.request({method: 'eth_requestAccounts'})
            setAccount(accounts[0])
            console.log(`The account currently logged in is ${account}`)
            setConnect(true)
          }catch(e){
            console.error(e)
          }
        }
        // const accounts = provider.request({ method: 'eth_requestAccounts' })
        // const account = accounts[0]
        // console.log(`The public address is ${account}`)
      }

    return (
        <div className="nav-bar">
            <button onClick={authorizeMetamask}>
                <span className="buttontext">
                    {connect ? account : "Connect Wallet"}
                </span>
            </button>
        </div>
    )
}