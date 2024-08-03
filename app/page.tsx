import { berkshire_swash } from "./ui/fonts";
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-24 mx-15 h-full">
      <div className="w-4/5 h-1/3">
        <Image 
          src="/theBeadShopHTXplaceholderBanner.svg"
          height={0}
          width={0}
          style={{ width: "100%", height: "100%"}}
          alt="image of styled text reading: The Bead Shop HTX"
        />
      </div>
      <div className={`w-4/5 h-96 bg-[url('/Beadsw-oBkgrd.gif')] bg-center bg-no-repeat bg-cover bg-[length:80%] flex flex-col items-center 2xl:h-[38rem] xl:h-[30rem] xs:h-[8rem]`}>
        <h3 className={`${berkshire_swash.className} antialiased text-4xl p-10 xs:text-xl`}>Coming Soon</h3>
      </div>
      <div className="text-white font-medium px-15 flex flex-col items-center xs:text-sm">
        <p className="pt-10 text-center"> We&apos;re working on opening up this site.</p>
        <p className="p-5 text-center">Until then please feel free to reach out for information and repair help at:</p>
        <p>Email: <span className="text-teal-400">help@thebeadshophtx.com</span></p>
      </div>
      
    </main>
  );
}
