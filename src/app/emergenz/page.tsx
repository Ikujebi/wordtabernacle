"use client";
import { FC } from "react";
import Image from "next/image";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import givbg from "../img/giveimg.jpg";

const Page: FC = () => {
  const youthpic = [
    { image: "https://res.cloudinary.com/dalylashp/image/upload/v1725101517/choir7_umfdyb.webp" },
    { image: "https://res.cloudinary.com/dalylashp/image/upload/v1726579634/word14_apmp4h.jpg" },
    { image: "https://res.cloudinary.com/dalylashp/image/upload/v1726579602/word_mrsJJ4_uerkqo.jpg" },
    { image: "https://res.cloudinary.com/dalylashp/image/upload/v1725356890/5933838834204786631_hg4uhx.jpg" },
    { image: "https://res.cloudinary.com/dalylashp/image/upload/v1725129876/photo_5933838834204786583_y_ivyxxk.jpg" },
    { image: "https://res.cloudinary.com/dalylashp/image/upload/v1726579602/word5_l7jfsl.jpg" },
    { image: "https://res.cloudinary.com/dalylashp/image/upload/v1726579603/word6_dojbxq.jpg" },
  {image: "https://res.cloudinary.com/dalylashp/image/upload/v1726579634/word15_ctucr4.jpg"},
  {image: "https://res.cloudinary.com/dalylashp/image/upload/v1726579626/word013_ktwgaa.jpg"},
  {image: "https://res.cloudinary.com/dalylashp/image/upload/v1726579603/word10_xclcex.jpg"},
  {image: "https://res.cloudinary.com/dalylashp/image/upload/v1726579604/word11_omyh9y.jpg"},
  {image: "https://res.cloudinary.com/dalylashp/image/upload/v1726579603/word010_iirv1t.jpg"},
  {image: "https://res.cloudinary.com/dalylashp/image/upload/v1725102028/youth1_jqttiv.webp"},
  {image:"https://res.cloudinary.com/dalylashp/image/upload/v1726579603/word8_zg3qwb.jpg"},
    { image: "https://res.cloudinary.com/dalylashp/image/upload/v1726579602/word06_mzxdqf.jpg" },
    { image: "https://res.cloudinary.com/dalylashp/image/upload/v1728399231/photo_5773882741589395504_y_yckiol.jpg" },
  {image: "https://res.cloudinary.com/dalylashp/image/upload/v1727168960/photo_6019429698393719060_y_s4icix.jpg"},
  {image: "https://res.cloudinary.com/dalylashp/image/upload/v1727168947/photo_6019429698393719056_y_m3vakz.jpg"},
  {image: "https://res.cloudinary.com/dalylashp/image/upload/v1727168969/photo_6019429698393719042_y_mj1qhe.jpg"},
  {image: "https://res.cloudinary.com/dalylashp/image/upload/v1727168835/photo_6019429698393719085_y_kk7p7y.jpg"},
  {image: "https://res.cloudinary.com/dalylashp/image/upload/v1727168912/photo_6019429698393719052_y_nnhf8g.jpg"},
  {image: "https://res.cloudinary.com/dalylashp/image/upload/v1728399270/photo_5773882741589395450_y_wcbs2a.jpg"},
  {image: "https://res.cloudinary.com/dalylashp/image/upload/v1728399269/photo_5773882741589395446_y_tkv1ro.jpg"},
  
  
  ];

  return (
    <div className="font-satoshi">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <div
          className="relative flex justify-center items-center h-80 bg-black bg-opacity-50"
          style={{
            backgroundImage: `url(${givbg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="text-white font-semibold text-3xl relative">
            Next Generation
            <span className="block absolute bottom-1 left-1/2 transform -translate-x-1/2 w-full h-1 bg-white"></span>
          </h2>
        </div>

        {/* Youth Ministry Info Section */}
        <section className="flex flex-col items-center mt-12">
          <article className="w-4/5 md:w-3/5 text-center mb-8">
            <p className="text-lg">
              WTC Youth Ministries are where young adults can grow, worship, fellowship, serve, and discover their
              identity and purpose in Christ in a fun and safe environment.
            </p>
          </article>
          <article className="w-4/5 md:w-3/5 bg-gradient-to-r from-indigo-300 to-purple-400 text-center py-8 rounded-lg shadow-lg">
            <p className="text-lg">
              We break out into small groups, go on retreats, have awesome events, gather during the week, and serve as
              a team — all to empower people in every area of life to the glory of God.
            </p>
          </article>
        </section>

        {/* Teen and Youth Spotlights */}
        <section className="bg-purple-200 py-12 mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-8 text-gray-800 relative">
            Teen and Youth Spotlights
            <span className="block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gray-800"></span>
          </h2>

          {/* Spotlight Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {youthpic.map((item, i) => (
              <div key={i} className="w-full h-[35svh] relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition">
                <Image src={item.image} className="object-cover object-top " layout="fill" alt={`Spotlight image ${i + 1}`} />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Page;
