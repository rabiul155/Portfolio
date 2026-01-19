export default function PrimaryButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        relative overflow-hidden
        px-8 pb-2.5 pt-[9px]
        rounded-full
        border-2 border-orange-600
        font-semibold text-white
        transition-colors duration-300
        group
      "
    >
      {/* Background fill */}
      <span
        className="
          absolute inset-0
          bg-orange-600
          transition-transform duration-300 ease-out
          group-hover:translate-y-12  
          -z-10
        "
      />

      {/* Text */}
      <span className="relative z-10 group-hover:text-black transition-colors duration-300">
        {text}
      </span>
    </button>
  );
}
