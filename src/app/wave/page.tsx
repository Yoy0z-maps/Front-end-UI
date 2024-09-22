export default function Page() {
  return (
    <div className="flex flex-col min-h-[100vh] bg-pbackground justify-end w-full">
      <footer className="relative w-full h-[200px] bg-fbackground">
        <div id="waves">
          <div
            id="wave1"
            className="absolute w-full h-[100px] top-[-100px]"
          ></div>
          <div
            id="wave2"
            className="absolute w-full h-[100px] top-[-100px]"
          ></div>
          <div
            id="wave3"
            className="absolute w-full h-[100px] top-[-100px]"
          ></div>
          <div
            id="wave4"
            className="absolute w-full h-[100px] top-[-100px]"
          ></div>
        </div>
      </footer>
    </div>
  );
}
