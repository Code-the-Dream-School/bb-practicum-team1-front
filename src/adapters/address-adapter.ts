import { fetchAPIData } from "../util/fetch";

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

export const getAddressCoordinate = async(address: string): Promise<void | Address> => {
    // Call backend API to search for given address. ${process.env.HOSTNAME} variable is used to avoid hardcoding hostname
    // to allow running it locally or remotly without code changes.
    // Value for HOSTNAME is provided in .env file
    const url = `http://localhost:8000/api/v1/address/search?address=${address}`
    const data = await fetchAPIData(url, 'GET', undefined)
    return data
}

/**
 * This function will return all adresses that match given argument.
 * @param {String} address - address to search.
 * @example
 * const address = "315 Kild";
 * getAddressAutocomplete(address);
 * @returns {Promise<void | Array<Address>>} A promise that is all adresses matches the given argument.
 */
export const getAddressAutocomplete = async(address: string): Promise<void | Array<Address>> => {
    // Call backend API to get autocomplete suggestions for given address. ${process.env.HOSTNAME} variable is used to avoid hardcoding hostname
    // to allow running it locally or remotly without code changes.
    // Value for HOSTNAME is provided in .env file
    const url = `http://localhost:8000/api/v1/address/search?address=${address}`
    const data = await fetchAPIData(url, 'GET', undefined)
    return data
}
