import Fuse from "fuse.js";
import type { CollectionEntry } from "astro:content";
import { useEffect, useState, useRef } from "react";
import { slugifyStr } from "../utils/slugify";

export type SearchItem = {
  title: string;
  description: string;
  data: CollectionEntry<"posts">;
};

interface Props {
  searchList: SearchItem[];
}

interface SearchResult {
  item: SearchItem;
  refIndex: number;
}

function SearchItemList({item, refIndex}: SearchResult) {
  return <>
    <li key={`${refIndex}`}>
      <a
        className=""
        href={`/posts/${slugifyStr(item.data.data.title)}`}
        key={`${refIndex}-${slugifyStr(item.data.data.title)}`}
      >
        <span
          key={`${refIndex - 2}-${slugifyStr(item.data.data.title)}-2`}
          className="text-sm"
        >
          {item.title}
        </span>
      </a>
      <p
        key={`${refIndex - 3}-${slugifyStr(item.data.data.title)}-3`}
        className="text-xs"
      >
        {item.description}
      </p>
    </li>
  </>
}

export default function SearchBar({ searchList }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputVal, setInputVal] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[] | null>(
    null
  );

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputVal(e.currentTarget.value);
  };

  const fuse = new Fuse(searchList, {
    keys: ["title", "description"],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.5,
  });

  useEffect(() => {
    // if URL has search query,
    // insert that search query in input field
    const searchUrl = new URLSearchParams(window.location.search);
    const searchStr = searchUrl.get("q");
    if (searchStr) setInputVal(searchStr);

    // put focus cursor at the end of the string
    setTimeout(function () {
      inputRef.current!.selectionStart = inputRef.current!.selectionEnd =
        searchStr?.length || 0;
    }, 50);
  }, []);

  useEffect(() => {
    // Add search result only if
    // input value is more than one character
    let inputResult = inputVal.length > 1 ? fuse.search(inputVal) : [];
    setSearchResults(inputResult);

    // Update search string in URL
    if (inputVal.length > 0) {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set("q", inputVal);
      const newRelativePathQuery =
        window.location.pathname + "?" + searchParams.toString();
      history.pushState(null, "", newRelativePathQuery);
    } else {
      history.pushState(null, "", window.location.pathname);
    }
  }, [inputVal]);

  return (
    <>
      <label
        htmlFor="default-search"
        className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Search
      </label>
      <div className="relative mt-10">
        <input
          id="default-search"
          className="block w-full rounded-lg bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-gray-600 dark:bg-[rgba(23,23,23,0.8)] dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Search Posts..."
          type="text"
          name="search"
          value={inputVal}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          ref={inputRef}
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
      </div>

      <div className={ inputVal.length > 1 ? "mt-3 mb-5 rounded-md bg-gray-100 dark:bg-[#171717] py-3 px-2" : ""}>
        {inputVal.length > 1 && (
          <div className="mt-4 text-[14px]">
            Found {searchResults?.length}
            {searchResults?.length && searchResults?.length === 1
              ? " result"
              : " results"}{" "}
            for '{inputVal}'
          </div>
        )}

        <ul>
          {searchResults &&
            searchResults.map(({ item, refIndex }) => (
              <SearchItemList key={refIndex} item={item} refIndex={refIndex} />
            ))}
        </ul>
      </div>
    </>
  );
}
