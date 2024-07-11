export declare function didUserReject(error: any): boolean;
/**
 * This is hacking out the revert reason from the ethers provider thrown error however it can.
 * This object seems to be undocumented by ethers.
 * @param error - An error from the ethers provider
 */
export declare function swapErrorToUserReadableMessage(error: any): string;
