import { generateSigner } from '@metaplex-foundation/umi'
import { createTree } from '@metaplex-foundation/mpl-bubblegum'
import { initUmi } from './umi'


const umi = initUmi()

async function main() {
    const merkleTree = generateSigner(umi)

    console.log('merkleTree pubkey', merkleTree.publicKey)

    const builder = await createTree(umi, {
        merkleTree,
        maxDepth: 14,
        maxBufferSize: 64,
    })
    const { signature, result } = await builder.sendAndConfirm(umi)

    console.log('signature', signature.toString())
    console.log('result', result)
}
main()


// output from tx:
// merkle tree pubkey: 2RyXoopf57v2E4bPkv127ibF2dADYwnAncBFfGgqtSkW

