export const getpost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 100
        }
    })
    
    return await  res.json()
}

export const getpostpage = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    
    return await  res.json()
}

export const getPhotos = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos`)

    return await res.json()
}

export const getPhotoItem = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)

    return await res.json()
}