import Banner from "../../Components/Banner/Banner";
import Blogs from "../../Components/Blogs/Blogs";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Support from "../../Components/Support/Support";


const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Banner />
            <Blogs />
            <Support />
            <Footer />
        </div>
    );
};

export default Home;