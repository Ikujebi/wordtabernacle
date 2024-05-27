import choir from '../common/../../img/choir.webp';
import cardimg from '../common/../../img/youthpreacher.webp';
import cardimg2 from '../common/../../img/testimony.webp';

const Community = () => {
  return (
    <div className="flex w-full h- items-center">
      <section className="w-[33.3%]">
        <div className="content h-[30rem] relative" style={{ backgroundImage: `url(${choir.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="p-4 absolute bottom-0 left-0 right-0 text-center pb-[5rem]">
            <h2 className="text-white text-center font-semibold">We're Joyful</h2>
            <p className="text-white text-center font-semibold text-sm md:text-base">BECOME<br />A<br />MEMBER</p>
            <button className="bg-red-600 text-white md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] p-3 mt-5 ">JOIN US</button>
          </div>
        </div>
      </section>
      <section className="w-[33.3%]">
        <div className="content h-[30rem] relative" style={{ backgroundImage: `url(${cardimg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="p-4 absolute bottom-0 left-0 right-0 text-center pb-[5rem]">
            <h2 className="text-white text-center font-semibold">Build Capacity</h2>
            <p className="text-white text-center font-semibold text-lg md:text-xl">JOIN OUR<br />LEADERSHIP<br />CLASS</p>
            <button className="bg-red-600 text-white  md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] p-3 mt-5">START HERE</button>
          </div>
        </div>
      </section>
      <section className="w-[33.3%]">
        <div className="content h-[30rem] relative" style={{ backgroundImage: `url(${cardimg2.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="p-4 absolute bottom-0 left-0 right-0 text-center pb-[5rem]">
            <h2 className="text-white text-center font-semibold">Prophetic session</h2>
            <p className="text-white text-center font-semibold text-lg md:text-xl">REQUEST<br />A<br />PRAYER SESSION</p>
            <button className="bg-red-600 text-white  md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] sm:p-0 p-3 mt-5 ">LETS PRAY</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
