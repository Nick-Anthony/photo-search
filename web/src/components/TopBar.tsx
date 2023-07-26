import { Dispatch, FormEventHandler, SetStateAction } from "react";
import { Form } from "../App";
import "../styles/TopBar.css";
import { ReactComponent as TopBarIcon } from "../topBarIcon.svg";
import Dropdown from "./Dropdown";

interface TopBarProps {
  form?: Form;
  setForm: Dispatch<SetStateAction<Form>>;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  showPhoto: boolean;
}

function TopBar(props: TopBarProps) {
  const { form, setForm, handleSubmit, showPhoto } = props;

  function handleCollection(id: number, name: string) {
    setForm({ ...form, collection: { id: id, name: name } });
  }

  return (
    <form onSubmit={handleSubmit} className="topBar">
      <TopBarIcon className="icon" />
      <input
        className={`text-input-${form?.query ? "filled" : "empty"}`}
        type="text"
        value={form?.query}
        onChange={(e) => setForm({ ...form, query: e.target.value })}
        placeholder="Query"
      />
      <Dropdown
        placeholder="Collections"
        callback={handleCollection}
        data={form}
        showPhoto={showPhoto}
      />
      <button type="submit">Search</button>
    </form>
  );
}
export default TopBar;
