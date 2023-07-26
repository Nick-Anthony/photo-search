import { useEffect, useState } from "react";
import listCollection, {
  ListCollection,
} from "../api-endpoints/listCollection";
import { Form } from "../App";
import "../styles/Dropdown.css";

interface DropdownProps {
  placeholder: string;
  callback: Function;
  data?: Form;
  showPhoto: boolean;
}

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="7"
      viewBox="0 0 10 7"
      fill="none"
    >
      <path
        d="M5.744 6.17159C5.34666 6.61401 4.65334 6.61401 4.256 6.17159L0.436019 1.91818C-0.142142 1.27442 0.314743 0.249999 1.18002 0.249999L8.81999 0.25C9.68526 0.25 10.1421 1.27442 9.56398 1.91818L5.744 6.17159Z"
        fill="#050417"
      />
    </svg>
  );
};

function Dropdown(props: DropdownProps) {
  const { placeholder, callback, data, showPhoto } = props;
  const [showMenu, setShowMenu] = useState(false);
  const [list, setList] = useState<ListCollection>();

  useEffect(() => {
    const handler = () => setShowMenu(false);

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });

  useEffect(() => {
    listCollection().then((c) => setList(c));
  }, []);

  const getDisplay = () => {
    if (data?.collection) {
      return data?.collection.name;
    }
    return placeholder;
  };

  const handleMenuClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };
  return (
    <div className="test">
      <div className="dropdown-container">
        <div onClick={handleMenuClick} className="dropdown-input">
          <div
            className={`dropdown-selected-${
              data?.collection ? "value" : placeholder
            }`}
          >
            {getDisplay()}
          </div>
          <div className="dropdown-tools">
            <div className="dropdown-tool">
              <Icon />
            </div>
          </div>
        </div>
        {showMenu &&
          !showPhoto &&
          list &&
          list.results.map((collection) => (
            <div
              key={collection.id}
              className={
                data?.collection?.name === collection.title
                  ? "dropdown-item selected"
                  : "dropdown-item"
              }
              onClick={() => callback(collection.id, collection.title)}
            >
              {collection.title}
            </div>
          ))}
      </div>
    </div>
  );
}
export default Dropdown;
