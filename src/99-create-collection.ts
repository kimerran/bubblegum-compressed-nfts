import { createMetaplexInstance } from './metaplex'

async function main() {
    const metaplex = createMetaplexInstance();
    const { nft } = await metaplex.nfts().create({
        uri: 'https://arweave.net/E1DYxGOLqqZfE-hKGmDcJEjfJRJrSNIRXu4PSNaPqHo',
        name: 'The BLOCK Dev Bootcamp',
        sellerFeeBasisPoints: 5000
    }, { commitment: 'finalized'});
    console.log(nft)
}
main()

// 7ogd26g9YgSoWDfzrPCxGciXVGbvSUbzt9erN2XZvBgv