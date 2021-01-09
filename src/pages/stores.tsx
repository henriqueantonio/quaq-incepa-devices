import React, { useEffect } from "react";

// import { Container } from './styles';

const Stores: React.FC = () => {
  useEffect(() => {
    const device = navigator.userAgent;

    if (/android/i.test(device)) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.ensight.quaq";
      return;
    }

    if (/iPad|iPhone|iPod/.test(device)) {
      window.location.href = "https://apps.apple.com/br/app/quaq/id1533732616";
      return;
    }
  }, []);
  return <h1>Aguarde enquanto redirecionamos...</h1>;
};

export default Stores;
