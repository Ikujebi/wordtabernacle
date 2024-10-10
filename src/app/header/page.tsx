"use client";
import Link from "next/link";
import { useState, useEffect, useCallback, FC } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Image from "next/image";
import shape from "../img/Shape.png";
import { GoClock } from "react-icons/go";

const SignupPage: FC = () => {
  const OpenEye = <FaEye />;
  const CloseEye = <FaEyeSlash />;
  const sermonpix =
    "https://res.cloudinary.com/dalylashp/image/upload/v1728486243/86QxYjwq8LU_qhirfa.png";
  const [showPassword, setShowPassword] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const onSignup = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);

      console.log("Signup success", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log(`signUp failed  ${error.message}`);

      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }, [router, user]);

  // Attach event listener when component mounts
  useEffect(() => {
    const handleKeyPress = (event: any) => {
      if (event.key === "Enter") {
        onSignup();
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [onSignup]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
      setCurrentTime(date);
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className="bg-red-100">
      <header>
        <Header />
      </header>
      <main>
        <section className="md:flex lg:flex xl:flex 2xl:flex pt-[10rem] justify-center min-h-screen gap-5">
          <article
            id="a1"
            className="md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[45rem]  pb-2 mx-[3rem]"
          >
            <div className="mb-1">
              <Image src={sermonpix} width={2000} height={200} alt="sermon" />
            </div>
            <p className="text-[.7rem] text-red-400 my-5">Upcoming Event</p>
            <p id="h1" className="font-semibold text-[1.2rem]">HOW TO TRULY TRUST SOMEONE</p>
            <p id="p1">
              Trusting someone is an act of faith that mirrors the relationship
              we are called to have with God. Just as we place our complete
              trust in the Lord’s promises, we should seek His guidance when it
              comes to trusting others. Building trust requires patience,
              prayer, and the willingness to be guided by the Holy Spirit in
              every step we take.
            </p>
            <div className="  p-6 max-w-md mx-auto my-8 border-l-4 border-red-500">
    <p className="text-lg text-gray-700 font-serif leading-relaxed">
      “True trust is formed when we reflect Christ’s love to others. It is built on grace, strengthened by understanding, and nurtured in prayer.”
    </p>
    <p className="text-right text-red-600 font-semibold mt-4">- Pastor Ayodeji D. Ayorinde</p>
  </div>
            <p id="p2 italic">
              True trust is not formed overnight; it is nurtured through love,
              understanding, and grace. As believers, we are called to see
              others as Christ sees them—imperfect but loved, and capable of
              growth. This perspective allows us to foster genuine trust rooted
              in Christ’s example.
            </p>
            <p id="p3">
              In times of doubt, it’s important to remember that trust is not
              only a gift we offer to others but also an expression of God’s
              work in us. By leaning on Him, we learn to discern wisely and to
              extend trust that reflects His unconditional love, creating bonds
              that honor His presence in our lives.
            </p>
          </article>
          <article className=" md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[30rem]  ">
            <div className="flex flex-col shadow-xl mx-2 p-5 bg-white rounded-xl">
              {" "}
              <h1 className="text-center pb-5">
                {loading ? "Processing !!!!" : "REGISTER NOW "}
                -&gt;
              </h1>
              <div className="flex justify-between">
                <p className="w-[65%] flex">
                  <Image
                    src={shape}
                    width={2000}
                    height={200}
                    className="w-4 h-4 "
                    alt="jbd"
                  />{" "}
                  <span className="text-[.78rem]">
                    Word Tabernacle Church 2, Ajetunmobi street
                    ibeshe,ikorodu,LG,NIG
                  </span>
                </p>
                <p className="w-[34%] flex gap-1">
                  <span className="pt-[3px]">
                    <GoClock size={14} />{" "}
                  </span>
                  <span className="text-[.9rem] 2xl:text-[1rem]">
                    {currentTime}
                  </span>
                </p>
              </div>
              <div className="flex flex-col mt-5 text-black ">
                <label htmlFor="username">username</label>
                <input
                  className="p-2 border border-t-0 border-l-0 border-r-0  border-gray-300 mb-2 focus:outline-none  focus:border-gray-600"
                  id="username"
                  type="text"
                  value={user.username}
                  placeholder="username"
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                />
                <label htmlFor="email">email</label>
                <input
                  className="p-2 border border-t-0 border-l-0 border-r-0 border-gray-300  mb-2 focus:outline-none  focus:border-gray-600"
                  id="email"
                  type="email"
                  value={user.email}
                  placeholder="email"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
                <label htmlFor="password">password</label>
                <div className="relative">
                  <input
                    className="p-2 border w-full border-gray-300 rounded-xl mb-2 focus:outline-none  focus:border-gray-600"
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={user.password}
                    placeholder="password"
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                  />
                  <button
                    type="button"
                    className="absolute top-1/2 right-2 transform -translate-y-1/2  "
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? OpenEye : CloseEye}
                  </button>
                </div>

                <button
                  onClick={onSignup}
                  disabled={buttonDisabled}
                  className=" p-2 border border-gray-300 rounded-2xl mb-4 focus:outline-none  focus:border-gray-600"
                >
                  {buttonDisabled ? "No signup" : "Signup"}{" "}
                </button>
              </div>
              <p>
                <Link href={"/in"}>Visit login</Link>
              </p>
              <p className="mt-2">
                <Link
                  href={"/"}
                  className="bg-red-500 text-white p-1 rounded-md"
                >
                  HOME
                </Link>
              </p>
            </div>
          </article>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default SignupPage;
