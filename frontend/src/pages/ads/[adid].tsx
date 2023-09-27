import Layout from '@/components/Layout';
import { useRouter } from 'next/router';

const AdDetailComponent = () => {
  const router = useRouter();
  const { adid } = router.query;
  console.log(router.query);

  return (
    <Layout title={`annonce ${adid}`}>
      <p>Display details of with id {adid}</p>
    </Layout>
  );
};

export default AdDetailComponent;
