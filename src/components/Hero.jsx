import logo from "../assets/logo.svg";

const Hero = () => {
    return (
        <header className="w-full flex flex-col items-center justify-center">
            <nav className="w-full mb-10 pt-3 flex items-center justify-between">
                <img src={logo} alt="logo" className="w-28 object-contain" />
                <button
                    className="black_btn"
                    type="button"
                    onClick={() =>
                        window.open(
                            "https://github.com/DitinAgrawal/summarizer"
                        )
                    }
                >
                    Github
                </button>
            </nav>

            <h1 className="head_text">
                Summarize Articles with <br className="max-md:hidden" />
                <span className="orange_gradient">OpenAI GPT-4</span>
            </h1>
            <h2 className="desc">
                Simplify your reading with Sumz, an open-source article summarizer that transforms lengthy articles into clear and concise summaries
            </h2>
        </header>
    );
};

export default Hero;
