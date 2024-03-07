import React from "react";
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";

const Team = () => {
  return (
    <div className="py-2 px-6">
      <div>
        <div className="bg-white p-3 rounded-">
          <p className="text-2xl px-2 font-bold my-3">Team</p>
          <div className=" px-2">
            <p className="text-[#3e424a] font-medium">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
              repudiandae at facere quae laboriosam itaque assumenda
              repellendus, unde sed minus magni est, ea magnam voluptatem.
            </p>
          </div>
          <div>
            <div className="p-2 bg-[#e8f4fd] my-3 rounded-lg px-5 flex space-x-5 w-[100%]">
              <div
                className="flex
                flex-col justify-center w-[20%]"
              >
                <img
                  className="h-20 w-20 object-cover rounded-lg my-2"
                  src={user1}
                  alt=""
                />
                <p className="font-bold text-[#0f1629]">John Smith</p>
                <p className="text-xs font-light text-[#788f9b]">Designation here</p>
              </div>
              <p className="w-[80%] py-3 text-sm flex items-center text-[#0f1629]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                optio inventore laborum, vitae amet veritatis libero excepturi
                in nostrum, cumque cum distinctio? Repellendus numquam quibusdam
                dolores cupiditate praesentium dignissimos.Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="p-2 bg-[#e8f4fd] my-3 rounded-lg px-5 flex space-x-5 w-[100%]">
              <div
                className="flex
                flex-col justify-center w-[20%]"
              >
                <img
                  className="h-20 w-20 object-cover rounded-lg my-2"
                  src={user2}
                  alt=""
                />
                <p className="font-bold text-[#0f1629]">Elina Williams</p>
                <p className="text-xs font-light text-[#788f9b]">Designation here</p>
              </div>
              <p className="w-[80%] py-3 text-sm flex items-center text-[#0f1629]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                optio inventore laborum, vitae amet veritatis libero excepturi
                in nostrum, cumque cum distinctio? Repellendus numquam quibusdam
                dolores cupiditate praesentium dignissimos.Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="p-2 bg-[#e8f4fd] my-3 rounded-lg px-5 flex space-x-5 w-[100%]">
              <div
                className="flex
                flex-col justify-center w-[20%]"
              >
                <img
                  className="h-20 w-20 object-cover rounded-lg my-2"
                  src={user3}
                  alt=""
                />
                <p className="font-bold text-[#0f1629]">John Smith</p>
                <p className="text-xs font-light text-[#788f9b]">Designation here</p>
              </div>
              <p className="w-[80%] py-3 text-sm flex items-center text-[#0f1629]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                optio inventore laborum, vitae amet veritatis libero excepturi
                in nostrum, cumque cum distinctio? Repellendus numquam quibusdam
                dolores cupiditate praesentium dignissimos.Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
