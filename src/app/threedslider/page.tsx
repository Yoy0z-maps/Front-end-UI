import ThreeDImageSlider from "./components/ThreeDImageSlider";

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-[100vh] bg-background transform-preserve-3d">
      <ThreeDImageSlider />
    </div>
  );
}
