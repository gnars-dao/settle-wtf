/* eslint-disable react-hooks/exhaustive-deps */
import type { Result } from "ethers/lib/utils";
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

interface Props {
  data: string | null;
  isImageLoading: boolean;
}

export default function MissedLils({ data, isImageLoading }: Props) {
  const [missedList, setMissedList] = useState<string[]>([]);
  useEffect(() => {
    return () => {
      if (!data || isImageLoading) return;
      if (missedList.length < 3 && data.length > 0) {
        setMissedList((prevArray) => [...prevArray, data]);
      }

      if (missedList.length >= 3 && data.length > 0) {
        setMissedList((prevArray) => {
          prevArray.shift();
          return [...prevArray, data];
        });
      }
    };
  }, [data]);

  if (missedList.length === 0) {
    return <></>;
  }

  return (
    <div className="bg-white hidden md:block">
      <div className="mx-auto max-w-2xl sm:py-4 sm:px-6 md:px-6 lg:max-w-6xl">
        <div>
          <h2 className="text-5xl font-bold text-gray-900 mt-6">
            {" "}
            Missed Gnars
          </h2>
        </div>
        <div className="flex pb-10 pt-1 w-full">
          <div className="flex flex-nowrap gap-x-3 py-8 ">
            {missedList.map((lil, index) => {
              return (
                <div
                  key={index}
                  className="group relative drop-shadow-md max-w-[256px] transition-transform duration-150 ease-in-out hover:scale-105"
                >
                  <div className=" rounded-md bg-gray-200  lg:aspect-none  cursor-pointer">
                    <img
                      width={208}
                      height={208}
                      src={`data:image/svg+xml;base64,${lil}`}
                      className=" object-cover object-center"
                      alt="lil"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
