// CORE
import { useState } from "react";
import { useModal } from "react-hooks-use-modal";

// INTERNAL
import HouseModal from "../modal/HouseModal";

// House names and their corresponding numbers, which will be used to fetch the data from API
const houseMap = {
  Stark: "362",
  Targaryen: "378",
  Lannister: "229",
  Baratheon: "17",
  Tyrell: "398",
  Tully: "395",
  Martell: "285",
};

function House({ house }) {
  // HOOKS
  const [currentHouse, setCurrentHouse] = useState({});
  const [Modal, open] = useModal("root", {
    preventScroll: true,
  });

  // METHODS
  const fetchHouseDetails = async (house) => {
    await fetch(
      `https://www.anapioficeandfire.com/api/houses/${houseMap[house]}`
    )
      .then((res) => res.json())
      .then((json) => {
        setCurrentHouse(json);
      })
      .catch((err) => console.err(err));
  };

  const openModal = async (e) => {
    fetchHouseDetails(e.target.innerText);
    open();
  };

  return (
    <div>
      <div className={`house ${house.toLowerCase()}`}>
        <div className="house-inner">
          <div className="house-name" onClick={openModal}>
            {house}
          </div>
          <HouseModal Modal={Modal} house={currentHouse} />
        </div>
      </div>
    </div>
  );
}

export default House;
