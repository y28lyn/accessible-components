import { useState, useRef, useEffect } from "react";

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
    if (!isMenuOpen) {
      setFocusedIndex(0);
    } else {
      setFocusedIndex(-1);
      menuButtonRef.current?.focus();
    }
  };

  const handleMenuItemClick = (index: number) => {
    console.log(`Clicked on menu item: ${menuItems[index]}`);
    closeMenu();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        if (isMenuOpen) {
          setFocusedIndex((prevIndex) =>
            prevIndex < menuItems.length - 1 ? prevIndex + 1 : 0,
          );
        } else {
          handleButtonClick();
        }
        break;
      case "ArrowUp":
        event.preventDefault();
        if (isMenuOpen) {
          setFocusedIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : menuItems.length,
          );
        } else {
          handleButtonClick();
        }
        break;
      case "Enter":
      case "Space":
        event.preventDefault();
        if (isMenuOpen) {
          handleMenuItemClick(focusedIndex);
        } else {
          handleButtonClick();
        }
        break;
      case "Escape":
        event.preventDefault();
        closeMenu();
        break;
      case "Home":
        event.preventDefault();
        setFocusedIndex(0);
        break;
      case "End":
        event.preventDefault();
        setFocusedIndex(menuItems.length - 1);
        break;
      default:
        if (/^[a-zA-Z]$/.test(event.key)) {
          event.preventDefault();
          const char = event.key.toLowerCase();
          const foundIndex = menuItems.findIndex((item) =>
            item.toLowerCase().startsWith(char),
          );
          if (foundIndex !== -1) {
            setFocusedIndex(foundIndex);
          }
        }
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

  useEffect(() => {
    if (isMenuOpen && focusedIndex !== -1) {
      const focusedItem = menuRef.current?.children[
        focusedIndex
      ] as HTMLElement;

      if (focusedItem) {
        focusedItem.focus();
      }
    }
  }, [focusedIndex, isMenuOpen]);

  return (
    <div className="p-6 relative inline-block text-left">
      <button
        ref={menuButtonRef}
        onClick={handleButtonClick}
        onKeyUp={handleKeyDown}
        aria-haspopup="true"
        aria-controls="menu"
        aria-expanded={isMenuOpen}
        tabIndex={0}
        className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:ring focus:outline-none focus:ring"
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
              tabIndex={0}
              onClick={() => handleMenuItemClick(index)}
              onKeyUp={(e) => {
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
