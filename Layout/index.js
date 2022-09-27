import Link from "next/link";

export const Layout = (props) =>{
    return(
        <div>
            <Link href={`/`}></Link>
            <Link href={`/register`}></Link>
            <Link href={`/login`}></Link>
        </div>
    )
}