import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import { MdxComponentsProvider } from '@/context/mdxContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MdxComponentsProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MdxComponentsProvider>
  );
}
