export default function SliderButton() {
  return (
    <div className="absolute flex bottom-[75px] gap-[20px]">
      <span
        id="prev"
        className="relative w-[50px] h-[50px] cursor-pointer flex justify-center items-center opacity-50 border-2 border-white rounded-full hover:opacity-100 text-white text-lg"
      >
        &lt;
      </span>
      <span
        id="next"
        className="relative w-[50px] h-[50px] cursor-pointer flex justify-center items-center opacity-50 border-2 border-white rounded-full hover:opacity-100 text-white text-lg"
      >
        &gt;
      </span>
    </div>
  );
}
