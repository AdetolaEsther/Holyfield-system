"use client";

import { Icon } from "@iconify/react";
import { theme } from "@/app/theme";

type SearchFilterBarProps = {
    placeholder?: string;
    onSearch?: (value: string) => void;
    onFilter?: () => void;
    onAdd?: () => void;
};

export default function SearchFilterBar({
    placeholder = "Search...",
    onSearch,
    onFilter,
    onAdd,
}: SearchFilterBarProps) {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 w-full">
            <div className="flex items-center w-full md:w-145 border border-gray-200 rounded-xl px-9 py-2 shadow-sm">
                <Icon
                    icon="lucide:search"
                    className="text-gray-500"
                    width="18"
                />

                <input
                    type="text"
                    placeholder={placeholder}
                    onChange={(e) => onSearch?.(e.target.value)}
                    className="w-full ml-2 outline-none text-sm"
                />
            </div>

            <div className="flex items-center gap-2">
                <button
                    onClick={onFilter}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition"
                >
                    <Icon icon="lucide:filter" width="18" />
                    <span className="text-sm font-medium">Filter</span>
                </button>

                <button
                    onClick={onAdd}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-white font-medium hover:opacity-90 transition"
                    style={{ background: theme.colors.primary }}
                >
                    <Icon icon="lucide:plus" width="18" />
                    <span className="text-sm">Add New</span>
                </button>
            </div>
        </div>
    );
}
