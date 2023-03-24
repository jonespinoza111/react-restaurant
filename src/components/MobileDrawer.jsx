import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MobileDrawer = ({ anchor = "right", cart }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenDrawer((prev) => !prev);
  };

  return (
    <div className="md:hidden flex justify-center items-center">
      <React.Fragment key={anchor}>
        <Button className="flex justify-center items-center" onClick={toggleDrawer()}>
            
            <FontAwesomeIcon className="text-white text-[1.4em]" icon={faBars} />
        </Button>
        <Drawer anchor={anchor} open={openDrawer} onClose={toggleDrawer()}>
          <ul className="nav-links flex flex-col items-start mx-5 pt-5 gap-y-5">
            <li
              className="nav-item flex flex-row justify-center justify-items-center"
              onClick={toggleDrawer()}
            >
              <Link
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                to={"/"}
              >
                Home
              </Link>
            </li>
            <li
              className="nav-item flex flex-row justify-center justify-items-center"
              onClick={toggleDrawer()}
            >
              <Link
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                to={"/menu"}
              >
                Menu
              </Link>
            </li>
            <li
              className="nav-item flex flex-row justify-center justify-items-center"
              onClick={toggleDrawer()}
            >
              <Link
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                to={"/cart"}
              >
                Cart ({cart.length})
              </Link>
            </li>
            <li
              className="nav-item flex flex-row justify-center justify-items-center"
              onClick={toggleDrawer()}
            >
              <Link
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                to={"/order-search"}
              >
                Find an Order
              </Link>
            </li>
          </ul>
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default MobileDrawer;
