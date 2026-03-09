import React from "react";
import { vi } from "vitest";
import "@testing-library/jest-dom/vitest";

(globalThis as unknown as { React: typeof React }).React = React;

// jsdom no implementa canvas.getContext('2d'); mock para ElectricBorder y otros
const noop = () => {};
const mockCanvasContext = {
  scale: noop,
  setTransform: noop,
  clearRect: noop,
  beginPath: noop,
  moveTo: noop,
  lineTo: noop,
  closePath: noop,
  stroke: noop,
  get strokeStyle() {
    return "";
  },
  set strokeStyle(_: string) {},
  get lineWidth() {
    return 0;
  },
  set lineWidth(_: number) {},
  get lineCap() {
    return "";
  },
  set lineCap(_: string) {},
  get lineJoin() {
    return "";
  },
  set lineJoin(_: string) {},
};
if (typeof HTMLCanvasElement !== "undefined") {
  HTMLCanvasElement.prototype.getContext = vi.fn(() => mockCanvasContext) as unknown as typeof HTMLCanvasElement.prototype.getContext;
}

// jsdom no tiene ResizeObserver (lo usa ElectricBorder)
class MockResizeObserver {
  observe = vi.fn();
  disconnect = vi.fn();
  unobserve = vi.fn();
}
if (typeof globalThis.ResizeObserver === "undefined") {
  (globalThis as unknown as { ResizeObserver: typeof MockResizeObserver }).ResizeObserver = MockResizeObserver;
}

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...rest
  }: {
    children: React.ReactNode;
    href: string;
  }) => React.createElement("a", { href, ...rest }, children),
}));

vi.mock("next/image", () => ({
  default: (props: { src: string; alt: string }) =>
    React.createElement("img", { src: props.src, alt: props.alt }),
}));

vi.mock("@/config/fonts", () => ({
  spaceGrotesk: { className: "", variable: "--font-sans" },
  playpenSansThai: { className: "", variable: "--font-playpen" },
}));
