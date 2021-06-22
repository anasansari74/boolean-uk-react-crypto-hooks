import { useEffect, useState } from "react";
import { STATUS_UPDATES } from "../constants";

export default function useEffectForStatusUpdates(){
    const [newsList, setNewsList] = useState([]);
    
    useEffect(
        () =>
          fetch(STATUS_UPDATES)
            .then((resp) => resp.json())
            .then(({ status_updates }) => setNewsList(status_updates)),
        [setNewsList]
      );

    return [newsList, setNewsList]
}