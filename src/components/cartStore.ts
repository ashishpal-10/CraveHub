"use client";

import { StaticImageData } from "next/image";
import { useEffect, useSyncExternalStore } from "react";
import { featuredProducts } from "./data";

export type CartItem = {
  key: string;
  id: number;
  title: string;
  img: StaticImageData;
  unitPrice: number;
  quantity: number;
  option?: string;
};

export const STORAGE_KEY = "cravehub-cart";
export const DELIVERY_FEE = 25;
export const FREE_DELIVERY_THRESHOLD = 199;

const byId = (id: number) => featuredProducts.find((p) => p.id === id)!;

const seedItems: CartItem[] = [
  {
    key: "1|Regular",
    id: 1,
    title: byId(1).title,
    img: byId(1).img,
    unitPrice: byId(1).price,
    quantity: 1,
    option: byId(1).options?.[0].title,
  },
  {
    key: "8|",
    id: 8,
    title: byId(8).title,
    img: byId(8).img,
    unitPrice: byId(8).price,
    quantity: 2,
  },
  {
    key: "5|",
    id: 5,
    title: byId(5).title,
    img: byId(5).img,
    unitPrice: byId(5).price,
    quantity: 1,
  },
];

/* localStorage-backed cart store */
type Snapshot = { loaded: boolean; items: CartItem[] };

const initialSnapshot: Snapshot = { loaded: false, items: [] };
let snapshot = initialSnapshot;
const listeners = new Set<() => void>();

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

const getSnapshot = () => snapshot;
const getServerSnapshot = () => initialSnapshot;

const notify = () => listeners.forEach((listener) => listener());

const commit = (items: CartItem[]) => {
  snapshot = { loaded: true, items };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  notify();
};

const loadStore = () => {
  if (snapshot.loaded) return;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null) {
      commit(seedItems);
    } else {
      const parsed = JSON.parse(raw);
      commit(Array.isArray(parsed) ? parsed : []);
    }
  } catch {
    commit(seedItems);
  }
};

export const addItem = (input: {
  id: number;
  title: string;
  img: StaticImageData;
  unitPrice: number;
  quantity: number;
  option?: string;
}) => {
  loadStore();
  const key = `${input.id}|${input.option ?? ""}`;
  const existing = snapshot.items.find((item) => item.key === key);
  const items = existing
    ? snapshot.items.map((item) =>
        item.key === key
          ? {
              ...item,
              quantity: Math.min(10, item.quantity + input.quantity),
            }
          : item,
      )
    : [...snapshot.items, { key, ...input }];
  commit(items);
};

export const updateQty = (key: string, delta: number) => {
  commit(
    snapshot.items.map((item) =>
      item.key === key
        ? {
            ...item,
            quantity: Math.min(10, Math.max(1, item.quantity + delta)),
          }
        : item,
    ),
  );
};

export const removeItem = (key: string) =>
  commit(snapshot.items.filter((item) => item.key !== key));

export const useCart = () => {
  const { loaded, items } = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  useEffect(() => {
    loadStore();
  }, []);

  return { loaded, items, addItem, updateQty, removeItem };
};
