import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PizzaList from '../components/PizzaList';
import axios from "axios";

export default function Home({pizzaList}) {
  console.log('pizzaList :>> ', pizzaList);
  return (
    <div className={styles.container}>
      <Head>
        <title>Restaurant</title>
        <meta name="description" content="Best pizza shop in the town " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PizzaList pizzaList={pizzaList}/>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products/");
  console.log('res',res);
  return {
    props:{
      pizzaList: res.data
    }
  }
}