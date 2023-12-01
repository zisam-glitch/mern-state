import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";
import Search from "../components/Search";
import Header from "../components/Header";

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=4");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=4");
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    <>
      <Header />
      <div>
        {/* top */}
        <div className="bg-center bg-cover bg-no-repeat	bg-[url(https://images.ctfassets.net/02vwvgr6spsr/3jIjVuOl8EzGMnZ08S1kJh/51b3283345bb95b14ae0bdae24ed2d29/Stocksy_txpd25ede67ULp300_Large_2864818.jpg?w=1440&fm=webp&q=65)] ">
          <div className="bg-overley  flex flex-col gap-4 p-28 px-3 max-w-full mx-auto">
            <h1 className="text-white font-bold text-3xl lg:text-4xl text-center">
              We know what a home is really worth
            </h1>
            <div className="text-white font-semibold text-center text-xs sm:text-lg">
              Find homes to buy or rent and check house prices
            </div>

            <Search />
          </div>
        </div>
        <div className="flex items-center gap-2 px-10 py-24">
          <div className="w-1/2">
            <h1 className="font-semibold text-3xl pb-4">Value your home</h1>
            <p className="text-lg text-black pb-5 ">Get an instant online valuation to see what it's worth.</p>
            <button className="text-black flex gap-2 justify-center items-center bg-white py-2 px-5 outline outline-black outline-2 rounded hover:shadow-lg hover:bg-lightblue hover:outline-lightblue hover:text-white">
              <span className="font-medium text-lg">Get an instant valuation</span>
            </button>
          </div>
          <div className="w-1/2 ">
            <img
              className="rounded"
              src="https://res.cloudinary.com/db1i46uiv/image/upload/c_crop,w_1600,h_800/v1700506721/chewy-3cAMUE3YAO8-unsplash_1_sejqkp.jpg"
              alt=""
            />
          </div>
        </div>
        {/* swiper */}
        <Swiper navigation>
          {offerListings &&
            offerListings.length > 0 &&
            offerListings.map((listing) => (
              <SwiperSlide>
                <div
                  style={{
                    background: `url(${listing.imageUrls[0]}) center no-repeat`,
                    backgroundSize: "cover",
                  }}
                  className="h-[500px]"
                  key={listing._id}
                ></div>
              </SwiperSlide>
            ))}
        </Swiper>

        {/* listing results for offer, sale and rent */}

        <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
          {offerListings && offerListings.length > 0 && (
            <div className="">
              <div className="my-3">
                <h2 className="text-2xl font-semibold text-slate-600">
                  Recent offers
                </h2>
                <Link
                  className="text-sm text-blue-800 hover:underline"
                  to={"/search?offer=true"}
                >
                  Show more offers
                </Link>
              </div>
              <div className="flex flex-wrap gap-4">
                {offerListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          )}
          {rentListings && rentListings.length > 0 && (
            <div className="">
              <div className="my-3">
                <h2 className="text-2xl font-semibold text-slate-600">
                  Recent places for rent
                </h2>
                <Link
                  className="text-sm text-blue-800 hover:underline"
                  to={"/search?type=rent"}
                >
                  Show more places for rent
                </Link>
              </div>
              <div className="flex flex-wrap gap-4">
                {rentListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          )}
          {saleListings && saleListings.length > 0 && (
            <div className="">
              <div className="my-3">
                <h2 className="text-2xl font-semibold text-slate-600">
                  Recent places for sale
                </h2>
                <Link
                  className="text-sm text-blue-800 hover:underline"
                  to={"/search?type=sale"}
                >
                  Show more places for sale
                </Link>
              </div>
              <div className="flex flex-wrap gap-4">
                {saleListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
