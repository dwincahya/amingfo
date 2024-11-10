import Link from "next/link"
import InputSearch from "./InputSearch"

const Navbar = () => {
    return (
        <header className="bg-color-accent">
        <div className="flex md:flex-row flex-col gap-2 md:items-center justify-between p-4">
            <Link href="/" className="font-bold text-2xl text-white">Amingfo</Link>
            <InputSearch />
        </div>
        </header>
    )
}

export default Navbar