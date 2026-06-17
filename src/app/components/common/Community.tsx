import Link from 'next/link';

const Community = () => {
  const choir = "https://res.cloudinary.com/dalylashp/image/upload/v1725101508/choir_ekkuf6.webp";
  const cardimg = "https://res.cloudinary.com/dalylashp/image/upload/v1725101654/minab_vedu6k.jpg";
  const cardimg2 = "https://res.cloudinary.com/dalylashp/image/upload/v1725101907/testimony_umqwcb.webp";

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-0 overflow-hidden bg-zinc-950">
      
      {/* Column 1: Become a Member */}
      <section className="relative group h-[32rem] sm:h-[35rem] md:h-[40rem] w-full overflow-hidden border-b md:border-b-0 md:border-r border-zinc-900/30">
        {/* Hardware-accelerated smooth background zoom */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out scale-100 group-hover:scale-105 filter brightness-[0.85] contrast-[1.05]"
          style={{ backgroundImage: `url(${choir})` }}
        />
        {/* Premium multi-stop cinematic vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-black/20 z-10" />
        
        {/* Content Box */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end items-center text-center z-20 pb-16">
          <span className="text-red-500 font-mono text-xs uppercase tracking-[0.25em] mb-3 block">
            We&apos;re Joyful
          </span>
          <h2 className="text-white font-black text-2xl sm:text-3xl tracking-tight leading-tight uppercase mb-6">
           <Link href="/contact">Become <br /> A Member</Link> 
          </h2>
          
          <Link href="/signup" className="w-full max-w-[200px]">
            <button className="w-full h-12 bg-white hover:bg-red-600 text-zinc-950 hover:text-white text-xs font-bold tracking-widest uppercase rounded transition-all duration-300 transform group-hover:translate-y-[-2px] shadow-xl">
            <Link href="/contact"> JOIN US</Link>  
            </button>
          </Link>
        </div>
      </section>

      {/* Column 2: Leadership Class */}
      <section className="relative group h-[32rem] sm:h-[35rem] md:h-[40rem] w-full overflow-hidden border-b md:border-b-0 md:border-r border-zinc-900/30">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out scale-100 group-hover:scale-105 filter brightness-[0.85] contrast-[1.05]"
          style={{ backgroundImage: `url(${cardimg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-black/20 z-10" />
        
        {/* Content Box */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end items-center text-center z-20 pb-16">
          <span className="text-red-500 font-mono text-xs uppercase tracking-[0.25em] mb-3 block">
            Build Capacity
          </span>
          <h2 className="text-white font-black text-2xl sm:text-3xl tracking-tight leading-tight uppercase mb-6">
            Join Our <br /> Leadership Class
          </h2>
          
          <Link href="/signup" className="w-full max-w-[200px]">
            <button className="w-full h-12 bg-red-600 hover:bg-red-700 text-white text-xs font-bold tracking-widest uppercase rounded transition-all duration-300 transform group-hover:translate-y-[-2px] shadow-xl shadow-red-900/20">
              START HERE
            </button>
          </Link>
        </div>
      </section>

      {/* Column 3: Prayer Session */}
      <section className="relative group h-[32rem] sm:h-[35rem] md:h-[40rem] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out scale-100 group-hover:scale-105 filter brightness-[0.85] contrast-[1.05]"
          style={{ backgroundImage: `url(${cardimg2})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-black/20 z-10" />
        
        {/* Content Box */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end items-center text-center z-20 pb-16">
          <span className="text-red-500 font-mono text-xs uppercase tracking-[0.25em] mb-3 block">
            Prophetic Session
          </span>
          <h2 className="text-white font-black text-2xl sm:text-3xl tracking-tight leading-tight uppercase mb-6">
            Request A <br /> Prayer Session
          </h2>
          
          <Link href="/prayer" className="w-full max-w-[200px]">
            <button className="w-full h-12 bg-zinc-900/90 backdrop-blur-sm hover:bg-white text-white hover:text-zinc-950 border border-zinc-800 hover:border-white text-xs font-bold tracking-widest uppercase rounded transition-all duration-300 transform group-hover:translate-y-[-2px] shadow-xl">
             <Link href="/contact"> LET&apos;S PRAY</Link>   
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Community;