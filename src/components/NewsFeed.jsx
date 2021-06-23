import useEffectForStatusUpdates from "../hooks/useEffectForStatusUpdates";
import NewsCard from "./NewsCard";

export default function NewsFeed() {  
  const [newsList, setNewsList] = useEffectForStatusUpdates()

  return (
    <ul className="newsfeed">
      {newsList.map((newsItem) => (
        <li>
          <NewsCard newsItem={newsItem} />
        </li>
      ))}
    </ul>
  );
}
