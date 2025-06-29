import type { Testimonials } from "@/HomePage/components/types";

export const getTestimonials = async (setData: (data: Testimonials[]) => void) => {
    let url = `${import.meta.env.VITE_BASE_URL}testimonials`;
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
