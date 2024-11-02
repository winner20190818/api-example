import { useMemo } from "react";
import { dictionaries } from "./api/dictionaries";
import "./App.css";
import { Dict, DictItem } from "./core/dict";
import { useLocale } from "./core/lang";
import logo from "./logo.svg";

//dictionary use case
export function useDict<T extends string | number>(key: string) {
  const locale = useLocale();
  const data = dictionaries[key];
  return useMemo(() => {
    const items: DictItem<T>[] =
      data?.map((item) => {
        const dict = item.dict?.[locale];
        const res: DictItem<T> = {
          value: item.value as any,
          label: dict?.label ?? item.value.toString(),
        };
        if (dict?.tip) {
          res.tip = dict.tip;
        }
        return res;
      }) ?? [];
    return new Dict<T>(...items);
  }, [data, locale]);
}

function App() {
  const genderDict = useDict<InternalProfile.PkgTypesGender>(
    InternalProfile.PkgTypesGender_DICT_KEY
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section>
        <h2>dictionary use case</h2>
        <div>gender: {genderDict.l("male")}</div>
        {genderDict.items.map((item, index) => (
          <div key={item.value}>
            <span>value:</span>
            <span>{item.value}</span>
            <span>label:</span>
            <span>{item.label}</span>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
