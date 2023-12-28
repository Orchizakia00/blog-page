import { FaSearch } from "react-icons/fa";

const Header = () => {
    return (
        <div className="mt-10 text-center">
            <h2 className="text-3xl font-bold mb-3">EliteFin Blog</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <div className="mt-6">
                <div className="relative left-[560px] top-[33px] z-10"><FaSearch /></div>
                <div className="fixed w-full mx-auto"><input type="text" placeholder="       Search Our Blog With Topic or Keyword" className="input input-bordered w-full max-w-md bg-base-200 border-none" /></div>
            </div>
        </div>
    );
};

export default Header;