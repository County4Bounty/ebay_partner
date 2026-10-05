"use client";

import { useLoading } from "@/app/context/loading";

const useIsLoading = (bool) => {
    if (typeof window !== "undefined") {
        localStorage.setItem('isLoading', bool);
        window.dispatchEvent(new Event("storage"));
    }
}

export default useIsLoading;