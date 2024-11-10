import Link from "next/link"

const Navbar = () => {
    return (
        <header className="bg-blue-800">
        <div className="flex md:flex-row flex-col gap-2 justify-between p-4">
            <Link href="/" className="font-bold text-2xl text-white">Amingfo</Link>
            <input placeholder="Cari Anime" className="" />
        </div>
        </header>
    )
}

export default Navbar