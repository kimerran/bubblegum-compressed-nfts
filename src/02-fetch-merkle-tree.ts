import { fetchMerkleTree } from '@metaplex-foundation/mpl-bubblegum'
import { initUmi } from './umi'
import { publicKey } from '@metaplex-foundation/umi/serializers'
import { fromWeb3JsPublicKey } from '@metaplex-foundation/umi-web3js-adapters'
import { PublicKey } from '@solana/web3.js'

async function main() {
    const umi = initUmi()
    // old test: 2RyXoopf57v2E4bPkv127ibF2dADYwnAncBFfGgqtSkW
    // 16+64    : 2inCcBj644hcPBhyLtkjjz7wbB2PoWAF9PufNaqqnxm9
    // 14+64    : EWxvLAZPDGewYjmXTPKBrWgdsxzocGpcM4FmHSmwE8Tk

    const merkleTree =  fromWeb3JsPublicKey(new PublicKey("EWxvLAZPDGewYjmXTPKBrWgdsxzocGpcM4FmHSmwE8Tk"))
    const merkleTreeAccount = await fetchMerkleTree(umi, merkleTree)
    console.log('merkleTreeAccount', merkleTreeAccount)
}

main()
