'use client';
import Link from 'next/link';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import logo from '/src/assets/images/logo-large.png';
import Logo from '~/components/Logo';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#131C31]">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-4 ">
        <div className="container flex flex-col sm:flex-row items-center justify-evenly gap-12 px-4 py-4">
          <div className="flex flex-col items-center justify-center gap-12">
            <Image src={logo} alt="logo xplorers.ar" width={600} height={600} />
          </div>
          <div className="flex flex-col items-center justify-center gap-2 mx-4">
            <h1 className="text-1xl font-extrabold text-neutral-50 sm:text-2xl md:text-4xl lg:text-4xl xl:text-5xl">
              Una plataforma para
            </h1>
            <h2 className="gap-10 text-1xl py-4 font-extrabold tracking-tight text-neutral-50 color-linear">
              <Typewriter
                options={{
                  wrapperClassName:
                    'text-5xl font-extrabold  text-neutral-50 sm:text-2xl md:text-5xl lg:text-3xl xl:text-5xl',
                  strings: ['Pagar', 'Conectar', 'Explorar'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
            <div className="container flex flex-col md:flex-row sm:flex-col items-center justify-center gap-4 px-12 py-4">
              <Link href="https://wallet.xplorers.ar/signup" target="_blank">
                <button className="btn btn-linear w-36 h-14 hover-neon:hover">Sign up</button>
              </Link>
              <Link href="https://wallet.xplorers.ar/login" target="_blank">
                <button className="btn btn-border-linear w-36 h-14">Login</button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Link
            className="flex max-w-md flex-row rounded-xl text-neutral-50 hover:text-neutral-50 bg-white/10 p-4 hover:bg-white/20"
            href="https://lawallet.io"
            target="_blank"
          >
            <p className="pr-1 hover:text-neutral-50 font-extrabold">Con el respaldo Open Source de </p>
            <Logo />
          </Link>
        </div>
      </div>
    </main>
  );
}
