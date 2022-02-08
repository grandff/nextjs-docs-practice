import fs from "fs";
import path from "path";
import matter from "gray-matter";

// posts 파일이 위치한 디렉토리 정보
const postsDirectory = path.join(process.cwd(), 'posts');

// post data 전송
export function getSortedPostsData(){
	// 파일 이름 가져오기
	const fileNames = fs.readdirSync(postsDirectory);
	const allPostsData = fileNames.map(fileName => {
		// remove md 확장자 하고 file name을 id로
		const id = fileName.replace(/\.md$/, '');
		
		// read markdown file as string
		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, 'utf8');
		
		// metadata section parse를 위해 gray-matter 사용
		const matterResult = matter(fileContents);
		
		// combine data
		return {
			id,
			...matterResult.data
		}		
	})
	
	// sort data
	return allPostsData.sort(({data : a}, {data : b}) => {
		if (a < b) {
			return 1;
		}else if(a > b){
			return -1;
		}else {
			return 0;
		}
	})
}