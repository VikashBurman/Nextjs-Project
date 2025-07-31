import Link from "next/link";

const Navbar = () =>{
  return(
    <>
    <nav>
        <ul className="flex justify-center space-x-2">
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/contact">Contact</Link>
            </li>
            <li>
                <Link href="/services">Service</Link>
            </li>
            <li>
                <Link href="/clientcomponet">ClientComponent</Link>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar;