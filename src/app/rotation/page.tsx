export default function Page() {
  return (
    <div
      id="banner"
      className="h-[100vh] relative overflow-hidden bg-rotationbg items-center justify-center flex flex-col w-full"
    >
      <div className="flex text-white text-[50px] font-pepsi tracking-wider z-10 mt-[100px] translate-x-[-90px]">
        GREAT TASTE ZERO
        <div className="relative">
          <p className="text-white absolute ml-1 text-shadow top-[3px] left-[3px] z-[10]">
            SUGAR
          </p>
          <p className="text-pepsi ml-1 text-shadow z-[100] absolute">SUGAR</p>
        </div>
      </div>
      <p className="text-pepsi text-[400px] font-pepsi tracking-wider bg-rotationbg z-10">
        PEPSI
      </p>
      <div
        id="product1"
        className="flex w-[500px] h-[500px] absolute bottom-[170px] left-[50%] translate-y-[100px] translate-x-[-70%] z-20 transition-all duration-700"
      >
        <div id="pepsi1"></div>
      </div>
      <div
        id="product2"
        className="flex w-[500px] h-[500px] absolute bottom-[170px] translate-y-[100px] left-[50%] translate-x-[30%]  z-20 transition-all duration-700"
      >
        <div id="pepsi2"></div>
      </div>
      <div className="bg-rotationbg absolute border-[20px] border-pepsi w-[600px] h-[600px] rounded-full z-0"></div>
      <div className="bg-rotationbg absolute border-[20px] border-pepsi w-[600px] h-[600px] rounded-full z-0 top-[200px]"></div>
    </div>
  );
}

// <div id="pepsi2" className="w-[200px]"></div>
