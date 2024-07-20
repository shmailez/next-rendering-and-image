import { getpost } from "@/services/getpost"
import Link from "next/link"

export default async function PostList() {

    const list = await getpost()


    return <>
    <ul>
        {list.map(post => 
            <li key={post.id}>
                <Link href={`blog/${post.id}`}> {post.title}</Link>
               </li>
        )
        }
    </ul>
    </>
}