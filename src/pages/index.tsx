'use client';

import { i18n } from "i18n.config";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.location.href = `/${i18n.defaultLocale}`
  }, [])

  return
};

export default Home;
