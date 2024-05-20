"use client";

import Image from 'next/image';
import { Fragment } from 'react';
import Link from "next/link";
import { Navbar, Card } from "flowbite-react";

export default function Galeria() {
  return (
    <Fragment>
      <Navbar fluid rounded className='bg-black'>
        <Navbar.Brand as={Link} href="/santa">
          <img src="/santa-logo.jpeg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Santa Muérete</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/santa">Música</Navbar.Link>
          <Navbar.Link href="/galeria" active>Galeria</Navbar.Link>
          <Navbar.Link href="/redes">Redes Sociales</Navbar.Link>
          <Navbar.Link href="/logo">Logo</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
        <Card className="max-w-sm">
          <Image
            className="relative dark"
            src="/gallery/santa_1.jpg"
            alt="Next.js Logo"
            width={200}
            height={300}
            priority
          />
        </Card>
        <Card className="max-w-sm">
          <Image
            className="relative dark"
            src="/gallery/santa_2.jpg"
            alt="Next.js Logo"
            width={200}
            height={300}
            priority
          />
        </Card>
        <Card className="max-w-sm">
          <Image
            className="relative dark"
            src="/gallery/santa_3.jpg"
            alt="Next.js Logo"
            width={200}
            height={300}
            priority
          />
        </Card>
        <Card className="max-w-sm">
          <Image
            className="relative dark"
            src="/gallery/santa_4.jpg"
            alt="Next.js Logo"
            width={200}
            height={300}
            priority
          />
        </Card>
        <Card className="max-w-sm">
          <Image
            className="relative dark"
            src="/gallery/santa_5.jpg"
            alt="Next.js Logo"
            width={200}
            height={300}
            priority
          />
        </Card>
        <Card className="max-w-sm">
          <Image
            className="relative dark"
            src="/gallery/santa_6.jpg"
            alt="Next.js Logo"
            width={200}
            height={300}
            priority
          />
        </Card>
        <Card className="max-w-sm">
          <Image
            className="relative dark"
            src="/gallery/santa_7.jpg"
            alt="Next.js Logo"
            width={200}
            height={300}
            priority
          />
        </Card>
        <Card className="max-w-sm">
          <Image
            className="relative dark"
            src="/gallery/santa_8.jpg"
            alt="Next.js Logo"
            width={200}
            height={300}
            priority
          />
        </Card>
        <Card className="max-w-sm">
          <Image
            className="relative dark"
            src="/gallery/santa_9.jpg"
            alt="Next.js Logo"
            width={200}
            height={300}
            priority
          />
        </Card>
        <Card className="max-w-sm">
          <Image
            className="relative dark"
            src="/gallery/santa_10.jpg"
            alt="Next.js Logo"
            width={200}
            height={300}
            priority
          />
        </Card>
      </main>
    </Fragment>
  )
}
