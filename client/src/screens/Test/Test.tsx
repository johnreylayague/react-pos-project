import React from "react";

// Define the MenuItem type
type MenuItem = {
  id: number;
  menuId: number | null;
  title: string;
  children?: MenuItem[]; // Recursive type for nested menus
};

// Function to organize menu into a nested structure
const buildMenuTree = (menuItems: MenuItem[], parentId: number | null = null): MenuItem[] => {
  return menuItems
    .filter((item) => item.menuId === parentId)
    .map((item) => ({
      ...item,
      children: buildMenuTree(menuItems, item.id),
    }));
};

// Menu Component Props
type MenuProps = {
  menu: MenuItem[];
};

// Menu Component
const Menu: React.FC<MenuProps> = ({ menu }) => {
  // Build nested menu tree
  const menuTree = buildMenuTree(menu);

  // Render menu recursively
  const renderMenu = (items: MenuItem[]) => {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.title}
            {item.children && item.children.length > 0 && renderMenu(item.children)}
          </li>
        ))}
      </ul>
    );
  };

  return <nav>{renderMenu(menuTree)}</nav>;
};

const App: React.FC = () => {
  const menu: MenuItem[] = [
    { id: 1, menuId: null, title: "Home" },
    { id: 2, menuId: 1, title: "Sub Home" },
    { id: 3, menuId: 2, title: "Services" },
    { id: 4, menuId: 3, title: "Web Development" },
    { id: 5, menuId: 3, title: "Graphic Design" },
    { id: 5, menuId: 4, title: "Graphic Design" },
  ];

  return (
    <div>
      <h1>Dynamic Menu</h1>
      <Menu menu={menu} />
    </div>
  );
};

export default App;
