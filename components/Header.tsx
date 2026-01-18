'use client';

import Link from "next/dist/client/link";
import {Image} from "next/dist/client/image-component";
import {usePathname} from "next/dist/client/components/navigation";
import {cn} from "@/lib/utils";

const Header = () => {
    const pathname = usePathname();
    return (
        <header>
            <div className="main-container inner">
                <Link href="/" >
                    <Image src="logo.svg" alt="CoinPulse logo" width={132} height={40} />
                </Link>

                <nav>
                    <Link href="/" className={cn('nav-link', {
                        'is-active': pathname === '/',
                        'is-home': true,
                    })}>Home</Link>
                    <p>Search Modal</p>
                    <Link href="/coins" className={cn('nav-link', {
                        'is-active': pathname === '/coins',
                    })}>All Coins</Link>
                </nav>
            </div>
        </header>
    )
}
export default Header
