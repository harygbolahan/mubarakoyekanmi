interface HeroProps {
  count: number;
  onCountClick: () => void;
}

function Hero({ count, onCountClick }: HeroProps) {
  return (
    <div className="text-center">
      <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
        Welcome to <span className="text-indigo-600">Tailwind</span>
      </h2>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        A simple, beautiful page built with Tailwind CSS and React. Start
        building amazing things today.
      </p>

      <button
        onClick={onCountClick}
        className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold 
                 hover:bg-indigo-700 transition shadow-lg hover:shadow-xl 
                 transform hover:-translate-y-0.5"
      >
        Count is {count}
      </button>
    </div>
  );
}

export default Hero;
