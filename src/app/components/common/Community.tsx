
import Link from 'next/link';

const Community = () => {

  const choir = "https://res.cloudinary.com/dalylashp/image/upload/v1725101508/choir_ekkuf6.webp"
  const cardimg = "https://res.cloudinary.com/dalylashp/image/upload/v1725101654/minab_vedu6k.jpg"
 const cardimg2 = "https://res.cloudinary.com/dalylashp/image/upload/v1725101907/testimony_umqwcb.webp"
  return (
    <div className="md:flex lg:flex xl:flex 2xl:flex w-full h- items-center">
      <section className="md:w-[33.3%] lg:w-[33.3%] xl:w-[33.3%] 2xl:w-[33.3%]">
        <div className="content h-[30rem] relative" style={{ backgroundImage: `url(${choir})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="p-4 absolute bottom-0 left-0 right-0 text-center pb-[5rem]">
            <h2 className="text-white text-center font-semibold text-lg md:text-2xl xl:text-2xl 2xl:text-2xl">We're Joyful</h2>
            <p className="text-white text-center font-semibold text-lg md:text-xl">BECOME<br />A<br />MEMBER</p>
            <Link href={"/signup"}>
            <button className="bg-red-600 text-white md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] p-3 mt-5 ">JOIN US</button>
            </Link>
          </div>
        </div>
      </section>
      <section className="md:w-[33.3%] lg:w-[33.3%] xl:w-[33.3%] 2xl:w-[33.3%]">
        <div className="content h-[30rem] relative" style={{ backgroundImage: `url(${cardimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="p-4 absolute bottom-0 left-0 right-0 text-center pb-[5rem]">
            <h2 className="text-white text-center font-semibold text-lg md:text-2xl xl:text-2xl 2xl:text-2xl">Build Capacity</h2>
            <p className="text-white text-center font-semibold text-lg md:text-xl">JOIN OUR<br />LEADERSHIP<br />CLASS</p>
            <Link href={"/signup"}>
            <button className="bg-red-600 text-white  md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] p-3 mt-5">START HERE</button>
            </Link>
          </div>
        </div>
      </section>
      <section className="md:w-[33.3%] lg:w-[33.3%] xl:w-[33.3%] 2xl:w-[33.3%]">
        <div className="content h-[30rem] relative" style={{ backgroundImage: `url(${cardimg2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="p-4 absolute bottom-0 left-0 right-0 text-center pb-[5rem]">
            <h2 className="text-white text-center font-semibold text-lg md:text-2xl xl:text-2xl 2xl:text-2xl">Prophetic session</h2>
            <p className="text-white text-center font-semibold text-lg md:text-xl">REQUEST<br />A<br />PRAYER SESSION</p>
            <Link href={"/prayer"}>
            <button className="bg-red-600 text-white  md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%]  p-3 mt-5 ">LETS PRAY</button>
            </Link>  </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
