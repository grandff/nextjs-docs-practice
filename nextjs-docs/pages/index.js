import Link from "next/link";

export default function index(){
	return (
	<div>
		<h1 className="text-3xl font-bold underline">
			메인페이지
			Read{' '}
			<Link href="/posts/first-post">
				<a>this page!</a>
			</Link>
		</h1>
	</div>
	);
}