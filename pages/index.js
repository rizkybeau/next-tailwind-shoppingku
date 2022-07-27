import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout title="Home Page">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        Home
      </div>
      <div className="flex mt-10">
        <div>contaner1</div>
        <div>images</div>
      </div>
    </Layout>
  );
}
