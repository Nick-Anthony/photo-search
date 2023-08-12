import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import "../styles/TopBar.css";
import { ReactComponent as TopBarIcon } from "../topBarIcon.svg";
import Dropdown from "./Dropdown";

export interface Form {
  query?: string;
  collectionId?: number;
}

function TopBar() {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState<Form>({
    query: "",
  });

  useEffect(() => {
    const query = searchParams.get("query") || "";
    const collectionId = searchParams.get("collectionId");

    if (collectionId) {
      setForm({ query: query, collectionId: parseInt(collectionId) });
    }
  }, [searchParams]);

  const navigate = useNavigate();

  function handleCollection(id: number) {
    setForm({ ...form, collectionId: id });
  }

  return (
    <form onSubmit={handleSubmit} className="topBar">
      <Link to={"/"}>
        <TopBarIcon className="icon" />
      </Link>
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
      />
      <button type="submit">Search</button>
    </form>
  );

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const params = {
      query: form?.query,
      collectionId: form?.collectionId?.toString(),
    };
    const urlParams = new URLSearchParams(params as Record<string, string>);

    navigate(`/?${urlParams.toString()}`);
  }
}
export default TopBar;
