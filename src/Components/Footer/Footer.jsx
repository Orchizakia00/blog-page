

const Footer = () => {
    return (
        <footer className="footer items-center p-4 bg-blue-500 text-neutral-content lg:px-32">
            <aside className="items-center grid-flow-col">
                <p>© 2023 EliteFin Inc. All right reserved</p>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end cursor-pointer">
                <a>Delete Account</a>
                <a>Terms of Service</a>
                <a>Cancelation and Refund Policy</a>
                <a>Privacy Policy</a>
            </nav>
        </footer>
    );
};

export default Footer;