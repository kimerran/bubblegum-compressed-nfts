import { none } from '@metaplex-foundation/umi'
import { mintToCollectionV1, mintV1 } from '@metaplex-foundation/mpl-bubblegum'
import { fromWeb3JsPublicKey } from '@metaplex-foundation/umi-web3js-adapters'
import { PublicKey } from '@solana/web3.js'
import { initUmi } from './umi'
import { base58 } from '@metaplex-foundation/umi/serializers'

const leafOwner =  fromWeb3JsPublicKey(new PublicKey("GEGbYWg5M1K5dMQzMhNmeE79JhmhQ2q8tPbrq6Wuewbk"))
const merkleTree =  fromWeb3JsPublicKey(new PublicKey("2RyXoopf57v2E4bPkv127ibF2dADYwnAncBFfGgqtSkW"))
const collectionMint =  fromWeb3JsPublicKey(new PublicKey("JB61hkbFu9HPUnsCCeLhiYTamjyAV1rjYtWiJKbG7rrC"))

async function main() {
    const umi = initUmi()
    const signature = await mintToCollectionV1(umi, {
        leafOwner,
        merkleTree,
        collectionMint,
        metadata: {
          name: 'My Compressed NFT to collection',
          uri: 'https://cninrrddrovkmxyt5bfbuyg4eren6jisnneneek65yhurvupvb5a.arweave.net/E1DYxGOLqqZfE-hKGmDcJEjfJRJrSNIRXu4PSNaPqHo',
          collection: { key: collectionMint, verified: false },
          sellerFeeBasisPoints: 0,
          creators: [
            { address: umi.identity.publicKey, verified: false, share: 100 },
          ],
        },
      }).send(umi)
      console.log('signature', base58.deserialize(signature).toString())
}
main()

