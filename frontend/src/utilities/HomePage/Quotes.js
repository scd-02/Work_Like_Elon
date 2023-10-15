import { useEffect, useState } from "react";

const Quotes = () => {
  const category = [
    "success",
    "learning",
    "knowledge",
    "leadership",
    "inspirational",
    "health",
    "happiness",
    "intelligence",
  ];

  let random = Math.floor(Math.random() * category.length);

  const [author, setAuthor] = useState("");
  const [quote, setQuote] = useState("");

  const url =
    "https://api.api-ninjas.com/v1/quotes?category=" + category[random];

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "X-Api-Key": "",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAuthor(data[0].author);
        setQuote(data[0].quote);
        console.log(author, quote);
      })
      .catch((error) => console.log(error));
  }, []);

  return { author, quote };
};

export default Quotes;
