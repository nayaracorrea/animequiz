import Head from 'next/head';
import db from '../../../db.json';

export default function Meta({ children, title = 'AnimeQuiz' }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta property="oi:image" content={db.bg} />
      </Head>
      {children}
    </div>
  );
}
