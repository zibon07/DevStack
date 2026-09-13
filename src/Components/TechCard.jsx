export default function TechCard() {
    return (
        <div className="border border-gray-200 space-y-5 max-w-70 h-[285px] rounded-xl p-4 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-blue-50 text-lg">
                    ⚛️
                </div>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-pink-100 text-pink-600">
                    Trending
                </span>
            </div>

            <h3 className="font-semibold text-gray-900">React</h3>
            <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                A JavaScript library for building fast and interactive user interfaces using reusable components.
            </p>

            <div className="mt-3 flex items-center justify-between">
                <div className="flex gap-2">
                    <span className="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-600">
                        Frontend
                    </span>
                    <span className="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-600">
                        Beginner-friendly
                    </span>
                </div>
                <span className="text-xs text-gray-500 flex items-center gap-1">
                    ⭐ 4.8
                </span>
            </div>

            <button className="mt-4 w-full py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800">
                Add to Stack
            </button>
        </div>
    );
}