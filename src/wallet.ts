import walletFile from '../wallet.json'

import bs58 from 'bs58'
import { Keypair } from '@solana/web3.js'

export const importDefaultSigner = () => {
   return Keypair.fromSecretKey(bs58.decode(walletFile.key))
}
