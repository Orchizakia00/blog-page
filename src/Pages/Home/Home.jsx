import Banner from "../../Components/Banner/Banner";
import Blogs from "../../Components/Blogs/Blogs";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Banner />
            <Blogs />
        </div>
    );
};

export default Home;