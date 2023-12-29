import { FaHeadphones } from "react-icons/fa";

const Support = () => {
    return (
        <section className="footer py-20 flex justify-between bg-gray-800 text-neutral-content pl-32">
            <div className="flex-1">
                <p className="text-xl font-bold"><span className="text-blue-500">Elite</span>Fin</p>
                <p className="text-2xl font-bold max-w-fit">Get started to grow up your business <br /> with personal leads manager.</p>
                <p>EliteFin, 2023.</p>
            </div>
            <div className="flex flex-1 items-center ml-[500px]">
                <button className="btn bg-blue-500 border-none rounded-full px-6 text-white">TRY ELITEFIN</button>
                <button className="btn bg-transparent rounded-full px-6 text-white"><FaHeadphones /> SUPPORT</button>
            </div>
        </section>
    );
};

export default Support;