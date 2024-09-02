import { PublicKey } from '@solana/web3.js';
import { createMetaplexInstance } from './metaplex'

async function main() {
    const metaplex = createMetaplexInstance();
    const { nft } = await metaplex.nfts().create({
        uri: 'https://arweave.net/E1DYxGOLqqZfE-hKGmDcJEjfJRJrSNIRXu4PSNaPqHo',
        name: 'Project Selyo 00',
        sellerFeeBasisPoints: 0,
        // tree: new PublicKey("2RyXoopf57v2E4bPkv127ibF2dADYwnAncBFfGgqtSkW"),
    }, {
        commitment: 'confirmed', 
        // confirmOptions: {
        //     // skipPreflight: true,
        //     preflightCommitment: 'confirmed',
        //     commitment: 'confirmed'
        // }
    });
    console.log(nft)
}
main()

// 7ogd26g9YgSoWDfzrPCxGciXVGbvSUbzt9erN2XZvBgv