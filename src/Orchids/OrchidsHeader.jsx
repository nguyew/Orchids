const OrchidsHeader = ({ isDarkMode }) => (
  <div className="text-center mb-12">
    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
      🌺 Exotic Orchids Collection
    </h1>
    <p
      className={`text-xl mb-8 max-w-2xl mx-auto ${
        isDarkMode ? "text-gray-300" : "text-gray-600"
      }`}
    >
      Discover our stunning collection of rare and beautiful orchids from around the world.
    </p>
  </div>
);

export default OrchidsHeader;
