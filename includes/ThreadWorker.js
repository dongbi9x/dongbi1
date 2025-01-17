import { expose } from "threads/worker";
import hasher from 'js-sha3';
import { incrementBytes, bytesTou64, u64toBytes } from './math.js';

const work = {
    async findSalt(firstHash, maxTarget, startNonce) {
        const nonceBytes = u64toBytes(startNonce);
        const toHash2Length = firstHash.length + nonceBytes.length;
        const toHash2 = new Uint8Array(toHash2Length);
        toHash2.set(firstHash, 0);
        
        const targetBigInt = BigInt(maxTarget);
        let i = 0;
        
        do {
            incrementBytes(nonceBytes);
            toHash2.set(nonceBytes, firstHash.length);
            const hash = BigInt('0x' + hasher.keccak256(toHash2));
            
            if (hash <= targetBigInt) {
                return bytesTou64(nonceBytes);
            }
            i++;
        } while(i < 100000);
        
        return null;
    }
};

expose(work);
