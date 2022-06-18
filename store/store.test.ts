import { describe, expect, it } from "vitest";
import { store } from "../store";
const { name, count } = store;

describe("store", () => {
  it("works", () => {
    expect(name).toBe("Basil Brush");
  });

  it("works", () => {
    expect(count).toBe(0);
  });
});
