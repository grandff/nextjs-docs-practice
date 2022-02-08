import Head from "next/head";
import Layout, {siteTitle} from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home(){
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p className="text-lg font-bold text-center">[Your Self Introduction]</p>
				<p>
					(This is a simple website - you'll be building a site like this one)
					<a href="https://nextjs.org/learn">out Next.js tutorial</a>
				</p>
			</section>
		</Layout>
	);
}