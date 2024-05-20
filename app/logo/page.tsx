"use client";

import Image from 'next/image';
import { Fragment } from 'react';
import Link from "next/link";
import { Navbar, Button } from "flowbite-react";
import { saveAs } from 'file-saver';

export default function Logo() {
  const downloadImage = () => {
    saveAs('/santa-logo.jpeg', 'santa-logo.jpg') // Put your image URL here.
  }

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
          <Navbar.Link href="/galeria">Galeria</Navbar.Link>
          <Navbar.Link href="/redes">Redes Sociales</Navbar.Link>
          <Navbar.Link href="/logo" active>Logo</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
        <div className="relative flex place-items-center z-[2]">
          <Image
            className="relative dark"
            src="/santa-logo.jpeg"
            alt="Next.js Logo"
            width={300}
            height={50}
            priority
          />
        </div>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="#"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            onClick={downloadImage}
          >
            <Button className={`mb-3 text-2xl font-semibold text-white`}>
              Descagar Logo{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                
              </span>
            </Button>
          </a>
        </div>
      </main>
    </Fragment>
  )
}
