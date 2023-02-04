"use client"

import { Toaster } from "react-hot-toast";

const CustomToaster = () => {
    return (
        <Toaster
            toastOptions={{
                className: "border-2 rounded-sm border-primary-dark dark:border-primary-light bg-secondary-light dark:bg-secondary-dark font-quicksand text-lg tracking-wider text-primary-dark dark:text-primary-light font-bold",
                success: {
                    className: "border-2 rounded-sm bg-secondary-light dark:bg-secondary-dark font-quicksand text-lg tracking-wider text-primary-dark dark:text-primary-light font-bold border-primary-green"
                },
                error: {
                    className: "border-2 rounded-sm bg-secondary-light dark:bg-secondary-dark font-quicksand text-lg tracking-wider text-primary-dark dark:text-primary-light font-bold border-primary-red"
                }
            }}
        />
    )
}

export default CustomToaster;
