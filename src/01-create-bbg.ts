import { generateSigner } from '@metaplex-foundation/umi'
import { createTree } from '@metaplex-foundation/mpl-bubblegum'
import { initUmi } from './umi'
import { base58 } from '@metaplex-foundation/umi/serializers'

const umi = initUmi()

async function main() {
    const merkleTree = generateSigner(umi)

    console.log('merkleTree pubkey', merkleTree.publicKey)

    // devnet : depth 16, buffer size 64 = 0.25 SOL
    // max NFTs: 65,536
    // tx: https://solana.fm/tx/2Qqxk6pqr6wcpNWNrG7QUsnRqEF6qkRWsaMx6nc3hWZVa1zLVsL4YLRK3L6jJfnXPTxVfNrqUtXNqugK5MRzD886?cluster=devnet-alpha

    // 14 + 64 = 0.22 SOL

    const builder = await createTree(umi, {
        merkleTree,
        maxDepth: 17,
        maxBufferSize: 64,
        public: false,
        canopyDepth: 0,
    })
    // const { signature, result } = await builder.sendAndConfirm(umi)

    const signature =  await builder.send(umi)

    console.log('signature', base58.deserialize(signature).toString())
    // console.log('result', result)
}
main()


// output from tx:
// merkle tree pubkey: 2RyXoopf57v2E4bPkv127ibF2dADYwnAncBFfGgqtSkW

