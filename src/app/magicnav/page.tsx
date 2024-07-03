import Magic_One from "./components/type_one";
import Magic_Two from "./components/type_two";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center bg-white gap-0">
      <section className="flex justify-center items-center min-w-[500px] min-h-[50vh] bg-clr">
        <Magic_One />
      </section>
      <section className="flex justify-center items-center min-w-[500px] min-h-[50vh] bg-clr">
        <Magic_Two />
      </section>
    </div>
  );
}
