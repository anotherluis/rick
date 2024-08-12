import Image from "next/image";
import Menu from "./components/menu"


export default function Home() {

  const menuItems = [
    { label: 'Inicio', href: '#' },
    { label: 'Personajes', href: '/pages/characters' },
  ];

  return (
    <main>
      <Menu items={menuItems} />
      <div className="flex items-center justify-center min-h-screen">
        <Image
          src="/Rick_and_Morty.png"
          alt="title"
          //className="dark:invert"
          width={2560}
          height={781}
          priority
        />
      </div>
    </main>
  );
}
