import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const sections = ["world", "science"];

  const [articles, setArticles] = useState();
  const [term, setTerm] = useState("world");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      // try {
      //   axios
      //     .get(
      //       `https://api.nytimes.com/svc/topstories/v2/${term}.json?api-key=FQFs37vWPCMAGNuUklUrliBG5Gw0Jhpg`
      //     )
      //     .then((resp) => {
      //       console.log("gh", resp.data.results);
      //       setArticles(resp.data.results.articles);
      //       console.log("ji", articles);
      //     });
      // } catch (error) {
      //   console.log(error);
      // }
      try {
        //way1
        // axios
        //   .get(
        //     `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=cga0pKDQwHAzU7FScn7QFrMcsm5f37ff`
        //   )
        //   .then((resp) => {
        //     console.log("gh",resp.response.docs);
        //     setArticles(resp.response.docs.articles);
        //     // console.log("ji", articles);
        //   });

        //way2
        const res = await fetch(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=cga0pKDQwHAzU7FScn7QFrMcsm5f37ff`
        );
        const articles = await res.json();
        setArticles(articles.response.docs);
        console.log(articles.response.docs);

        
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticles();
  }, [term]);
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-18">
            <form
              style={{
                marginTop: "20px",
              }}
              className="p-4 bg-light border"
            >
              <label>select category for top news:</label>
              <select
                style={{
                  width: "-webkit-fill-available",
                }}
                onChange={(e) => setTerm(e.target.value)}
              >
                <option>{sections[0]}</option>
                <option>{sections[1]}</option>
              </select>
            </form>
          </div>
          <h1>Top news</h1>
          {articles &&
            articles.map((article) => {
              const {
                abstract,
                source,
                headline: { main },
                byline: { original },
                lead_paragraph,
                news_desk,
                section_name,
                web_url,
                _id,
                word_count,
              } = article;
              return (
                <ol key={_id}>
                  <h3>{main}</h3>
                  <p>{abstract}</p>
                </ol>
              );
            })}
        </div>
      </div>
    </>
  );
}
