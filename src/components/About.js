import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const About = () => {
  return (
    <div className="py-2 px-6">
      <div>
        <div className="bg-white p-3 rounded-lg">
          <p className="text-2xl font-bold my-3 text-[#0f1629]">About Bitcoin</p>
          <div className="">
            <p className="font-bold text-base my-1 text-[#0b1426]">What is Bitcoin?</p>
            <div className=" border-b-2 mb-2 pb-3 text-[#3e424a] font-medium">
              Bitcoin's price today is US$16,951.82, with a 24-hour trading
              volume of $19.14 B. BTC is +0.36% in the last 24 hours.It is
              currently -7.70% from its 7-day all-time high of $18,366.66, and
              3.40% from its 7-day all-time low of $16,394.75. BTC has a
              circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
            </div>
          </div>

          <div className="border-b-2 pb-1 my-4">
            <p className="font-bold text-base my-1">
              Lorem ipsum dolor sit amet
            </p>
            <div>
              <p className=" mb-2 pb-3 text-[#3e424a] font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                porro laboriosam hic, delectus harum, tempora minus suscipit non
                beatae vel earum distinctio accusantium nemo in deserunt fugiat
                quisquam ut eligendi! Corrupti voluptatem nam exercitationem ex
                quae, minus, accusantium error provident repudiandae, optio
                nisi! Repudiandae totam at commodi eum, nulla eos ea iure labore
                suscipit repellendus illum itaque nostrum maiores earum!
              </p>
              <p className=" mb-2 pb-3 text-[#3e424a] font-medium">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                minus repellendus dolorum esse reiciendis earum error quas
                facilis dignissimos atque, sunt maiores quam quasi nisi dolorem
                optio! Amet voluptatem magnam asperiores porro similique totam
                expedita sed officiis odit dolore dolores aut non accusamus quam
                quis commodi, ullam est, iusto tenetur repudiandae illum
                corrupti? Suscipit possimus nemo obcaecati magni qui error,
                soluta ea quas rerum sapiente quos molestias exercitationem?
                Fugit, laudantium. Beatae in iure fugit, placeat ratione
                architecto ipsum quia illo!
              </p>

              <p className=" mb-2 pb-3 text-[#3e424a] font-medium">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Molestiae alias nihil minima ut, voluptate sit laudantium,
                eligendi enim voluptatem aspernatur expedita harum mollitia
                quibusdam vitae quos corrupti est beatae sapiente voluptatibus
                asperiores sunt? Sunt quaerat suscipit deleniti voluptate sint
                provident?
              </p>
            </div>
          </div>

          <div>
            <p className="font-bold text-xl my-1 text-[#0f1629]">Already Holding Bitcoin?</p>
            <div className="my-5 flex flex-row justify-around border-b-2 pb-3">
              <div className="flex flex-col border-2 bg-gradient-to-r from-[#6ee2a5] to-[#1e72ac] p-5 rounded-xl mx-3 items-center w-[50%]">
                <p className="font-bold text-white text-lg">
                  Calculate your Profits
                </p>
                <button
                  className="bg-white
                    px-4 py-1 my-2 items-center rounded-md text-sm font-bold flex"
                >
                  Check Now
                  <span>
                    <ArrowForwardIcon />
                  </span>
                </button>
              </div>
              <div className="flex flex-col border-2 bg-gradient-to-r from-[#fa7a56] to-[#f2433a] p-5 rounded-xl mx-3 items-center w-[50%]">
                <p className="font-bold text-white text-lg">
                  Calculate your tax liability
                </p>
                <button
                  className="bg-white
                    px-4 py-1 my-2 items-center rounded-md text-sm font-bold flex"
                >
                  Check Now
                  <span>
                    <ArrowForwardIcon />
                  </span>
                </button>
              </div>
            </div>
            <div>
                <p className="text-[#3e424a] font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam dolor, eius alias excepturi distinctio officiis tenetur optio dolore expedita labore nobis consectetur non eveniet cum neque earum nemo voluptatibus impedit. Porro tenetur, a ab obcaecati rerum perferendis. Eos, earum laudantium.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
