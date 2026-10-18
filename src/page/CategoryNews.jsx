import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard/NewsCard";

const CategoryNews = () => {

    const { id } = useParams()
    const data = useLoaderData()

    const [categoryNews, setCategoryNews] = useState([])

    // console.log(id, data)



    useEffect(() => {

        if (id == "0") {
            setCategoryNews(data)
            return
        }
        else if (id == "1") {
            const filteredNews = data.filter(news => news.others.is_today_pick == true)
            setCategoryNews(filteredNews)
        }
        else {
            const filteredNews = data.filter(news => news.category_id == id)

            setCategoryNews(filteredNews)
        }

    }, [data, id])

    return (
        <div>
            <div className="font-bold mb-5">Dragon News Home</div>

            <div className="grid grid-cols-1 gap-5">
                {categoryNews.map(news=> <NewsCard key={news.id} news={news}></NewsCard>)}
            </div>
        </div>
    );
};

export default CategoryNews;