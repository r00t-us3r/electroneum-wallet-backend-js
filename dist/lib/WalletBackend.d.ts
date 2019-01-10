/// <reference types="node" />
import * as EventEmitter from 'events';
import { IDaemon } from './IDaemon';
import { WalletBackendJSON } from './JsonSerialization';
import { WalletError } from './WalletError';
export declare class WalletBackend extends EventEmitter {
    static openWalletFromFile(daemon: IDaemon, filename: string, password: string): WalletBackend | WalletError;
    static loadWalletFromJSON(daemon: IDaemon, json: string): WalletBackend | WalletError;
    static importWalletFromSeed(daemon: IDaemon, scanHeight: number, mnemonicSeed: string): WalletBackend | WalletError;
    static importWalletFromKeys(daemon: IDaemon, scanHeight: number, privateViewKey: string, privateSpendKey: string): WalletBackend | WalletError;
    static importViewWallet(daemon: IDaemon, scanHeight: number, privateViewKey: string, address: string): WalletBackend | WalletError;
    static createWallet(daemon: IDaemon): WalletBackend;
    private static reviver;
    private static fromJSON;
    private readonly subWallets;
    private daemon;
    private walletSynchronizer;
    private mainLoopExecutor;
    private synced;
    constructor(daemon: IDaemon, address: string, scanHeight: number, newWallet: boolean, privateViewKey: string, privateSpendKey?: string);
    init(): Promise<void>;
    start(): void;
    stop(): void;
    mainLoop(): Promise<void>;
    toJSON(): WalletBackendJSON;
    initAfterLoad(daemon: IDaemon): void;
    getNodeFee(): [string, number];
    getPrivateViewKey(): string;
    getSpendKeys(address: string): WalletError | [string, string];
    getPrimaryAddressPrivateKeys(): [string, string];
    getMnemonicSeed(): WalletError | string;
    getMnemonicSeedForAddress(address: string): WalletError | string;
    getPrimaryAddress(): string;
}