// src/components/MainLayout.jsx
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

/**
 * Find the nearest ancestor that is actually scrollable (vertical).
 * Falls back to document.scrollingElement / document.documentElement.
 */
function getScrollableParent(startEl = document.body) {
  let el = startEl;
  while (el && el !== document.body && el !== document.documentElement) {
    const style = getComputedStyle(el);
    const overflowY = style.overflowY;
    const canScroll = (overflowY === "auto" || overflowY === "scroll" || overflowY === "overlay")
      && el.scrollHeight > el.clientHeight;
    if (canScroll) return el;
    el = el.parentElement;
  }
  // fallback to top-level scrolling element (works for most browsers)
  return document.scrollingElement || document.documentElement;
}

/**
 * Instantly jump a scrollable container to a given absolute top position (no smooth).
 * This uses behavior: "auto" and temporarily forces scroll-behavior on the container
 * if needed (but we directly set scrollTop for elements which is reliable).
 */
function instantScrollContainerTo(container, top) {
  if (!container) return;
  // If container is the document scrolling element, use window.scrollTo
  const isDoc = container === document.scrollingElement || container === document.documentElement;
  if (isDoc) {
    // temporarily override html style to be safe
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    try {
      html.style.scrollBehavior = "auto";
      window.scrollTo({ top: Math.max(0, Math.round(top)), left: 0, behavior: "auto" });
    } finally {
      // restore on next frame
      requestAnimationFrame(() => { html.style.scrollBehavior = prev || ""; });
    }
  } else {
    // For element containers, set scrollTop directly (instant)
    container.scrollTop = Math.max(0, Math.round(top));
  }
}

/**
 * Jump to the top of the page (or top of the scroll container containing the #top element).
 * Updates the URL hash to #top without triggering default browser scroll behavior.
 */
function jumpToTopInstantly() {
  const topEl = document.getElementById("top");
  const startEl = topEl || document.body;
  const scrollable = getScrollableParent(startEl);

  // If the scrollable container is an ancestor of topEl, compute the absolute offset relative to that container
  let targetTop = 0;
  if (scrollable && topEl && scrollable !== document.scrollingElement && scrollable.contains(topEl)) {
    // compute offset of topEl relative to the container's scrollTop origin
    const containerRect = scrollable.getBoundingClientRect();
    const elRect = topEl.getBoundingClientRect();
    // current scrollTop + distance from container top to element top
    const absoluteTop = elRect.top + scrollable.scrollTop - containerRect.top;
    targetTop = Math.max(0, Math.round(absoluteTop));
  } else {
    // default to top of document
    targetTop = 0;
  }

  instantScrollContainerTo(scrollable, targetTop);

  // update URL hash without default scrolling
  const newHash = "#top";
  if (window.location.hash !== newHash) {
    history.pushState(null, "", newHash);
  }
}

export default function MainLayout() {
  return (
    <>
      <NavBar />

      <main className="mx-auto max-w-6xl px-4">
        <Outlet />
      </main>

      <Footer />

      {/* Back-to-top button: uses the instant jump helper */}
      <button
        type="button"
        onClick={() => {
          jumpToTopInstantly();
        }}
        className="fixed bottom-6 right-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-hippoBlue text-ink shadow-soft text-2xl"
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  );
}
