import Layout from '@/components/Layout';
import { Ad } from '@/types';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AdCard from '@/components/AdCard';

const Search = () => {
  const router = useRouter();
  const [ads, setAds] = useState<Ad[]>([]);

  console.log(router.query.title);

  useEffect(() => {
    axios
      .get<Ad[]>(`http://localhost:4000/ads?title=${router.query.title || ''}`)
      .then((res) => setAds(res.data))
      .catch(console.error);
  }, [router.query.title]);

  return (
    <Layout title='recherche - TGC'>
      <h1>Resultats de la recherche</h1>
      {ads.map((ad) => (
        <AdCard key={ad.title} ad={ad} link={`/ads/$ad.id`} />
      ))}
    </Layout>
  );
};

export default Search;
