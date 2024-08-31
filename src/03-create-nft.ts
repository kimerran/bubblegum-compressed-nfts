import { none } from '@metaplex-foundation/umi'
import { mintToCollectionV1, mintV1 } from '@metaplex-foundation/mpl-bubblegum'
import { fromWeb3JsPublicKey } from '@metaplex-foundation/umi-web3js-adapters'
import { PublicKey } from '@solana/web3.js'
import { initUmi } from './umi'

const leafOwner =  fromWeb3JsPublicKey(new PublicKey("GEGbYWg5M1K5dMQzMhNmeE79JhmhQ2q8tPbrq6Wuewbk"))
const merkleTree =  fromWeb3JsPublicKey(new PublicKey("2RyXoopf57v2E4bPkv127ibF2dADYwnAncBFfGgqtSkW"))
const collectionMint =  fromWeb3JsPublicKey(new PublicKey("7ogd26g9YgSoWDfzrPCxGciXVGbvSUbzt9erN2XZvBgv"))

async function main() {
    const umi = initUmi()
    await mintToCollectionV1(umi, {
        leafOwner,
        merkleTree,
        collectionMint,
        metadata: {
          name: 'My Compressed NFT to collection',
          uri: 'https://cninrrddrovkmxyt5bfbuyg4eren6jisnneneek65yhurvupvb5a.arweave.net/E1DYxGOLqqZfE-hKGmDcJEjfJRJrSNIRXu4PSNaPqHo',
          collection: { key: collectionMint, verified: false },
          sellerFeeBasisPoints: 500, // 5%
        //   collection: none(),
          creators: [
            { address: umi.identity.publicKey, verified: false, share: 100 },
          ],
        },
      }).sendAndConfirm(umi)
}
main()

