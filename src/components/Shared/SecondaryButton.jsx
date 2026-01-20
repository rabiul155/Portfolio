export default function SecondaryButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        relative overflow-hidden
        px-5 md:px-7 pb-2 pt-[7px]
        rounded-full
        border-2 border-[#f75023]
        font-semibold text-black
        transition-colors duration-300
        group
      "
    >
      {/* Background fill */}
      <span
        className="
          absolute inset-0
          bg-[#f75023]
          transform translate-y-12
          transition-transform duration-300 ease-out
          group-hover:translate-y-0  
          -z-10
        "
      />

      {/* Text */}
      <span className="relative z-10 whitespace-nowrap group-hover:text-white transition-colors duration-300">
        {text}
      </span>
    </button>
  );
}
