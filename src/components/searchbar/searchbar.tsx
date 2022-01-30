import React from "react";
import "./searchbar.scss";

interface SidebarProps {
  startResearch: string;
}

const Searchbar = (props: SidebarProps) => {
  const onTrigger = (event: any) => {
    props.startResearch(event.target.country.value);
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onTrigger}>
        <input type="text" name="country" placeholder="Search for a country" />
        <br></br>
        <br></br>
        <input type="submit" value="Submit" />
        <br></br>
        <br></br>
      </form>
    </div>
  );
};

export default Searchbar;
