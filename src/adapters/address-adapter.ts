// Declare Address type for object returned from backend API
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
export const getAddressCoordinate = (address: string): Promise<void | Address> => 
    // Call backend API to search for given address. ${process.env.HOSTNAME} variable is used to avoid hardcoding hostname
    // to allow running it locally or remotly without code changes.
    // Value for HOSTNAME is provided in .env file
    fetch(`https://{process.env.HOSTNAME}/api/v1/address/search?address=${address}`, {
        method: 'get',
    })
    // Parse response from server from json to object and cast it to object of our Address type.
    // Cast to unknown is needed to workaround Typescript limitations of type conversions.
    // Since we get object of unknown type Typescript doesn't allow to cast directly to Address type 
    // and we have to cast to unknown type first
    .then((resp) => {
        let result: Address = <Address><unknown>resp.json();
        return result;
    })
    // If there was an exception then we log it and return Void object
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
export const getAddressAutocomplete = (address: string): Promise<void | Array<Address>> => 
    // Call backend API to get autocomplete suggestions for given address. ${process.env.HOSTNAME} variable is used to avoid hardcoding hostname
    // to allow running it locally or remotly without code changes.
    // Value for HOSTNAME is provided in .env file
    fetch(`https://{process.env.HOSTNAME}/api/v1/autocomplete/search?address=${address}`, {
        method: 'get',
    })
    // Parse response from server from json to object and cast it to list of objects of our Address type.
    // Cast to unknown is needed to workaround Typescript limitations of type conversions.
    // Since we get object of unknown type Typescript doesn't allow to cast directly to Address type 
    // and we have to cast to unknown type first
    .then((resp) => {
        let result: Array<Address> = <Array<Address>><unknown>resp.json();
        return result;
    })
    // If there was an exception then we log it and return Void object
    .catch((e) => {
        console.log(e);
    });