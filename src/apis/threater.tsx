import { Threater } from "../types/threater";

export default async function getThreaters(): Promise<Threater[]> {
    let threaters: Threater[] = [];
    const backendServerUrl = new URL(`${process.env.REACT_APP_SERVER}:${process.env.REACT_APP_SERVER_PORT}/api/v1/Threater`)
    try {
        const response = await fetch(backendServerUrl, {method: 'GET'});
        if (response.ok) {
            threaters = await response.json();
        }
    } catch(error) {
        console.log(error);
    }

    return threaters;
}