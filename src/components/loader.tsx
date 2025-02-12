export default function Loader() {
  return (
    <div className="w-[100px] h-[100px] relative flex items-center justify-center">
      <div className="absolute w-full h-full rounded-[30px] bg-[rgba(255,255,255,0.2)] border-2 border-[rgba(255,255,255,0.3)] z-10  text-white flex justify-center items-center">
        Loading...
      </div>
      <div className="absolute w-full h-full rounded-[30px] bg-gradient-to-br from-[#1afbf0] to-[#da00ff] filter blur-sm animate-loadtwo z-0">
        {" "}
      </div>
    </div>
  );
}
