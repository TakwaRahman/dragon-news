import MarqueeImport from "react-fast-marquee";


const Marquee = MarqueeImport.default || MarqueeImport;


const LatestNews = ({ data }) => {

    const news = data




    return (
        <div className="flex items-center gap-5 bg-[#F3F3F3] p-3">
            <p className="bg-[#D72050] text-white py-2 px-3">Latest</p>





            <Marquee className="flex gap-5 font-semibold" pauseOnHover={true}>
                {
                    news.map(news => news.title)
                }
            </Marquee>

        </div>
    );
};

export default LatestNews;