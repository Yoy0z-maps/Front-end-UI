export default function Page() {
  return (
    <div id="banner" className="h-[100vh] relative overflow-hidden">
      <div
        id="product1"
        className="flex w-[500px] h-[500px] absolute bottom-[170px] left-[50%] translate-x-[-60%] z-[1] transition-all duration-700"
      >
        <div id="pepsi1" className=""></div>
      </div>
      <div
        id="product2"
        className="flex w-[500px] h-[500px] absolute bottom-[170px] left-[50%] z-[1] transition-all duration-700"
      >
        <div id="pepsi2" className=""></div>
      </div>
    </div>
  );
}

// <div id="pepsi2" className="w-[200px]"></div>
