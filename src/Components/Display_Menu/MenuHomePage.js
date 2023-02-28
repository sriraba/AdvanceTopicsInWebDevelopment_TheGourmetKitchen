import React, { useState } from "react";
import Menu from "./MenuItems";
import Type from "./Type";
import items from "./Items";
import SearchBar from "material-ui-search-bar";
import Header from "../Header";
import Footer from "../Footer";

const allType = ["", ...new Set(items.map((item) => item.category))];

const MenuHomePage = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [type, setType] = useState(allType);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <Header />
      <section className="menu section">
        <Type
          type={type}
          filterItems={filterItems}
        />
        <div>
          <SearchBar
            onChange={() => console.log('onChange')}
            onRequestSearch={() => console.log('onRequestSearch')}
            style={{
              margin: 'auto',
              maxWidth: 800,
              marginBottom: 45,
              marginTop: -30
            }}

          />
        </div>
        <Menu items={menuItems} />
      </section>
      <Footer />
    </main>
  );
};

export default MenuHomePage;