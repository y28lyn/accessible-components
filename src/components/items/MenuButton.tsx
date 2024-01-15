import React, { useState, useRef, useEffect } from "react";

interface MenuButtonProps {
  label: string;
  menuItems: string[];
}

const MenuButton: React.FC<MenuButtonProps> = ({ label, menuItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setFocusedIndex(isMenuOpen ? -1 : 0);
  };

  const handleMenuItemClick = (index: number) => {
    // Handle menu item click logic here
    console.log(`Clicked on menu item: ${menuItems[index]}`);
    closeMenu();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setFocusedIndex((prevIndex) =>
          prevIndex < menuItems.length - 1 ? prevIndex + 1 : 0
        );
        break;
      case "ArrowUp":
        event.preventDefault();
        setFocusedIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : menuItems.length - 1
        );
        break;
      case "Enter":
      case "Space":
        event.preventDefault();
        if (isMenuOpen && focusedIndex !== -1) {
          handleMenuItemClick(focusedIndex);
        } else {
          handleButtonClick();
        }
        break;
      case "Escape":
        event.preventDefault();
        closeMenu();
        break;
      default:
        // Handle other key presses here if needed
        break;
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setFocusedIndex(-1);
    menuButtonRef.current?.focus();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="p-6 relative inline-block text-left">
      <button
        ref={menuButtonRef}
        onClick={handleButtonClick}
        onKeyDown={handleKeyDown}
        aria-haspopup="true"
        aria-controls="menu"
        aria-expanded={isMenuOpen}
        className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        {label} {isMenuOpen ? "▲" : "▼"}
      </button>
      {isMenuOpen && (
        <ul
          ref={menuRef}
          id="menu"
          role="menu"
          aria-labelledby="menuButton"
          tabIndex={-1}
          className="p-2 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          {menuItems.map((item, index) => (
            <li
              key={index}
              role="menuitem"
              tabIndex={index === focusedIndex ? 0 : -1}
              onClick={() => handleMenuItemClick(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === "Space") {
                  e.preventDefault();
                  handleMenuItemClick(index);
                }
              }}
              aria-activedescendant={
                index === focusedIndex ? `menuitem-${index}` : undefined
              }
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuButton;
