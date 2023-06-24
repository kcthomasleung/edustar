import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import styles from './styles.module.css';

const WalletConnectButton = () => {
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    const initWeb3 = async () => {
        try {
          if (window.ethereum) {
            await window.ethereum.enable();
            const web3Instance = new Web3(window.ethereum);
            setWeb3(web3Instance);
          } else {
            console.error('MetaMask not detected.');
          }
        } catch (error) {
          console.error('Error initializing Web3:', error);
        }
      };
      

    initWeb3();
  }, []);

  const connectWallet = async () => {
    try {
      if (web3) {
        // Get the selected account from MetaMask
        const accounts = await web3.eth.getAccounts();
        const selectedAccount = accounts[0];
        console.log('Connected account:', selectedAccount);
      } else {
        console.error('Web3 not initialized.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button className={styles.walletConnectButton} onClick={connectWallet}>
      Connect MetaMask Wallet
    </button>
  );
};

export default WalletConnectButton;
