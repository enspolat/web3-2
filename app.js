const ethereumButton = document.querySelector('.enableEthereumButton');
const sendEthButton = document.querySelector('.sendEthButton');
const showBalance = document.getElementById('showBalance')
const amount = document.getElementById('amount').value

let accounts = [];

//Sending Ethereum to an address
sendEthButton.addEventListener('click', () => {
  ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: accounts[0],
          to: '0x7E84ABC4eBE676681c7f077FcFF36487fa79ebD7',
          value: amount,
          gasPrice: '0x09184e72a000',
          gas: '0x2710',
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.log(error));
});

function showBalance(){
    web3.eth.getBalance(
    accounts[0],
   function (err, result) {
     if (err) {
       console.log(err);
     } else {
       balance.innerHTML = (web3.utils.fromWei(result, "ether") + " ETH");
     }
   }
 ); 
 }

ethereumButton.addEventListener('click', () => {
  getAccount();
});

async function getAccount() {
  accounts = await ethereum.request({ method: 'eth_requestAccounts' });
}