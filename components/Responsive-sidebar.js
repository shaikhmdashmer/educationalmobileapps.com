import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";

export default function RespSidebar() {
  const [visibleCustomToolbar, setVisibleCustomToolbar] = useState(false);

  return (
    <>
      {/*Prime React Side Bar*/}
      <Sidebar
        visible={visibleCustomToolbar}
        onHide={() => setVisibleCustomToolbar(false)}
        // icons={customIcons}
      >
        {/* Search box */}
        <div id="filterSearch">
          <div className="searchInner">
            <h6 className="formLabel">Search</h6>
            <div className="d-flex justify-content-between">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search Here.."
                className="inputSer"
              />
              <button className="successBtn">Submit</button>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
}
