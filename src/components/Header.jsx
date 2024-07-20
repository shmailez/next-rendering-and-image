import Link from "next/link";

export default function Header() {
    return <>
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/contacts">Contacts</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link href="/photos">Photos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </>
}