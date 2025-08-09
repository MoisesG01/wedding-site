import divisor from "../assets/divisor.png";

export default function Divisor() {
  return (
    <div className="py-1 sm:py-2 md:py-3">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <img
          src={divisor}
          alt="Divisor decorativo"
          className="mx-auto max-w-[200px] sm:max-w-[250px] md:max-w-[350px] h-auto opacity-90"
          style={{
            filter:
              "brightness(0) saturate(80%) invert(43%) sepia(71%) saturate(238%) hue-rotate(359deg) brightness(103%) contrast(207%)",
          }}
        />
      </div>
    </div>
  );
}
