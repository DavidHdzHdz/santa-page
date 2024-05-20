"use client";

import Image from 'next/image';
import { Fragment } from 'react';
import Link from "next/link";
import { Navbar } from "flowbite-react";

export default function Redes() {
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
          <Navbar.Link href="/redes" active>Redes Sociales</Navbar.Link>
          <Navbar.Link href="/logo">Logo</Navbar.Link>
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
            href="https://www.instagram.com/santa.muerete/"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold text-white`}>
              Instagram{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </a>

          <a
            href="https://www.tiktok.com/@santa.muerete?lang=en"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold text-white`}>
              TikTok{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </a>

          <a
            href="https://www.facebook.com/4322ro"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold text-white`}>
              Facebook{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </a>
          
        </div>
      </main>
    </Fragment>
  )
}
