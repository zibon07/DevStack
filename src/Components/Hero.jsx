import banner from "../assets/banner-stack.png"
export default function Hero() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between max-w-300 mx-auto px-6 py-20">
            <div className="max-w-lg text-center md:text-left">
                <h1 className="text-4xl font-extrabold leading-tight text-gray-900">
                    Build Your Ideal
                    <span className="block bg-linear-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h1>

                <p className="mt-4 text-gray-500">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your next project.
                </p>

                <div className="mt-6 flex items-center justify-center md:justify-start gap-4">
                    <button className="px-5 py-2.5 rounded-lg text-white font-medium bg-linear-to-r from-orange-500 to-pink-500 hover:opacity-90">
                        Explore Technologies
                    </button>
                    <button className="px-5 py-2.5 rounded-lg font-medium border border-gray-300 text-gray-700 hover:bg-gray-50">
                        Learn More
                    </button>
                </div>
            </div>

            <div className="mt-10 md:mt-0">
                <img src={banner} className="w-100"/>
            </div>
        </section>
    );
}