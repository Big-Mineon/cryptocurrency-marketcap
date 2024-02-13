import TwitterIcon from "../assets/footer/twitter-icon.svg";
import DiscordIcon from "../assets/footer/discord-icon.svg";

function Footer() {
    return (
        <footer className="text-white py-6 border-t-2 border-green flex justify-evenly">
            <section className="text-sm md:text-lg">
                <p>Copyright &copy; 2022</p>
                <p>All rights reserved.</p>
            </section>
            <section>
                <h2 className="font-semibold text-white text-md md:text-3xl">DataLight</h2>
            </section>
            <section className="flex">
                <a href="https://twitter.com/" target="_blank">
                    <img src={TwitterIcon} alt="twitter-icon" className="hover:scale-110" />
                </a>
                <a href="https://discord.com/" target="_blank">
                    <img src={DiscordIcon} alt="discord-icon" className="hover:scale-110" />
                </a>
            </section>
        </footer>
    );
}

export default Footer;
