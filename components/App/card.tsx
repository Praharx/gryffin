const Card = ({ title, subtitle, image, fullWidth }: any) => {
  return (
    <div
      className={`bg-black rounded-lg shadow-lg ${
        fullWidth ? "flex" : "md:flex"
      }`}
    >
      <div
        className={`p-6 flex flex-col justify-start ${fullWidth ? "w-[30%]  h-full my-auto text-left" : ""} w-[50%] ${
          fullWidth ? "" : "w-full md:w-1/2"
        }`}
      >
        <h1 className="relative z-10 mt-2 text-md md:text-2xl bg-clip-text text-transparent bg-[radial-gradient(circle_farthest-side_at_45%,#fff,rgba(255,255,255,.43))] text-center">
          <span className="font-[200]">{title}</span>
        </h1>
        <h1 className="relative z-10 mt-2 text-md md:text-2xl bg-clip-text text-transparent bg-[radial-gradient(circle_farthest-side_at_45%,#fff,rgba(255,255,255,.43))] text-center">
          <span className="font-[200]">{subtitle}</span>
        </h1>{" "}
      </div>
      <div
        className={`bg-center bg-cover rounded-t-lg  md:rounded-t-none md:rounded-l-lg ${
          fullWidth ? "flex-1 h-64" : "w-full md:w-1/2 h-64 md:h-auto"
        }`}
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
    </div>
  );
};

export default Card;
