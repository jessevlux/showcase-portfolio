"use client";

import { useEffect } from "react";
import { restoreScrollPosition } from "@/utils/scrollManager";

export default function ScrollRestorer() {
  useEffect(() => {
    restoreScrollPosition();
  }, []);

  return null;
}
