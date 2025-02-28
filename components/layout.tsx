import useSWR from 'swr';
import Navbar from './navbar';
import Footer from './footer';

const fetcher = (url: string) => fetch(url).then(res => res.json());
interface LayoutProps {
  children: React.ReactNode;
}
interface NavigationData {
  links: { href: string, label: string }[];
}
export default function Layout({ children }: LayoutProps) {
  const { data, error } = useSWR<NavigationData>('/api/navigation', fetcher);

  if (error) return <div>Failed to load navigation data.</div>;
  if (!data) return <div>Loading navigation...</div>;

  return (
    <>
      <Navbar links={data.links} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
