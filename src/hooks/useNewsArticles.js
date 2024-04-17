import { useState, useEffect } from "react";

const API_KEY = "a5bcccaae83749599f7836772a7d6452";

async function getHeadlines(search) {
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apikey=${API_KEY}&q=${search}`;

  const res = await fetch(url);
  const data = await res.json();

  return data.articles.map((x) => ({ title: x.title, url: x.url }));
}

export function useNewsArticles(search) {
  const [loading, setLoading] = useState(true);
  const [headlines, setHeadlines] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setHeadlines(await getHeadlines(search));
      setLoading(false);
    })();
  }, [search]);

  return { loading, headlines, error };
}
