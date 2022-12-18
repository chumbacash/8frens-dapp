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
          WELCOME TO <a> 8FRENS NFT </a>
        </h1>

        <p className={styles.description}>
        The primary purpose is exploration & discovery, they also possess different vibes and stories.
        </p>


        <div>
        <Web3Button  contractAddress="0x2AD7BdEf55d635e928e9afcA52Ad6273E31B2cd9" action={(contract) =>
           {contract.erc721.claim(2)}}
           colorMode="light" accentColor="#fc0398"> 
            CLAIM NFT
         </Web3Button>
        </div>
                
        < br />

        <div className={styles.grid}>
          <a href="https://twitter.com/8frens/" className={styles.card}>
            <h2>Twitter &rarr;</h2>
            <p>
              Our big community is available here! Follow us.
            </p>
             </a>

          <a href="https://instagram.com/8frens" className={styles.card}>
            <h2>Instagram &rarr;</h2>
            <p>
              Follow us on instagram, repost and Tag us!.
            </p>
          </a>

          <a
            href="https://discord.gg/AwZGSuRZDK"
            className={styles.card}
          >
            <h2>Discord &rarr;</h2>
            <p>
              Be part of our Builders Community.
            </p>
          </a>
        </div>

        < br />

        <main className={styles.title}>

          <p className={styles.description}>
            Developed by <a> Chumbacash </a>
          </p>

         </main>

      </main>
    </div>
  );
};

export default Home;
