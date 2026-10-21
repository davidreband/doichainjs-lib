/**
 * bitcoin address decode and encode tools, include base58、bech32 and output script
 *
 * networks support bitcoin、bitcoin testnet and bitcoin regtest
 *
 * addresses support P2PKH、P2SH、P2WPKH、P2WSH、P2TR and so on
 *
 * @packageDocumentation
 */
import { Network } from './networks.js';
/** base58check decode result */
export interface Base58CheckResult {
    /** address hash */
    hash: Uint8Array;
    /** address version: 0x00 for P2PKH, 0x05 for P2SH */
    version: number;
}
/** bech32 decode result */
export interface Bech32Result {
    /** address version: 0x00 for P2WPKH、P2WSH, 0x01 for P2TR*/
    version: number;
    /** address prefix: bc for P2WPKH、P2WSH、P2TR */
    prefix: string;
    /** address data：20 bytes for P2WPKH, 32 bytes for P2WSH、P2TR */
    data: Uint8Array;
}
/**
 * Decodes a base58check encoded Bitcoin address and returns the version and hash.
 *
 * @param address - The base58check encoded Bitcoin address to decode.
 * @returns An object containing the version and hash of the decoded address.
 * @throws {TypeError} If the address is too short or too long.
 */
export declare function fromBase58Check(address: string): Base58CheckResult;
/**
 * Converts a Bech32 or Bech32m encoded address to its corresponding data representation.
 * @param address - The Bech32 or Bech32m encoded address.
 * @returns An object containing the version, prefix, and data of the address.
 * @throws {TypeError} If the address uses the wrong encoding.
 */
export declare function fromBech32(address: string): Bech32Result;
/**
 * Converts a hash to a Base58Check-encoded string.
 * @param hash - The hash to be encoded.
 * @param version - The version byte to be prepended to the encoded string.
 * @returns The Base58Check-encoded string.
 */
export declare function toBase58Check(hash: Uint8Array, version: number): string;
/**
 * Converts a buffer to a Bech32 or Bech32m encoded string.
 * @param data - The buffer to be encoded.
 * @param version - The version number to be used in the encoding.
 * @param prefix - The prefix string to be used in the encoding.
 * @returns The Bech32 or Bech32m encoded string.
 */
export declare function toBech32(data: Uint8Array, version: number, prefix: string): string;
/**
 * Returns the address an output script pays to.
 *
 * Standard scripts (P2PKH, P2SH, P2WPKH, P2WSH, P2TR and future segwit
 * versions) map to their address. A name output maps to the address of the
 * owner's script behind its name prefix, see {@link nameScriptOwner}.
 *
 * @param output - The output script.
 * @param network - The network whose address prefixes to use. Defaults to Bitcoin.
 * @returns The address.
 * @throws {Error} If the script does not pay to an address.
 */
export declare function fromOutputScript(output: Uint8Array, network?: Network): string;
/**
 * Returns the output script that pays to an address.
 *
 * @param address - A base58check or bech32/bech32m address.
 * @param network - The network the address must belong to. Defaults to Bitcoin.
 * @returns The output script.
 * @throws {Error} If the address is invalid or belongs to another network.
 */
export declare function toOutputScript(address: string, network?: Network): Uint8Array;
