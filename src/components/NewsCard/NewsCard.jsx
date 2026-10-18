import { FaEye, FaStar, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
    const {
        title,
        author,
        thumbnail_url,
        details,
        rating,
        total_view,
        id
    } = news;

    return (
        <div className="card bg-base-100 shadow-md ">

            {/* Header */}
            <div className="flex justify-between items-center bg-base-200 p-4 rounded-t-xl">
                <div className="flex items-center gap-3">
                    <img
                        src={author.img}
                        alt=""
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <h2 className="font-semibold text-sm">{author.name}</h2>
                        <p className="text-xs text-gray-500">
                            {new Date(news.author.published_date).toDateString()}
                        </p>
                    </div>
                </div>

                <div className="flex gap-3 text-gray-500">
                    <FaRegBookmark className="cursor-pointer" />
                    <FaShareAlt className="cursor-pointer" />
                </div>
            </div>

            {/* Title */}
            <div className="p-4">
                <h2 className="font-bold text-lg">{title}</h2>
            </div>

            {/* Image */}
            <figure className="px-4">
                <img
                    src={thumbnail_url}
                    alt=""
                    className="rounded-xl w-full"
                />
            </figure>

            {/* Details */}
            <div className="p-4 text-sm text-gray-600">
                {
                    details.length > 150
                        ? <>
                            {details.slice(0, 150)}...
                            <Link to={`/news-details/${id}`} className="text-orange-500 cursor-pointer ml-1">
                                Read More
                            </Link>
                        </>
                        : details
                }
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center p-4 border-t">

                {/* Rating */}
                <div className="flex items-center gap-2 text-orange-500">
                    {
                        [...Array(rating.number)].map((_, i) => (
                            <FaStar key={i} />
                        ))
                    }
                    <span className="text-gray-600 ml-1">{rating.number}</span>
                </div>

                {/* Views */}
                <div className="flex items-center gap-2 text-gray-500">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;