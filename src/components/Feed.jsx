import React, { useContext, useEffect } from "react";

import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
const Feed = () => {
  const { loading, searchResults } = useContext(Context);

    useEffect(() => {
        document.getElementById("root").classList.remove("custom-h");
    }, []);
  return (
    <div>
              <div className="flex flex-row h-[calc(100%-56px)]">
              <LeftNav />
            <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">

            </div>
        </div>
    </div>
  )
}

export default Feed
