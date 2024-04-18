import React, { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
import axios from "axios";
import { baseUrl } from "../../baseUrl";
export default function MyCarousel() {
  const [file, setFile] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/carousel`);
      setFile(response.data);
      console.log(response.data)
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="h-56 sm:h-64 md:h-80 lg:h-[700px] xl:h-100 2xl:h-svh">
  <Carousel className="overflow-x-hidden"> 
        {file.map((item, index) => (
          <img
            key={index}
            src={`/uploads/carousel/${item.file_name}`}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </Carousel>
    </div>
  );
}

