import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md ">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center ">
        <Link href="/" className="text-2xl font-bold ">
          Meu blog
        </Link>

        <nav className="space-x-6 ">
          <Link href="/" className="hover:text-blue-300 ">
            Home
          </Link>
          <Link href="/blog" className="hover:text-blue-300 ">
            Blog
          </Link>
          <Link href="/contato" className="hover:text-blue-300 ">
            Contato
          </Link>
          <Link href="/consulta-cep" className="hover:text-blue-300 ">
            Consulta CEP
          </Link>
        </nav>
      </div>
    </header>
  );
}
