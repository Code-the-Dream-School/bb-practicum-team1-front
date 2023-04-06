type Address = {
    address: string,
    latitude: number,
    longitude: number,
}

const getAddressCoordinate = (address: string): Promise<Address> =>
    fetch(`https://{process.env.HOSTNAME}/api/v1/address/search?address=${address}`, {
        method: 'get',
    })
    .then((resp) => {
        let result: Address = <Address><unknown>resp.json();
        return result;
    });
