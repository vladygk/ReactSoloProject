import Example from "../src/components/example/Example";
import Header from "../src/components/header/Header";
import Logo from "../src/components/logo/Logo";
import User from "../src/components/user/User";
import Avatar from "../src/components/avatar/Avatar";
import Card from "../src/components/card/Card";
import Trending from "../src/components/trending/Trending";
import Auctions from "../src/components/auctions/Auctions";
import Footer from "../src/components/footer/Footer";
import Step from "../src/components/how/Step";
import How from "../src/components/how/How";
import Featured from "../src/components/featured/Featured";
import Collector from "../src/components/collectors/Collector";
import CollectorColumn from "../src/components/collectors/CollectorColumn";
import TopCollectors from "../src/components/collectors/TopCollectors";
import dataFeatured from "../data/featured.json";
import dataTrending from "../data/trending.json";
import dataUsers from "../data/users.json";
import dataNfts from "../data/nfts.json";
import { useState, useEffect } from "react";
import ProductInfoTitle from "../src/components/product/ProductInfoTitle";

export default function Index() {
  const [featuredCards, setFeaturedCards] = useState([]);
  const [trendingCards, setTrendingCards] = useState([]);
  const [userCards, setUserCards] = useState([]);
  const [nftsCards, setNftsCards] = useState([]);
  useEffect(() => {
    setFeaturedCards(dataFeatured);
    setTrendingCards(dataTrending);
    setUserCards(dataUsers);
    setNftsCards(dataNfts);
  }, []);

  return (
   <>
      <ProductInfoTitle text="TITTTTLE"/>
      </>
  );
}
