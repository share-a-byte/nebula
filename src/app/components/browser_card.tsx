export default function Browser({
  gradient,
  title,
  description,
  website,
}: {
  gradient: string;
  title: string;
  description: string;
  website: string;
}) {
  return (
    <a href={website} target="_blank" rel="noopener noreferrer">
      <div
        className={`bg-gradient-to-r ${gradient}  p-1 rounded-md shadow-md max-w-sm mx-auto hover:scale-105 relative lg:w-64 md:w-64`}
      >
        <div className="relative border-x border-t border-black bg-gray-300 rounded-t-md p-1 flex items-center justify-between">
          <div className="bg-white w-full mx-1 h-3 rounded"></div>
          <div className="flex space-x-1">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full border border-black"></div>
            <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full border border-black"></div>
            <div className="w-2.5 h-2.5 bg-red-500 rounded-full border border-black"></div>
          </div>
        </div>
        <div className="bg-gray-200 rounded-b-md p-3 border-x border-b border-black">
          <h1 className="flex justify-center text-lg gap-x-1 font-semibold mb-1 text-black lowercase">
            {title}
          </h1>
          <p className="text-gray-700 mb-3 mx-1 text-sm line-clamp-2">
            {description}
          </p>
        </div>
        {/* {trending ? (
              <div className="absolute top-0 right-1 transform -translate-y-1/2 p-1 text-purple-600 bg-white rounded-full border border-black">
                <IoMdTrendingUp size={15} />
              </div>
            ) : (
              <></>
            )} */}
      </div>
    </a>
  );
}
