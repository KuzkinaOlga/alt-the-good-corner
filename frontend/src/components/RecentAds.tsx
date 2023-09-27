import { useEffect, useState } from 'react';
import AdCard from './AdCard';

export default function RecentAds() {
  const [total, setTotal] = useState(0);

  const ads = [
    {
      link: '/ads/table',
      imgUrl: '/images/table.webp',
      title: 'Table',
      price: 120,
    },
    {
      link: '/ads/dame-jeanne',
      imgUrl: '/images/dame-jeanne.webp',
      title: 'Dame-jeanne',
      price: 75,
    },
    {
      link: '/ads/vide-poche',
      imgUrl: '/images/vide-poche.webp',
      title: 'Vide-poche',
      price: 4,
    },
    {
      link: '/ads/vaisselier',
      imgUrl: '/images/vaisselier.webp',
      title: 'Vaisselier',
      price: 900,
    },
    {
      link: '/ads/bougie',
      imgUrl: '/images/bougie.webp',
      title: 'Bougie',
      price: 8,
    },
    {
      link: '/ads/porte-magazine',
      imgUrl: '/images/porte-magazine.webp',
      title: 'Porte-magazine',
      price: 45,
    },
  ];
  const handlerAddPrice = (price: number) =>
    setTotal((prevTotal) => prevTotal + price);

  return (
    <>
      <h2>Annonces récentes</h2>
      <p>Prix total {total} $</p>
      <section className='recent-ads'>
        {ads.map((ad) => (
          <div key={ad.title}>
            <AdCard {...ad} onAddPrice={handlerAddPrice} />
          </div>
        ))}
      </section>
    </>
  );
}
