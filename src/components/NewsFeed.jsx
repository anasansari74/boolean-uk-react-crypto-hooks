import useEffectForCryptoList from "../hooks/useEffectForCryptoList";
import NewsCard from "./NewsCard";

export default function NewsFeed() {  
  const [newsList, setNewsList] = useEffectForCryptoList()

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
