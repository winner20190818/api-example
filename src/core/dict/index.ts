import { useMemo } from "react";

export type DictItem<T extends string | number> = {
  value: T;
  label: string;
  tip?: string;
};

export class Dict<T extends string | number = string> {
  readonly items: DictItem<T>[];
  private readonly map: Partial<Record<T, DictItem<T>>>;
  constructor(...items: DictItem<T>[]) {
    this.items = items;
    this.map = itemsToMap(...items);
  }
  l = (value: T) => {
    return this.map[value]?.label ?? value;
  };
}

function itemsToMap<T extends string | number>(...items: DictItem<T>[]): Record<T, DictItem<T>> {
  const m = {} as Record<T, DictItem<T>>;
  items.forEach((d) => (m[d.value] = d));
  return m;
}

type Getter<T> = (item: T) => string;

export function useDictFromList<T>(
  list: T[] | undefined,
  valueGetter: Getter<T>,
  labelGetter: Getter<T>,
  tipGatter?: Getter<T>,
) {
  return useMemo(() => {
    if (!list) {
      return undefined;
    }
    const dict = new Dict(
      ...list.map((item) => {
        const res: DictItem<any> = {
          value: valueGetter(item),
          label: labelGetter(item),
        };
        if (tipGatter) {
          res.tip = tipGatter(item);
        }
        return res;
      }),
    );
    return dict;
  }, [list]);
}
