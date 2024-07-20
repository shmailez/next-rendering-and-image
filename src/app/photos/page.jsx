import { getPhotos } from "@/services/getpost"
import Image from "next/image"
import Link from "next/link"

export default async function Photos() {

    const PhotoList = await getPhotos()
    console.log()
    return <>
        Photos
        <ul>
            {
                PhotoList.map(photo => 
                    <li key={photo.id}>
                        <p>{photo.title}</p>
                        <Link href={`/photos/${photo.id}`}>
                            {/* <img src={photo.thumbnailUrl} alt="photo" /> */}
                            <Image
                                src={photo.thumbnailUrl}
                                width={150}
                                height={150}
                                alt="Picture of the author"
                                />
                        </Link>
                    </li>
                )
            }
        </ul>
    </>
}