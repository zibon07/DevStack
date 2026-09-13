export default function Footer() {
    return (
        <footer className="border-t max-w-300 mt-20 mx-auto    border-gray-200">
            <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="col-span-2 md:col-span-1">
                    <div className="flex items-center gap-2">
                        <span className="w-7 h-7 flex items-center justify-center rounded-md bg-pink-600 text-white text-xs font-bold">
                            DS
                        </span>
                        <span className="font-bold text-gray-900">
                            Dev <span className="text-pink-600">Stack</span>
                        </span>
                    </div>
                    <p className="mt-3 text-sm text-gray-500">
                        Curated tools, technologies, and resources for developers building modern software.
                    </p>
                    <div className="mt-4 flex gap-4 text-sm text-gray-600">
                        <a href="#">GitHub</a>
                        <a href="#">Twitter</a>
                        <a href="#">LinkedIn</a>
                    </div>
                </div>

                <div>
                    <h4 className="text-xs font-semibold text-gray-900 tracking-wide">PRODUCT</h4>
                    <ul className="mt-3 space-y-2 text-sm text-gray-500">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Technologies</a></li>
                        <li><a href="#">Projects</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xs font-semibold text-gray-900 tracking-wide">COMPANY</h4>
                    <ul className="mt-3 space-y-2 text-sm text-gray-500">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xs font-semibold text-gray-900 tracking-wide">LEGAL</h4>
                    <ul className="mt-3 space-y-2 text-sm text-gray-500">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-200 px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-2 max-w-6xl mx-auto text-xs text-gray-400">
                <span>© 2026 Dev Stack. All rights reserved.</span>
                <div className="flex gap-4">
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                </div>
            </div>
        </footer>
    );
}