import { getPhotoItem } from "@/services/getpost"
import Image from "next/image"
import Link from "next/link"

export default  async function PhotoPage({params: {id}}) {

    const photoItem = await getPhotoItem(id)
    return <>
    <Link href="/photos">Go Back to Photo List</Link>
    <Image
                                src={photoItem.url}
                                width={600}
                                height={600}
                                alt="Picture of the author"
                                />
    {/* <img src={photoItem.url} alt="photo" /> */}
    </>
}