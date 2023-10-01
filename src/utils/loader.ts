import axios from "axios";

export const createLoader = <T>(url: string) => async (): Promise<T> => {
    try {

        return (await axios.get<T>(`${process.env.REACT_APP_API_API_URL}/www/website/${url}`)).data;

    } catch (e: any) {

        if (e.response.status === 404) {
            throw new Response(e.response.statusText, { status: e.response.status })
        }

        throw new Response("Internal Error", { status: 500 });

    }
}