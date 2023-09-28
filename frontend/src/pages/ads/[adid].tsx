import Layout from '@/components/Layout';
import { Ad } from '@/types';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const AdDetailComponent = () => {
  const router = useRouter();
  const { adId } = router.query;

  const [ad, setAd] = useState<Ad>();

  useEffect(() => {
    axios
      .get<Ad>(`http://localhost:4000/ads/${adId}`)
      .then((res) => setAd(res.data))
      .catch(console.error);
  }, [adId]);

  return (
    <Layout title={`annonce ${adId}`}>
      {typeof ad === 'undefined' ? (
        'Chargement...'
      ) : (
        <div>
          <h1>{ad.title}</h1>
          <p>postee par </p>
          <p>a recuperer a {ad.location}</p>
          <img src={ad.picture} alt={ad.title} />
          <p>{ad.description}</p>
        </div>
      )}
      <h1>Display details of with id {adId}</h1>
    </Layout>
  );
};

export default AdDetailComponent;
