import Layout from "../../components/layout";
import {getAllPostIds, getPostData} from "../../lib/posts";

// get static paths
export async function getStaticPaths(){	
	const paths = getAllPostIds()
	console.log('path : ', paths)
	return {
		paths,
		fallback : false
	}
}

// get data
export async function getStaticProps({params}){	
	console.log(params)
	const postData = getPostData(params.id)
	return {
		props : {
			postData
		}
	}
}

export default function Post({postData}){
	return (
		<Layout>
			{postData.title}
			<br/>
			{postData.id}
			<br/>
			{postData.date}
		</Layout>
	)
}