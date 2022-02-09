import Head from "next/head";
import Layout, {siteTitle} from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import {getSortedPostsData} from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

// data post call
export async function getStaticProps(){
	const allPostsData = getSortedPostsData();
	return {
		props : {
			allPostsData
		}
	}
}

// getstaticprops를 통해 가져온 데이터를 매개변수로 받아올 수 있음
export default function Home({allPostsData}){
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
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({id, date, title}) => (						
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/posts/${id}`}>
								<a>{title}</a>
							</Link>						
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small>						
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}