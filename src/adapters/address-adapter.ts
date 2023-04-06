type Address = {
    address: string,
    latitude: number,
    longitude: number,
}

/**
 * This function will return the best match for given address with coordinates.
 * @param {String} address - address to search.
 * @example
 * const address = "315 Kildaire Farm Rd, Cary, NC 27511";
 * getAddressCoordinate(address);
 * @returns {Promise<void | Address>} A promise that is top matching result for given address with coordinates..
 */
const getAddressCoordinate = (address: string): Promise<void | Address> => 
    fetch(`https://{process.env.HOSTNAME}/api/v1/address/search?address=${address}`, {
        method: 'get',
    })
    .then((resp) => {
        let result: Address = <Address><unknown>resp.json();
        return result;
    })
    .catch((e) => {
        console.log(e);
    });

/**
 * This function will return all adresses that match given argument.
 * @param {String} address - address to search.
 * @example
 * const address = "315 Kild";
 * getAddressAutocomplete(address);
 * @returns {Promise<void | Array<Address>>} A promise that is all adresses matches the given argument.
 */
const getAddressAutocomplete = (address: string): Promise<void | Array<Address>> => 
    fetch(`https://{process.env.HOSTNAME}/api/v1/autocomplete/search?address=${address}`, {
        method: 'get',
    })
    .then((resp) => {
        let result: Array<Address> = <Array<Address>><unknown>resp.json();
        return result;
    })
    .catch((e) => {
        console.log(e);
    });