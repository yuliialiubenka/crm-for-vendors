import React from "react";

export interface LoadingProps {};

export default function Loading({}: LoadingProps) {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-opacity-50 bg-gray-200 z-50">
            <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"></div>
        </div>
    )
};
