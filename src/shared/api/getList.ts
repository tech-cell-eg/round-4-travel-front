import type { Cards, Paginate } from "../reuseComponents/types";

export async function getList(
    url: string,
    setData: (data: Cards[]) => void,
    setPaginate: (paginate: Paginate) => void
) {
    let options = {
        method: "GET",
        headers: {
            Accept: "application/json",
        },
    };
    try {
        let response = await fetch(url, options);
        let result = await response.json();
        console.log(result)
        setData(result.data.data);
        setPaginate({
            total_pages: result.data.meta.last_page
        });
    } catch (error) {
        return;
    }


}
