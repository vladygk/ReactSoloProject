import React,{useState,useEffect} from 'react'
import Header from "../../../src/components/header/Header"
import Footer from "../../../src/components/footer/Footer"
import ProductContainer from '../../../src/components/product/ProductContainer'
import { useRouter } from 'next/router'
import dataNfts from "../data/nfts.json";

export default function Product() {

    const router = useRouter();
    const {id} = router.query;
    const [nftsCards, setNftsCards] = useState([]);
    const [productData,setProductData] = useState();
    useEffect(()=>{
        setNftsCards(dataNfts);
        
    },[]);

    useEffect(()=>{
        setProductData(nftsCards.find(x=>x.id==id));
    },[nftsCards])


  return (
    <div>
        <Header/>
        <ProductContainer name={productData.name} 
                          bids={productData.bids}
                          source={productData.source}
                          currency={productData.currency}
                          price={productData.price}
                          likes={productData.likes}
                          owner={productData.owner}
                          details={productData.details}
                          auction_end={productData.auction_end}
                          isLive={productData.isLive}
                          buyAmount={productData.buyAmount}
                          bidAmount={productData.bidAmount}
                          onBid={productData.onBid}
                          onBuy={productData.onBuy}
                          onTimeEnd={productData.onTimeEnd} />
        <Footer/>
    </div>
  )
}


