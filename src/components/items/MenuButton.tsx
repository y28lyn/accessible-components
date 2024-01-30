import Menu from "../ui/Menu";

type MenuButtonProps = {
  label: string;
  menuItems: string[];
};

const MenuButton = ({ label, menuItems }: MenuButtonProps) => {
  const handleMenuItemClick = (index: number) => {
    console.log(`Clicked on menu item: ${menuItems[index]}`);
  };

  return (
    <div className="p-6 relative inline-block text-left">
      <Menu items={menuItems} wrapping={true}>
        <Menu.Button
          aria-controls="menu"
          className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:ring focus:outline-none focus:ring"
          id="menuButton"
        >
          {label}
        </Menu.Button>

        <Menu.Popup
          aria-labelledby="menuButton"
          className="p-2 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          id="menu"
        >
          {menuItems.map((text, index) => (
            <Menu.Item
              index={index}
              key={text}
              onClick={() => handleMenuItemClick(index)}
              onKeyUp={(event) => {
                if (event.key === "Enter" || event.key === "Space") {
                  event.preventDefault();
                  handleMenuItemClick(index);
                }
              }}
            >
              {text}
            </Menu.Item>
          ))}
        </Menu.Popup>
      </Menu>
    </div>
  );
};

export default MenuButton;
