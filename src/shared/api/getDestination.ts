import type { Destination } from "@/HomePage/components/types";

export const getDestination = async (setData: (data: Destination[]) => void) => {
    let url = `${import.meta.env.VITE_BASE_URL}trending-destinations`;
    let options = {
        method: "GET",
        headers: {
            Accept: "application/json",
        },
    };
    try {
        let response = await fetch(url, options);
        let result = await response.json();
        setData(result.data)
    } catch (error) {
        return;
    }
};
