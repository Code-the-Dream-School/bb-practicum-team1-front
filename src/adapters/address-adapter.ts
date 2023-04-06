type Address = {
    address: string,
    latitude: number,
    longitude: number,
}

// Typescript Adapter for getAddressCoordinate route
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

    // Typescript Adapter for getAddressAutocomplete route
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