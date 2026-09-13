import StackSidebar from "./StackSidebar";
import TechCard from "./TechCard";

const TechnologySection = () => {
    return (
        <section className="max-w-300 mx-auto">
            <div className=" mx-auto mb-10">
                <h2 className="text-3xl font-extrabold text-gray-900">
                    Explore the{" "}
                    <span className="bg-linear-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
                        Technologies
                    </span>
                </h2>
                <p className="mt-2 text-gray-500">
                    Pick a technology per category to build your ideal stack.
                </p>
            </div>
            <div className="flex flex-col md:flex-row  gap-6">
                <div className="grid grid-cols  md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
                    <TechCard></TechCard>
                    <TechCard></TechCard>
                    <TechCard></TechCard>
                    <TechCard></TechCard>
                    <TechCard></TechCard>
                    <TechCard></TechCard>
                    <TechCard></TechCard>
                </div>
                <div>
                    <StackSidebar></StackSidebar>
                </div>
            </div>
        </section>
    );
};

export default TechnologySection;