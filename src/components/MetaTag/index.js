import Head from 'next/head';
import db from '../../../db.json';

export default function Meta({ children, title = 'AnimeQuiz' }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://animequiz.nayaracorrea.vercel.app/"
        />
        <meta
          property="og:title"
          content="AnimeQuiz - Você sabe tudo sobre animes?"
        />
        <meta
          property="og:description"
          content="Que tal desafiar os seus amigos no melhor quiz de animes?"
        />
        <meta property="og:image" content={db.bg} />
      </Head>

      {children}
    </div>
  );
}
