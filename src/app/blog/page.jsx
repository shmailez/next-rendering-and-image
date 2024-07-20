import PostList from "@/components/PostList"
import { Suspense } from "react";

export default function Blog() {
    return <>
        BLOG
        {/* <Suspense fallback={<Loading />}> */}
        <PostList/>
        {/* </Suspense> */}
        
    </>
}

// function Loading() {
//     return <h2>🌀 Loading...</h2>;
//   }