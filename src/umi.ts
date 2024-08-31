import { createSignerFromKeypair, signerIdentity } from '@metaplex-foundation/umi'
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults'
import { clusterApiUrl, PublicKey } from '@solana/web3.js'
import { importDefaultSigner } from './wallet'
import { fromWeb3JsKeypair } from '@metaplex-foundation/umi-web3js-adapters'
import { mplTokenMetadata } from '@metaplex-foundation/mpl-token-metadata'

const signer = importDefaultSigner()

export const initUmi = () => {
    const umi = createUmi(clusterApiUrl('devnet'), 'finalized')
    const umiSigner = createSignerFromKeypair(umi, fromWeb3JsKeypair(signer))
    umi.use(signerIdentity(umiSigner))
    umi.use(mplTokenMetadata())

    // splassocia
    // const associatedTokenProgramId = new PublicKey('ATokenGPtTDoqKftVZ5u1mDaxqVoJVRrNfAL9tzpFHS');
    // umi.programs.add()
    return umi
}
