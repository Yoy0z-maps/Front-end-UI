import Link from "next/link";

export default function Page() {
  return (
    <div
      id="body"
      className="m-0 p-0 flex justify-center items-center min-h-[100vh] bg-boxbg"
    >
      <div id="container" className="flex flex-wrap justify-between">
        <div
          id="box"
          className="relative w-[350px] p-[40px] bg-boxcontent rounded-[20px] m-[20px] text-center box-border overflow-hidden group"
        >
          <div
            id="icon"
            className="relative overflow-hidden w-[100px] h-[100px] flex justify-center items-center mx-auto text-white rounded-[50%] text-[48px] font-bold transition-all duration-500 shadow-first-box bg-firstbox group-hover:shadow-first-box-hover before:content-[''] before:absolute before:top-0 before:left-0 before:w-[100%] before:h-[100%] before:transition-all before:duration-500 before:bg-boxblackoverlay before:opacity-0 group-hover:before:opacity-100"
          >
            <span className="relative z-[1000]">01</span>
          </div>
          <div
            id="content"
            className="relative z-[10000] transition-all duration-500 text-white"
          >
            <h3 className="text-[22px] font-semibold tracking-[1px] mt-[10px] mx-0">
              Service Name
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link
              href={"#"}
              className="inline-block padding py-[10px] px-[20px] bg-boxblackoverlay rounded-[40px] no-underline font-light mt-[20px] transition-all duration-500 hover:bg-black hover:bg-opacity-50"
            >
              Read More
            </Link>
          </div>
        </div>
        <div
          id="box"
          className="relative w-[350px] p-[40px] bg-boxcontent rounded-[20px] m-[20px] text-center box-border overflow-hidden group"
        >
          <div
            id="icon"
            className="relative overflow-hidden w-[100px] h-[100px] flex justify-center items-center mx-auto text-white rounded-[50%] text-[48px] font-bold transition-all duration-500 shadow-second-box bg-secondbox group-hover:shadow-second-box-hover before:content-[''] before:absolute before:top-0 before:left-0 before:w-[100%] before:h-[100%] before:transition-all before:duration-500 before:bg-black before:bg-opacity-20 before:opacity-0 group-hover:before:opacity-100"
          >
            <span className="relative z-[1000]">02</span>
          </div>
          <div
            id="content"
            className="relative z-[10000] transition-all duration-500 text-white"
          >
            <h3 className="text-[22px] font-semibold tracking-[1px] mt-[10px] mx-0">
              Service Name
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link
              href={"#"}
              className="inline-block padding py-[10px] px-[20px] bg-boxblackoverlay rounded-[40px] no-underline font-light mt-[20px] transition-all duration-500 hover:bg-black hover:bg-opacity-50"
            >
              Read More
            </Link>
          </div>
        </div>
        <div
          id="box"
          className="relative w-[350px] p-[40px] bg-boxcontent rounded-[20px] m-[20px] text-center box-border overflow-hidden group"
        >
          <div
            id="icon"
            className="relative overflow-hidden w-[100px] h-[100px] flex justify-center items-center mx-auto text-white rounded-[50%] text-[48px] font-bold transition-all duration-500 shadow-third-box bg-thirdbox group-hover:shadow-third-box-hover before:content-[''] before:absolute before:top-0 before:left-0 before:w-[100%] before:h-[100%] before:transition-all before:duration-500 before:bg-boxblackoverlay before:opacity-0 group-hover:before:opacity-100"
          >
            <span className="relative z-[1000]">03</span>
          </div>
          <div
            id="content"
            className="relative z-[10000] transition-all duration-500 text-white"
          >
            <h3 className="text-[22px] font-semibold tracking-[1px] mt-[10px] mx-0">
              Service Name
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link
              href={"#"}
              className="inline-block padding py-[10px] px-[20px] bg-boxblackoverlay rounded-[40px] no-underline font-light mt-[20px] transition-all duration-500 hover:bg-black hover:bg-opacity-50"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
