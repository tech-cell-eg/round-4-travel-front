import type { Cards, Paginate } from "../reuseComponents/types";

export async function getList(
    url: string,
    setData: (data: Cards[]) => void,
    setPaginate: (paginate: Paginate) => void,
    setDataItems?: (data: Cards[]) => void,
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
        setData(result.data.data);
        if (setDataItems) {
            setDataItems(result.data.data)
        }
        setPaginate({
            total_pages: result.data.meta.last_page
        });
    } catch (error) {
        return;
    }


}
