"use client";

import Image from "next/image";
import useFetch from "@/utils/useFetch";
import { image_url } from "@/public/images";
import CastCard from "@/components/CastCard";
import Video from "@/components/Video";
import CardGrid from "@/components/CardGrid";

export const Movie = ({ id }) => {
  const { data, loading, error } = useFetch(`/movie/${id}`);

  const {
    data: creditData,
    loading: creditLoading,
    error: creditError,
  } = useFetch(`/movie/${id}/credits`);

  const {
    data: videoData,
    loading: videoLoading,
    error: videoError,
  } = useFetch(`/movie/${id}/videos`);
  const {
    data: similarData,
    loading: similarLoading,
    error: similarError,
  } = useFetch(`/movie/${id}/similar`);
  const {
    data: recommendationsData,
    loading: recommendationsLoading,
    error: recommendationsError,
  } = useFetch(`/movie/${id}/recommendations`);

  console.log("Video Data", videoData);
  return (
    <div className="overflow-hidden">
      {loading || creditLoading || videoLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error Occured: {error}</p>
      ) : (
        <>
          {data?.backdrop_path && (
            <section>
              <div className="w-full relative">
                <Image
                  src={`${image_url}${data?.backdrop_path}`}
                  alt={"BACKGROUND IMAGE"}
                  width={800}
                  height={800}
                  draggable={false}
                  className="select-none overflow-hidden fixed inset-0 -z-20 w-screen h-screen object-cover opacity-45 rounded-sm"
                />
                <div className="fixed inset-0 bg-[#0003198c] -z-20"></div>
              </div>
            </section>
          )}

          <section className="pt-4 sm:p-4 flex items-center justify-center flex-col sm:flex-row gap-x-8 gap-y-4 md:gap-x-12">
            <div>
              <div className="w-[60vw] sm:w-60 md:w-80">
                <Image
                  src={`${image_url}${data.poster_path}`}
                  alt="Name"
                  width={500}
                  height={500}
                  className="w-full object-contain rounded-md"
                />
                <h1 className="glorious text-wrap my-2 sm:my-1 text-center">
                  {data.title || data.name || data.original_title}
                </h1>
                <h1 className="mb-2 text-sm mx-auto text-center gray-gr">
                  ({data.release_date.split("-")[0]})
                </h1>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex sm:mt-4 flex-col md:max-w-[50vw]">
                <h1 className="text-center gray-gr italic opacity-50 font-bold text-xl sm:text-2xl">
                  {data.tagline}
                </h1>
              </div>

              <GlassBox title={"Overview"} data={data.overview || "N/A"} />
              <StatusBar
                status={data.status || "N/A"}
                released={data.release_date || "N/A"}
                runtime={data.runtime || "N/A"}
              />
              <ArraySmallCompartment
                title={"Production Company"}
                value={data.production_companies || "N/A"}
              />
              <CreditCompartment
                title={"Director"}
                department={"Directing"}
                value={creditData.crew ? creditData.crew : "N/A"}
              />
              <CreditCompartment
                title={"Writer"}
                department={"Writing"}
                value={creditData.crew ? creditData.crew : "N/A"}
              />
              <ArraySmallCompartment
                title={"Genres"}
                value={data.genres || "N/A"}
              />
            </div>
          </section>

          {creditData && (
            <section className="px-2 py-4">
              <h1 className="text-3xl font-bold ">Top Cast</h1>
              <div className="flex overflow-x-scroll noscroll gap-4">
                {creditData.cast?.map((c, i) => (
                  <CastCard
                    key={i}
                    name={c.name || c.original_name}
                    photo={c.profile_path}
                    char={c.character}
                  />
                ))}
              </div>
            </section>
          )}
        </>
      )}

      {videoData?.results?.length > 0 && (
        <>
          <h1 className="h1">Promotional Video</h1>
          <div className="flex gap-8 flex-wrap">
            {videoData.results.map((v, i) => (
              <Video key={i} url={v.key} name={v.name} />
            ))}
          </div>
        </>
      )}

      {similarData?.results.length > 0 && (
        <>
          <CardGrid
            recommendation={true}
            title={"Similar Movies"}
            data={similarData}
            loading={similarLoading}
            error={similarError}
          />
        </>
      )}
      {recommendationsData?.results.length > 0 && (
        <>
          <CardGrid
            recommendation={true}
            title={"Recommendations"}
            data={recommendationsData}
            loading={recommendationsLoading}
            error={recommendationsError}
          />
        </>
      )}
    </div>
  );
};

const GlassBox = ({ title, data }) => {
  return (
    <div className="flex flex-col glass p-4 md:max-w-[50vw]">
      <h1 className="gray-gr font-bold text-xl sm:text-2xl">{title}</h1>
      <p className="text-sm sm:text-md mx-1">{data}</p>
    </div>
  );
};

const StatusBar = ({ status, released, runtime }) => {
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

const Compartment = ({ title, value }) => (
  <div className=" flexbox gap-x-4 flex-wrap">
    <div className="h2">{title}:</div>
    <div className="text-center text-sm text-gray-400">{value}</div>
  </div>
);

const SmallCompartment = ({ title, value }) => (
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

const ArraySmallCompartment = ({ title, value }) => (
  <>
    <div className=" flex flex-wrap items-center gap-3">
      <div className="h2">{title}:</div>
      <div className="flex flex-wrap gap-1 items-center text-center text-sm text-gray-400">
        {value === "N/A"
          ? "N/A"
          : value?.map((v, i) => (
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

const CreditCompartment = ({ title, value, department }) => {
  const filteredData = value?.filter(
    (v) => v.known_for_department === department || v.job === title
  );
  return (
    <>
      <div className=" flex flex-wrap items-center gap-3">
        <div className="h2">{title}:</div>
        <div className="flex flex-wrap gap-1 text-center text-sm text-gray-400">
          {value === "N/A"
            ? "N/A"
            : filteredData?.map((v, i) => (
                <div key={i}>
                  {v.name}
                  {i !== filteredData.length - 1 && ","}
                </div>
              ))}
        </div>
      </div>
      <hr className="opacity-10 -mt-4" />
    </>
  );
};
