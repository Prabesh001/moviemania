export const GlassBox = ({ title, data }) => {
  return (
    <div className="flex flex-col glass p-4 md:max-w-[50vw]">
      <h1 className="gray-gr font-bold text-xl sm:text-2xl">{title}</h1>
      <p className="text-sm sm:text-md mx-1 sm:line-clamp-[10]">{data}</p>
    </div>
  );
};

export const StatusBar = ({ status, released, runtime }) => {
  const formatRunTime = (runtime) => {
    if (runtime === "N/A") return "N/A";
    const hr = Math.floor(runtime / 60);
    const min = runtime % 60;
    return `${hr}hr ${min}min`;
  };
  return (
    <>
      <div className="flex gap-4 sm:gap-8 md:gap-12 lg:gap-14">
        <Compartment title={"Status"} value={status} />
        <Compartment title={"Released"} value={released} />
        <Compartment title={"Runtime"} value={formatRunTime(runtime)} />
      </div>
      <hr className="opacity-10 -mt-4" />
    </>
  );
};

export const Compartment = ({ title, value }) => (
  <div className=" flexbox gap-x-4 flex-wrap">
    <div className="h2">{title}:</div>
    <div className="text-center text-sm text-gray-400">{value}</div>
  </div>
);

export const SmallCompartment = ({ title, value }) => (
  <>
    <div className=" flex flex-wrap  items-center gap-3">
      <div className="h2">{title}:</div>
      <div className="text-center text-sm text-gray-400">
        {JSON.stringify(value)}
      </div>
    </div>
    <hr className="opacity-10 -mt-4" />
  </>
);

export const ArraySmallCompartment = ({ title, value }) => {
  const val = Array.isArray(value) ? value : [value];
  return (
    <>
      <div className=" flex flex-wrap items-center gap-3">
        <div className="h2">{title}:</div>
        <div className="flex flex-wrap gap-1 items-center text-center text-sm text-gray-400">
          {value === "N/A"
            ? "N/A"
            : val?.map((v, i) => (
                <div key={i}>
                  {v.name}
                  {i !== value.length - 1 && ","}
                </div>
              ))}
        </div>
      </div>
      <hr className="opacity-10 -mt-4" />
    </>
  );
};

export const CreditCompartment = ({ title, value, department }) => {
  const filteredData =
    value !== "N/A" &&
    value.filter(
      (v) => v.known_for_department === department || v.job === title
    );
  return (
    <>
      <div className=" flex flex-wrap items-center gap-3">
        <div className="h2">{title}:</div>
        <div className="flex flex-wrap gap-1 text-center text-sm text-gray-400">
          {value === "N/A"
            ? "N/A"
            : filteredData.length > 0
            ? filteredData?.map((v, i) => (
                <div key={i}>
                  {v.name}
                  {i !== filteredData.length - 1 && ","}
                </div>
              ))
            : "N/A"}
        </div>
      </div>
      <hr className="opacity-10 -mt-4" />
    </>
  );
};

export const SeriesStatusBar = ({ noOfEp, noOfSeason, epRuntime }) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-14">
        <SeriesCompartment title={"No. Of Episodes"} value={noOfEp} />
        <SeriesCompartment title={"No. Of Seasons"} value={noOfSeason} />
        <SeriesCompartment title={"Runtime"} value={epRuntime} />
      </div>
      <hr className="opacity-10 -mt-4" />
    </>
  );
};

export const SeriesCompartment = ({ title, value }) => {
  return (
    <div className="flexbox gap-x-4 flex-wrap">
      <div className="h2 text-nowrap">{title}:</div>
      <div className="text-center text-nowrap text-sm text-gray-400">
        {title !== "Runtime"
          ? value
          : value.length !== 0
          ? `${value} min`
          : "N/A"}
      </div>
    </div>
  );
};
