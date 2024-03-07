import React from "react";
import CircleIcon from "@mui/icons-material/Circle";

const Tokenomics = () => {
  return (
    <div className="py-2 px-6">
      <div>
        <div className="bg-white p-3 rounded-lg">
          <p className="text-2xl font-bold my-3 text-[#0f1629]">Tokenomics</p>
          <div className="font-bold text-[#1d1d1d]">Initial Distribution</div>

          <div className="mb-2">
            <div className="my-2">
              <span className="">
                <CircleIcon style={{ height: "10px", color: "#0082ff" }} />
              </span>
              <span>Crowdsale investors: 80%</span>
            </div>
            <div>
              <span className="">
                <CircleIcon style={{ height: "10px", color: "faa002" }} />
              </span>
              <span>Foundation: 20%</span>
            </div>
          </div>
          <div className="p-3 font-medium text-[#3e424a]">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, ullam amet exercitationem non natus facilis alias ex beatae voluptates vel nulla, consectetur molestias quia deserunt voluptate laborum saepe, iusto impedit velit esse dignissimos. Assumenda animi consectetur soluta officiis expedita error autem eveniet, eos tenetur atque esse qui harum doloremque architecto ea. Aliquam, explicabo. Voluptatum nostrum ad nihil cum exercitationem blanditiis harum voluptas dicta quo id quaerat quisquam ipsam iste itaque aperiam eligendi, similique perspiciatis laborum corrupti accusamus molestiae deserunt inventore.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
