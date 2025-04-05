"use client";

import Image from "next/image";
import useFetch from "@/utils/useFetch";
import { image_url } from "@/public/images";
import Skeleton from "@/utils/Skeleton";
import ErrorPage from "@/components/ErrorPage";
import {
  Compartment,
  GlassBox,
  SmallCompartment,
} from "@/components/ui/SmallerComponents";
import MovieCard from "@/components/MovieCard";
import SkeletonCard from "@/utils/SkeletonCard";

const Person = ({ id }) => {
  const { data, loading, error } = useFetch(`/person/${id}`);

  const {
    data: movieCreditData,
    loading: movieCreditLoading,
    error: movieCreditError,
  } = useFetch(`/person/${id}/movie_credits`);

  console.log(data);
  const {
    data: tvCreditData,
    loading: tvCreditLoading,
    error: tvCreditError,
  } = useFetch(`/person/${id}/tv_credits`);

  const calculateAge = (year) => {
    const date = new Date();
    const yr = date.getFullYear();
    return yr - year;
  };

  return (
    <>
      {!loading && !data ? (
        <ErrorPage />
      ) : (
        <div className="overflow-hidden">
          {error ? (
            <p>Error Occured: {error}</p>
          ) : (
            <>
              {data?.profile_path && (
                <section>
                  <div className="w-full relative">
                    <Image
                      src={`${image_url}${data.profile_path}`}
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
                  {loading ? (
                    <div className="w-[60vw] sm:w-60 md:w-80 space-y-2">
                      <Skeleton className="w-full h-[90vw] sm:h-[22rem] md:h-[24rem] rounded-md" />
                      <Skeleton className="h-6 w-full" />
                      <Skeleton className="h-4 w-1/2 mx-auto" />
                    </div>
                  ) : (
                    <div className="w-[60vw] sm:w-60 md:w-80">
                      <Image
                        src={`${image_url}${data.profile_path}`}
                        alt={"BACKGROUND IMAGE"}
                        width={800}
                        height={800}
                        draggable={false}
                        className="w-full object-cover rounded-md"
                      />
                      <h1 className="glorious text-wrap my-2 sm:my-1 text-center">
                        {data.name}
                      </h1>
                    </div>
                  )}
                </div>

                {loading ? (
                  <div className="flex flex-col justify-center items-center gap-5 w-full sm:w-auto">
                    <div className="space-y-2">
                      <Skeleton className="h-50 w-[50vw]" />
                    </div>

                    <Skeleton className="h-14 w-full" />
                    <Skeleton className="h-14 w-full" />
                    <Skeleton className="h-14 w-full" />
                    <Skeleton className="h-14 w-full" />
                  </div>
                ) : (
                  <div className="flex flex-col gap-5">
                    <GlassBox
                      title={"Biography"}
                      data={data.biography || "N/A"}
                    />
                    <Description
                      label1={"Status"}
                      label2={"Birthday"}
                      label3={"Place Of Birth"}
                      value1={
                        data.deathday
                          ? `Dead(${data.deathday.split("-")[0]})`
                          : "Alive"
                      }
                      value2={data.birthday}
                      value3={data.place_of_birth}
                    />
                    <Description
                      label1={"Name"}
                      label3={"Gender"}
                      label2={"Age"}
                      value3={
                        data.gender === 2 ? "Male" : 1 ? "Female" : "Others"
                      }
                      value2={calculateAge(data.birthday.split("-")[0])}
                      value1={data.name}
                    />

                    <SmallCompartment
                      title={"Known For"}
                      value={data.known_for_department}
                    />

                    <div className=" flex flex-col xl:flex-row flex-wrap items-center gap-3">
                      <div className="h2">Also Known As:</div>
                      <div className="flex flex-col xl:flex-row flex-wrap gap-3 items-center text-center text-sm text-gray-400">
                        {data.also_known_as.length > 0
                          ? data.also_known_as.map((n, i) => (
                              <span key={i}>{n}</span>
                            ))
                          : data.name}
                      </div>
                    </div>
                    <hr className="opacity-10 -mt-4" />
                  </div>
                )}
              </section>
            </>
          )}

          <>
            <CreditGrid
              title={"Movies(As Cast)"}
              data={movieCreditData?.cast}
              loading={loading}
              error={error}
              endpoint="movie"
            />
            <CreditGrid
              title={"Movies(As Crew)"}
              data={movieCreditData?.crew}
              loading={movieCreditLoading}
              error={movieCreditError}
              endpoint="movie"
            />
            <CreditGrid
              title={"TV Shows(As Cast)"}
              data={tvCreditData?.cast}
              loading={tvCreditLoading}
              error={movieCreditError}
              endpoint="tv"
            />
            <CreditGrid
              title={"TV Shows(As Crew)"}
              data={tvCreditData?.crew}
              loading={tvCreditLoading}
              error={tvCreditError}
              endpoint="tv"
            />
          </>
        </div>
      )}
    </>
  );
};

const Description = ({ label1, label2, label3, value1, value2, value3 }) => {
  return (
    <>
      <div className="flex gap-4 sm:gap-8 md:gap-12 lg:gap-14">
        <Compartment title={label1} value={value1} />
        <Compartment title={label2} value={value2} />
        <Compartment title={label3} value={value3} />
      </div>
      <hr className="opacity-10 -mt-4" />
    </>
  );
};

const CreditGrid = ({ title, data, loading, error, endpoint }) => {
  return (
    <>
      <h1 className="font-bold text-2xl">{title}</h1>
      <div>
        {error && <p className="text-red-500">Error Occured: {error}</p>}
        <div className="flex gap-2 sm:gap-4 px-1 py-2 overflow-x-scroll noscroll">
          {loading ? (
            Array(8)
              .fill()
              .map((n, i) => <SkeletonCard key={i} />)
          ) : data?.length > 0 ? (
            data.map((movie, i) => (
              <MovieCard
                fromPerson={true}
                role={movie.character || movie.job}
                key={`${movie.id}+${i}`}
                index={i}
                movie={movie}
                endpoint={endpoint}
              />
            ))
          ) : (
            <p>No Data Found!</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Person;
