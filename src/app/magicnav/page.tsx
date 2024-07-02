import Magic_One from "./components/type_one";
import Magic_Two from "./components/type_two";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center bg-white">
      <section className="flex justify-center items-center min-w-[500px] min-h-[100vh] bg-clr">
        <Magic_One />
      </section>
      <section>
        <Magic_Two />
      </section>
    </div>
  );
}
