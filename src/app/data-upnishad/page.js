"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const page = () => {
  const [data, setData] = React.useState(null);

  const getData = async () => {
    try {
      const res = await fetch(
        "http://10.64.45.186:5000/api/v1/registration?r=true",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZnV0dXJlIHVwbmlzaGFkIiwiYWRtaW4iOnRydWV9.mRd31Jc7A7Z1Z_sKU97EW1FMonLaIhlff99LZVDhoRE",
          },
        },
      );

      const data = await res.json();
      console.log("data from api", data);
      setData(data);
    } catch (err) {
      console.log("error fetching data", err);
    }
  };
  useEffect(() => {
    getData();
    console.log({ data });
  }, []);

  return <div>page</div>;
};

export default page;
