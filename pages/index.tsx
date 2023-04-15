import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>

        
      <div className={styles.connect}>
          <ConnectWallet colorMode="light" accentColor="#043d35" />
        </div>
         
        <br/>

        <h1 className={styles.title}>
          WELCOME TO <a> 8FRENS </a>
        </h1>

        <p className={styles.description}>
        This page is only for 8frens NFT 
        </p>


        <div>
        <Web3Button  contractAddress="0x2AD7BdEf55d635e928e9afcA52Ad6273E31B2cd9" action={(contract) =>
           {contract.erc721.claim(3)}}
           colorMode="light" accentColor="#fc0398"> 
            CLAIM NFT
         </Web3Button>
        </div>
                
        < br />

        <div className={styles.grid}>
          <a href="https://twitter.com/8frens/" className={styles.card}>
            <h2>TWITTER &rarr;</h2>
            <p>
              Our big community is available here!.
            </p>
             </a>

          <a href="https://etherscan.io/address/0x2ad7bdef55d635e928e9afca52ad6273e31b2cd9" className={styles.card}>
            <h2>ETHERSCAN &rarr;</h2>
            <p>
              You can just mint on etherscan or manage your transactions.
            </p>
          </a>

          <a
            href="https://opensea.io/collection/8frens-nft"
            className={styles.card}
          >
            <h2>OPENSEA &rarr;</h2>
            <p>
              Collect our cool NFTs on the OpenSea marketplace.
            </p>
          </a>
        </div>

        < br />

        <main className={styles.title}>

          <p className={styles.description}>
            Developed by <a> ChumbaLabs </a>
          </p>

         </main>

      </main>
    </div>
  );
};

export default Home;
