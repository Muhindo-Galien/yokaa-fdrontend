import React from "react";
import { TopNav, LeftNav } from "../modules/NavBar";
import { useRecoilValue } from "recoil";
import { leftNavPinedAtom } from "../lib/atoms";
import TopSongs from "../modules/TopSongs/TopSongs";
import NewReleases from "../modules/NewReleases";

const LandingPage = () => {
  const isLeftNavPined = useRecoilValue(leftNavPinedAtom);

  return (
    <>
      <div
        className={`relative flex flex-col ${!isLeftNavPined ? "ml-28 transition-all" : "transition-all ml-72"
          } mobile:ml-5`}
      >
        <TopNav />
        <NewReleases />
        <TopSongs />
      </div>
      <LeftNav />
    </>
  );
};

export default LandingPage;
