import { useEffect, useState } from 'react';
import AdCard from './AdCard';
import axios from 'axios';
import { Ad } from '@/types';

export default function RecentAds() {
  const [ads, setAds] = useState<Ad[]>([]);

  useEffect(() => {
    axios
      .get<Ad[]>('http://localhost:4000/ads')
      .then((res) => setAds(res.data))
      .catch(console.error);
  }, []);

  const [total, setTotal] = useState(0);

  const handlerAddPrice = (price: number) =>
    setTotal((prevTotal) => prevTotal + price);

  return (
    <>
      <h2>Annonces récentes</h2>
      <p>Prix total {total} $</p>
      <section className='recent-ads'>
        {ads.map((ad) => (
          <AdCard
            key={ad.title}
            ad={ad}
            link={`/ads/$ad.id`}
            onAddPrice={handlerAddPrice}
          />
        ))}
      </section>
    </>
  );
}
