import { useEffect, useState } from "react";
import listCollection, {
  ListCollection,
} from "../api-endpoints/listCollection";
import "../styles/Dropdown.css";

interface DropdownProps {
  placeholder: string;
}

const Icon = () => {
  return (
    <svg height="20" width="20" viewBox="0 0 20 20">
      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
    </svg>
  );
};

function Dropdown(props: DropdownProps) {
  const { placeholder } = props;
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
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
    if (selectedValue) {
      return selectedValue;
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
          <div className="dropdown-selected-value">{getDisplay()}</div>
          <div className="dropdown-tools">
            <div className="dropdown-tool">
              <Icon />
            </div>
          </div>
        </div>
        {showMenu &&
          list &&
          list.results.map((collection) => (
            <div
              key={collection.id}
              className={
                selectedValue === collection.title
                  ? "dropdown-item selected"
                  : "dropdown-item"
              }
              onClick={() => setSelectedValue(collection.title)}
            >
              {collection.title}
            </div>
          ))}
      </div>
    </div>
  );
}
export default Dropdown;