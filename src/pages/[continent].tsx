import { useRouter } from 'next/router';
import { Header } from '../components/Header';

export default function Continent() {
  const router = useRouter();

  const { continent } = router.query;

  return (
    <Header />
  );
}
