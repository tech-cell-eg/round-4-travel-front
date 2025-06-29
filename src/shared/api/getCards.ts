import type { Cards } from "@/HomePage/components/types";

export const getCards = async (setData: (data: Cards[]) => void) => {
    let url = `${import.meta.env.VITE_BASE_URL}tours`;
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
    } catch (error) {
        return;
    }
};
