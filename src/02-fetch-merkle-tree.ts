import { fetchMerkleTree } from '@metaplex-foundation/mpl-bubblegum'
import { initUmi } from './umi'
import { publicKey } from '@metaplex-foundation/umi/serializers'
import { fromWeb3JsPublicKey } from '@metaplex-foundation/umi-web3js-adapters'
import { PublicKey } from '@solana/web3.js'

async function main() {
    const umi = initUmi()
    const merkleTree =  fromWeb3JsPublicKey(new PublicKey("2RyXoopf57v2E4bPkv127ibF2dADYwnAncBFfGgqtSkW"))
    const merkleTreeAccount = await fetchMerkleTree(umi, merkleTree)
    console.log('merkleTreeAccount', merkleTreeAccount)
}

main()
