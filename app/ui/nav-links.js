'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Author', href: '/author', 
//   icon: HomeIcon
  },
  {
    name: 'Assessment',
    href: '/assessment',
    // icon: DocumentDuplicateIcon,
  },
  { 
      name: 'Report',
    href: '/reports' ,
//    icon: Icon
},
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {

        return (
          <Link className={
            clsx("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-60 p-3 text-md font-light hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                'bg-blue-100 text-blue-600': link.href === pathname
              }
            )
          }
            key={link.name}
            href={link.href}
          >
            {/* <LinkIcon className="w-6" /> */}
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
