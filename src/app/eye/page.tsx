export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-[100vh] bg-eyebackground">
      <div className="relative w-[400px] h-[500px] bg-white m-[40px] shadow-eye-shadow">
        <div
          id="bottom"
          className="absolute w-[320px] h-[180px] bottom-0 left-[50%] bg-eyered translate-x-[-50%] rounded-tl-[150px] rounded-tr-[150px] z-[9] overflow-hidden before:content-[''] before:absolute before:top-[80px] before:left-[97px] before:w-[20px] before:h-[20px] before:bg-white before:z-[1] before:rounded-[50%] after:content-[''] after:absolute after:top-[80px] after:right-[97px] after:w-[20px] after:h-[20px] after:bg-white after:z-[1] after:rounded-[50%]"
        >
          <span className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[180px] h-[100px] rounded-tl-[40px] bg-eyeblue rounded-tr-[40px] before:content-[''] before:absolute before:top-[-90px] before:left-[10px] before:w-[30px] before:h-[100px] before:bg-eyeblue before:rotate-[345deg] after:content-[''] after:absolute after:top-[-90px] after:right-[10px] after:w-[30px] after:h-[100px] after:bg-eyeblue after:rotate-[15deg]"></span>
        </div>
        <div>
          <div
            id="neck"
            className="absolute bottom-[140px] left-[50%] translate-x-[-50%] w-[70px] h-[100px] bg-skin z-[10] rounded-bl-[40px] rounded-br-[40px] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[100%] before:h-[75%] before:bg-skin-shadow"
          ></div>
          <div id="face" className="absolute">
            <div id="eyes">
              <span>
                <i></i>
              </span>
              <span>
                <i></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
