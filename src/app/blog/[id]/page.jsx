import { getpost, getpostpage } from "@/services/getpost"
import Link from "next/link"

export async function generateStaticParams() {
    const post = await getpost()

    return post.map(post => 
        {slug: post.id}
    )
}

export default async function PostPage({params: {id}}) {

    const post = await getpostpage(id)
    
    return <>
        <Link href="/blog">Go Back to Blog List</Link>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    </>
}