export default function SliderButton({ onPrev, onNext }) {
  return (
    <div className="absolute flex bottom-[75px] gap-[20px]">
      <span
        onClick={onPrev}
        className="relative w-[50px] h-[50px] cursor-pointer flex justify-center items-center opacity-50 border-2 border-white rounded-full hover:opacity-100 text-white text-lg"
      >
        &lt;
      </span>
      <span
        onClick={onNext}
        className="relative w-[50px] h-[50px] cursor-pointer flex justify-center items-center opacity-50 border-2 border-white rounded-full hover:opacity-100 text-white text-lg"
      >
        &gt;
      </span>
    </div>
  );
}
