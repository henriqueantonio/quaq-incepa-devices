import React, { useState, useEffect } from "react";

interface Column {
  id: "marca" | "modelo";
  label: string;
}

const columns: Column[] = [
  { id: "marca", label: "Marca" },
  { id: "modelo", label: "Modelo" },
];

interface Data {
  marca: string;
  modelo: string;
}

const rows: Data[] = [
  {
    marca: "Asus",
    modelo: "PadFone X mini (PF450CL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 3 Ultra (ZU680KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Max Plus M2 (ZB634KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Max Shot (ZB634KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone AR (ZS571KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone AR",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Ares (ZS572KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone V",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Live (ZB501KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone V Live",
  },
  {
    marca: "Asus",
    modelo: "ROG Phone ll",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 7 / 7 Pro (ZS670KS/ZS671KS)",
  },
  {
    marca: "Asus",
    modelo: "ROG Phone 3",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 6 (ZS630KL) (WW) / 6Z (ZS630KL) (IN)",
  },
  {
    marca: "Asus",
    modelo: "PadFone mini",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 5 (A500CG)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 5 (A500CG)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 6",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 4 (A400CG)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 5",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 5 (A501CG)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 5 (A502CG)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 5 LTE (A500KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 4 (A450CG)",
  },
  {
    marca: "Asus",
    modelo: "飛馬 (T500TLT)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Go (T500)",
  },
  {
    marca: "Asus",
    modelo: "飛馬 5000 (T551TLC)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Go (ZB552KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 3 Max (ZC520TL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 3 Max (ZC520TL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Go (ZB450KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Go (ZB500KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Go (ZB500KG)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 3 Max (ZC553KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 3s Max (ZC521TL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 4 Max (ZC520KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 4 Max (ZC520KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 4 Selfie Lite (ZB520KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 4 Max (ZC520KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 4 Max (ZC520KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 4 Max (ZC554KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 4 Max (ZC554KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 4 Max (ZC554KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 4 Selfie (ZD553KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Live Plus (ZB553KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Live Plus (ZB553KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Max M1 (ZB556KL) / ZenFone Max M1/M2/M3 (ZB555KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Max M1 (ZB556KL) / ZenFone Max M1/M2/M3 (ZB555KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Max M1 (ZB556KL) / ZenFone Max M1/M2/M3 (ZB555KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Max M1 (ZB556KL) / ZenFone Max M1/M2/M3 (ZB555KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Max M1 (ZB556KL) / ZenFone Max M1/M2/M3 (ZB555KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Max M1 (ZB556KL) / ZenFone Max M1/M2/M3 (ZB555KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 5 (ZE620KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Lite L1 (ZA551KL) / ZenFone Live L1/L2 (ZA550KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Lite L1 (ZA551KL) / ZenFone Live L1/L2 (ZA550KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Live L1 (G552KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Lite L1 (ZA551KL) / ZenFone Live L1/L2 (ZA550KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Lite L1 (ZA551KL) / ZenFone Live L1/L2 (ZA550KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Lite L1 (G553KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Max Pro M1 (ZB602KL) (WW) / Max Pro M1 (ZB601KL) (IN)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Max Pro M1 (ZB602KL) (WW) / Max Pro M1 (ZB601KL) (IN)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Max Pro M1 (ZB602KL) (WW) / Max Pro M1 (ZB601KL) (IN)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Max Pro M1 (ZB602KL) (WW) / Max Pro M1 (ZB601KL) (IN)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Max Pro M1 (ZB602KL) (WW) / Max Pro M1 (ZB601KL) (IN)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Go (ZB551KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Go (ZB551KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Go (ZB452KG)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Go (ZB452KG)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 5 Lite (ZC600KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 5 Lite (ZC600KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Max Plus M1 (ZB570TL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Max Plus M1 (ZB570TL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Max Plus M1 (ZB570TL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Max M2 (ZB633KL) (WW) / Max M2 (ZB632KL) (IN)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Max Pro M2 (ZB631KL) (WW) / Max Pro M2 (ZB630KL) (IN)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Max Pro M2 (ZB631KL) (WW) / Max Pro M2 (ZB630KL) (IN)",
  },
  {
    marca: "Asus",
    modelo: "飛馬2 Plus (T550KLC)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 6 (A601CG)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone C (ZC451CG)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 2 (ZE500CL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 2 Laser (ZE500KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 2 Laser (ZE500KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 2 Laser (ZE500KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 2 Laser (ZE500KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 2 Laser (ZE550KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 2 Laser (ZE550KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 2 Laser (ZE550KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 2 Laser (ZE550KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 2 Laser (ZE600KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 2 Laser (ZE500KG)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 2 Laser (ZE500KG)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Go (ZC451TG)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 2 Laser (ZE551KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Selfie (ZD551KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Selfie (ZD551KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Go (ZC500TG)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 2 Laser (ZE550KG)",
  },
  {
    marca: "Asus",
    modelo: "ASUS Live (G500TG)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Max (ZC550KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Max (ZC550KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Max (ZC550KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 2 Laser (ZE601KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 3 (ZE552KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 3 (ZE520KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 3 Deluxe (ZS550KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 4 Pro (ZS551KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 3 Zoom (ZE553KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 4 (ZE554KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 4 (ZE554KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 4 (ZE554KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 4 (ZE554KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 4 Selfie Pro (ZD552KL)",
  },
  {
    marca: "Asus",
    modelo: "ROG Phone",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 5Z (ZS620KL) (WW) / 5Z (ZS621KL) (IN)",
  },
  {
    marca: "Asus",
    modelo: "Fonepad Note 6 (ME560CG)",
  },
  {
    marca: "Asus",
    modelo: "ZenPad Z8",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 2 (ZE550ML)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 2 (ZE551ML)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 2 (ZE551ML)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 2 (ZE551ML)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Zoom (ZX551ML)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Zoom (ZX551ML)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone Zoom (ZX551ML)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 3 Deluxe (ZS570KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 3 Deluxe (ZS570KL)",
  },
  {
    marca: "Asus",
    modelo: "ZenFone 3 Laser (ZC551KL)",
  },
  {
    marca: "Google",
    modelo: "Pixel 3",
  },
  {
    marca: "Google",
    modelo: "Pixel 3a XL",
  },
  {
    marca: "Google",
    modelo: "Pixel 4a (5G)",
  },
  {
    marca: "Google",
    modelo: "Pixel 4 XL",
  },
  {
    marca: "Google",
    modelo: "Pixel 3 XL",
  },
  {
    marca: "Google",
    modelo: "Pixel 4",
  },
  {
    marca: "Google",
    modelo: "Emulator",
  },
  {
    marca: "Google",
    modelo: "Emualtor",
  },
  {
    marca: "Google",
    modelo: "Pixel XL",
  },
  {
    marca: "Google",
    modelo: "Pixel 5",
  },
  {
    marca: "Google",
    modelo: "Pixel",
  },
  {
    marca: "Google",
    modelo: "Pixel 3a",
  },
  {
    marca: "Google",
    modelo: "Pixel 4a",
  },
  {
    marca: "Google",
    modelo: "Pixel 2 XL",
  },
  {
    marca: "Google",
    modelo: "Pixel 2",
  },
  {
    marca: "Huawei",
    modelo: "Che1-L04",
  },
  {
    marca: "Huawei",
    modelo: "honor 5X",
  },
  {
    marca: "Huawei",
    modelo: "荣耀畅玩5C",
  },
  {
    marca: "Huawei",
    modelo: "P20 Pro",
  },
  {
    marca: "Huawei",
    modelo: "P30 Pro",
  },
  {
    marca: "Huawei",
    modelo: "Mate 10",
  },
  {
    marca: "Huawei",
    modelo: "HUAWEI Y5 2019",
  },
  {
    marca: "Huawei",
    modelo: "HUAWEI P20 Lite",
  },
  {
    marca: "Huawei",
    modelo: "荣耀8X Max",
  },
  {
    marca: "Huawei",
    modelo: "荣耀8X Max",
  },
  {
    marca: "Huawei",
    modelo: "华为畅享 MAX",
  },
  {
    marca: "Huawei",
    modelo: "Honor 7i",
  },
  {
    marca: "Huawei",
    modelo: "华为畅享8e",
  },
  {
    marca: "Huawei",
    modelo: "HUAWEI Y6 Prime 2018",
  },
  {
    marca: "Huawei",
    modelo: "Honor 7A",
  },
  {
    marca: "Huawei",
    modelo: "nova 2 Plus",
  },
  {
    marca: "Huawei",
    modelo: "HUAWEI MediaPad T3 7",
  },
  {
    marca: "Huawei",
    modelo: "honor 8C",
  },
  {
    marca: "Huawei",
    modelo: "Honor V10",
  },
  {
    marca: "Huawei",
    modelo: "Mate 10 Pro",
  },
  {
    marca: "Huawei",
    modelo: "荣耀畅玩 6X",
  },
  {
    marca: "Huawei",
    modelo: "Honor 7X",
  },
  {
    marca: "Huawei",
    modelo: "华为平板T3 8行业专享版",
  },
  {
    marca: "Huawei",
    modelo: "HUAWEI Y3 2018",
  },
  {
    marca: "Huawei",
    modelo: "Y6II",
  },
  {
    marca: "Huawei",
    modelo: "荣耀畅玩5A",
  },
  {
    marca: "Huawei",
    modelo: "nova",
  },
  {
    marca: "Huawei",
    modelo: "nova",
  },
  {
    marca: "Huawei",
    modelo: "P20 Pro",
  },
  {
    marca: "Huawei",
    modelo: "Honor 10",
  },
  {
    marca: "Huawei",
    modelo: "Honor Play",
  },
  {
    marca: "Huawei",
    modelo: "HUAWEI MediaPad M3 Lite",
  },
  {
    marca: "Huawei",
    modelo: "HUAWEI Y5 lite 2017",
  },
  {
    marca: "Huawei",
    modelo: "Y3III",
  },
  {
    marca: "Huawei",
    modelo: "Mate S",
  },
  {
    marca: "Huawei",
    modelo: "Y5II",
  },
  {
    marca: "Huawei",
    modelo: "Y5II",
  },
  {
    marca: "Huawei",
    modelo: "GR3 2017",
  },
  {
    marca: "Huawei",
    modelo: "honor 6A Pro",
  },
  {
    marca: "Huawei",
    modelo: "华为畅享 8e 青春",
  },
  {
    marca: "Huawei",
    modelo: "HUAWEI Y5 lite",
  },
  {
    marca: "Huawei",
    modelo: "Honor 7A",
  },
  {
    marca: "Huawei",
    modelo: "HUAWEI Y7 Pro 2019",
  },
  {
    marca: "Huawei",
    modelo: "Honor V9",
  },
  {
    marca: "Huawei",
    modelo: "HUAWEI P30",
  },
  {
    marca: "Huawei",
    modelo: "P20",
  },
  {
    marca: "Huawei",
    modelo: "P9",
  },
  {
    marca: "Huawei",
    modelo: "Huawei Mate 20 X",
  },
  {
    marca: "Huawei",
    modelo: "华为畅享7S",
  },
  {
    marca: "Huawei",
    modelo: "华为畅享8 Plus",
  },
  {
    marca: "Huawei",
    modelo: "Honor 8",
  },
  {
    marca: "Huawei",
    modelo: "G628-TL00",
  },
  {
    marca: "Huawei",
    modelo: "G629-UL00",
  },
  {
    marca: "Huawei",
    modelo: "P8",
  },
  {
    marca: "Huawei",
    modelo: "X2",
  },
  {
    marca: "Huawei",
    modelo: "Copper Plus",
  },
  {
    marca: "Huawei",
    modelo: "ascend-5w",
  },
  {
    marca: "Huawei",
    modelo: "Huawei Ascend XT2™",
  },
  {
    marca: "Huawei",
    modelo: "Sensa LTE",
  },
  {
    marca: "Huawei",
    modelo: "Sensa LTE",
  },
  {
    marca: "Huawei",
    modelo: "荣耀Waterplay 8英寸",
  },
  {
    marca: "Huawei",
    modelo: "荣耀9X",
  },
  {
    marca: "Huawei",
    modelo: "Mate 20",
  },
  {
    marca: "Huawei",
    modelo: "honor 10 Lite",
  },
  {
    marca: "Huawei",
    modelo: "HONOR 10i",
  },
  {
    marca: "Huawei",
    modelo: "nova 2s",
  },
  {
    marca: "Huawei",
    modelo: "Hol-U19",
  },
  {
    marca: "Huawei",
    modelo: "nova 3i",
  },
  {
    marca: "Huawei",
    modelo: "Honor 8A",
  },
  {
    marca: "Huawei",
    modelo: "HUAWEI MediaPad M5 lite",
  },
  {
    marca: "Huawei",
    modelo: "HUAWEI Y9 2019",
  },
  {
    marca: "Huawei",
    modelo: "华为畅享9 Plus",
  },
  {
    marca: "Huawei",
    modelo: "honor 6C Pro",
  },
  {
    marca: "Huawei",
    modelo: "荣耀 V9 play",
  },
  {
    marca: "Huawei",
    modelo: "荣耀 8X",
  },
  {
    marca: "Huawei",
    modelo: "荣耀 8X",
  },
  {
    marca: "Huawei",
    modelo: "GR5",
  },
  {
    marca: "Huawei",
    modelo: "Honor V8",
  },
  {
    marca: "Huawei",
    modelo: "HONOR 8S",
  },
  {
    marca: "Huawei",
    modelo: "HUWEI MediaPad T3",
  },
  {
    marca: "Huawei",
    modelo: "华为畅享8",
  },
  {
    marca: "Huawei",
    modelo: "荣耀9青春版",
  },
  {
    marca: "Huawei",
    modelo: "荣耀9i",
  },
  {
    marca: "Huawei",
    modelo: "Honor 7C",
  },
  {
    marca: "Huawei",
    modelo: "Mate 9 Pro",
  },
  {
    marca: "Huawei",
    modelo: "ECO",
  },
  {
    marca: "Huawei",
    modelo: "Y3II",
  },
  {
    marca: "Huawei",
    modelo: "Mate 20 RS",
  },
  {
    marca: "Huawei",
    modelo: "Honor 5A",
  },
  {
    marca: "Huawei",
    modelo: "HUAWEI P30 lite",
  },
  {
    marca: "Huawei",
    modelo: "Mate 9",
  },
  {
    marca: "Huawei",
    modelo: "nova plus",
  },
  {
    marca: "Huawei",
    modelo: "华为平板 C5",
  },
  {
    marca: "Huawei",
    modelo: "华为畅享 9e",
  },
  {
    marca: "Huawei",
    modelo: "HUAWEI Y6 Pro 2019",
  },
  {
    marca: "Huawei",
    modelo: "Y6 2017",
  },
  {
    marca: "Huawei",
    modelo: "Y5 2017",
  },
  {
    marca: "Huawei",
    modelo: "华为畅享6",
  },
  {
    marca: "Huawei",
    modelo: "PORSCHE DESIGN HUAWEI Mate RS",
  },
  {
    marca: "Huawei",
    modelo: "GT3",
  },
  {
    marca: "Huawei",
    modelo: "Honor Magic",
  },
  {
    marca: "Huawei",
    modelo: "Mate 8",
  },
  {
    marca: "Huawei",
    modelo: "P8max",
  },
  {
    marca: "Huawei",
    modelo: "nova 3",
  },
  {
    marca: "Huawei",
    modelo: "HONOR V20",
  },
  {
    marca: "Huawei",
    modelo: "nova 2",
  },
  {
    marca: "Huawei",
    modelo: "Honor 7",
  },
  {
    marca: "Huawei",
    modelo: "HUAWEI P smart+ 2019",
  },
  {
    marca: "Huawei",
    modelo: "华为畅享 9S",
  },
  {
    marca: "Huawei",
    modelo: "nova lite",
  },
  {
    marca: "Huawei",
    modelo: "G7 Plus",
  },
  {
    marca: "Huawei",
    modelo: "Mate 10 lite",
  },
  {
    marca: "Huawei",
    modelo: "Honor Note10",
  },
  {
    marca: "Huawei",
    modelo: "SC-CL00",
  },
  {
    marca: "Huawei",
    modelo: "SC-UL10",
  },
  {
    marca: "Huawei",
    modelo: "HUAWEI MediaPad M5 8.4",
  },
  {
    marca: "Huawei",
    modelo: "华为畅享7",
  },
  {
    marca: "Huawei",
    modelo: "HUAWEI Mate 20 lite",
  },
  {
    marca: "Huawei",
    modelo: "Honor 9",
  },
  {
    marca: "Huawei",
    modelo: "Y9 Prime 2019",
  },
  {
    marca: "Huawei",
    modelo: "GR3",
  },
  {
    marca: "Huawei",
    modelo: "Y6 Pro",
  },
  {
    marca: "Huawei",
    modelo: "Y6 Pro",
  },
  {
    marca: "Huawei",
    modelo: "Y6 Pro",
  },
  {
    marca: "Huawei",
    modelo: "Y6 Pro",
  },
  {
    marca: "Huawei",
    modelo: "Honor Magic 2",
  },
  {
    marca: "Huawei",
    modelo: "荣耀畅享7 Plus",
  },
  {
    marca: "Huawei",
    modelo: "nova 4",
  },
  {
    marca: "Huawei",
    modelo: "P9 Plus",
  },
  {
    marca: "Huawei",
    modelo: "P10 Plus",
  },
  {
    marca: "Huawei",
    modelo: "Honor 8 Smart",
  },
  {
    marca: "Huawei",
    modelo: "P9 Lite PREMIUM",
  },
  {
    marca: "Huawei",
    modelo: "P30 Pro",
  },
  {
    marca: "Huawei",
    modelo: "P10",
  },
  {
    marca: "Huawei",
    modelo: "P10 lite",
  },
  {
    marca: "Huawei",
    modelo: "Y221-U03",
  },
  {
    marca: "Huawei",
    modelo: "Y336-U12",
  },
  {
    marca: "Huawei",
    modelo: "Y360-U12",
  },
  {
    marca: "Huawei",
    modelo: "Y360-U82",
  },
  {
    marca: "Huawei",
    modelo: "Y520-U22",
  },
  {
    marca: "Huawei",
    modelo: "Y523-L176",
  },
  {
    marca: "Huawei",
    modelo: "Y540-U01",
  },
  {
    marca: "Huawei",
    modelo: "Y541-U02",
  },
  {
    marca: "Huawei",
    modelo: "Y560-CL00",
  },
  {
    marca: "Huawei",
    modelo: "Y5",
  },
  {
    marca: "Huawei",
    modelo: "Y5",
  },
  {
    marca: "Huawei",
    modelo: "Y625-U32",
  },
  {
    marca: "Huawei",
    modelo: "HUAWEI nova 5T",
  },
  {
    marca: "Huawei",
    modelo: "Y625-U03",
  },
  {
    marca: "Huawei",
    modelo: "Y221-U03",
  },
  {
    marca: "Huawei",
    modelo: "Nexus 6P",
  },
  {
    marca: "Huawei",
    modelo: "荣耀畅玩4X",
  },
  {
    marca: "Huawei",
    modelo: "Honor 4A",
  },
  {
    marca: "Huawei",
    modelo: "MediaPad X1 7.0",
  },
  {
    marca: "Huawei",
    modelo: "P8 青春版",
  },
  {
    marca: "Huawei",
    modelo: "P8 Lite",
  },
  {
    marca: "Huawei",
    modelo: "B199",
  },
  {
    marca: "Huawei",
    modelo: "C199",
  },
  {
    marca: "Huawei",
    modelo: "C199s",
  },
  {
    marca: "Huawei",
    modelo: "C8817D",
  },
  {
    marca: "Huawei",
    modelo: "C8817E",
  },
  {
    marca: "Huawei",
    modelo: "C8818",
  },
  {
    marca: "Huawei",
    modelo: "CHC-U03",
  },
  {
    marca: "Huawei",
    modelo: "荣耀畅玩4C",
  },
  {
    marca: "Huawei",
    modelo: "CHM-CL00",
  },
  {
    marca: "Huawei",
    modelo: "HONOR 4X",
  },
  {
    marca: "Huawei",
    modelo: "D2",
  },
  {
    marca: "Huawei",
    modelo: "D2",
  },
  {
    marca: "Huawei",
    modelo: "G6-C00",
  },
  {
    marca: "Huawei",
    modelo: "G6-L11",
  },
  {
    marca: "Huawei",
    modelo: "G6",
  },
  {
    marca: "Huawei",
    modelo: "G6-U00",
  },
  {
    marca: "Huawei",
    modelo: "G6-U10",
  },
  {
    marca: "Huawei",
    modelo: "G620-A2",
  },
  {
    marca: "Huawei",
    modelo: "G620S-L01",
  },
  {
    marca: "Huawei",
    modelo: "G620S-L02",
  },
  {
    marca: "Huawei",
    modelo: "G620S-L03",
  },
  {
    marca: "Huawei",
    modelo: "G620S-UL00",
  },
  {
    marca: "Huawei",
    modelo: "G621-TL00M",
  },
  {
    marca: "Huawei",
    modelo: "G7-L01",
  },
  {
    marca: "Huawei",
    modelo: "G7-L02",
  },
  {
    marca: "Huawei",
    modelo: "G7-L03",
  },
  {
    marca: "Huawei",
    modelo: "G7-L11",
  },
  {
    marca: "Huawei",
    modelo: "G7-TL00",
  },
  {
    marca: "Huawei",
    modelo: "G7-UL20",
  },
  {
    marca: "Huawei",
    modelo: "G735-L23",
  },
  {
    marca: "Huawei",
    modelo: "G750-T00",
  },
  {
    marca: "Huawei",
    modelo: "G750-T01",
  },
  {
    marca: "Huawei",
    modelo: "G750-T20",
  },
  {
    marca: "Huawei",
    modelo: "H30-L02",
  },
  {
    marca: "Huawei",
    modelo: "H30-C00",
  },
  {
    marca: "Huawei",
    modelo: "H30-T00",
  },
  {
    marca: "Huawei",
    modelo: "Honor3",
  },
  {
    marca: "Huawei",
    modelo: "Honor3",
  },
  {
    marca: "Huawei",
    modelo: "H60-L04",
  },
  {
    marca: "Huawei",
    modelo: "H891L",
  },
  {
    marca: "Huawei",
    modelo: "H892L",
  },
  {
    marca: "Huawei",
    modelo: "MT2-L03",
  },
  {
    marca: "Huawei",
    modelo: "P7 mini",
  },
  {
    marca: "Huawei",
    modelo: "PE-CL00",
  },
  {
    marca: "Huawei",
    modelo: "麦芒4",
  },
  {
    marca: "Huawei",
    modelo: "RIO-CL00",
  },
  {
    marca: "Huawei",
    modelo: "GX8",
  },
  {
    marca: "Huawei",
    modelo: "G8",
  },
  {
    marca: "Huawei",
    modelo: "Y6",
  },
  {
    marca: "Huawei",
    modelo: "Y6",
  },
  {
    marca: "Huawei",
    modelo: "Y6",
  },
  {
    marca: "Huawei",
    modelo: "Y536-A1",
  },
  {
    marca: "Huawei",
    modelo: "UNION",
  },
  {
    marca: "Huawei",
    modelo: "Y550-L01",
  },
  {
    marca: "Huawei",
    modelo: "Y550-L02",
  },
  {
    marca: "Huawei",
    modelo: "Y550-L03",
  },
  {
    marca: "Huawei",
    modelo: "Y635-L02",
  },
  {
    marca: "Huawei",
    modelo: "M3",
  },
  {
    marca: "Huawei",
    modelo: "MediaPad T3 7",
  },
  {
    marca: "Huawei",
    modelo: "MediaPad T2 7.0",
  },
  {
    marca: "Huawei",
    modelo: "荣耀Note8",
  },
  {
    marca: "Huawei",
    modelo: "Honor3",
  },
  {
    marca: "Huawei",
    modelo: "Mate",
  },
  {
    marca: "Huawei",
    modelo: "MT1",
  },
  {
    marca: "Huawei",
    modelo: "Mate2",
  },
  {
    marca: "Huawei",
    modelo: "MT2-L01",
  },
  {
    marca: "Huawei",
    modelo: "MT2-L02",
  },
  {
    marca: "Huawei",
    modelo: "MT2-L05",
  },
  {
    marca: "Huawei",
    modelo: "Mate 7",
  },
  {
    marca: "Huawei",
    modelo: "P6",
  },
  {
    marca: "Huawei",
    modelo: "P6",
  },
  {
    marca: "Huawei",
    modelo: "P6",
  },
  {
    marca: "Huawei",
    modelo: "P6S-L04",
  },
  {
    marca: "Huawei",
    modelo: "P6S-U06",
  },
  {
    marca: "Huawei",
    modelo: "P7",
  },
  {
    marca: "Huawei",
    modelo: "华为揽阅M2青春版7.0",
  },
  {
    marca: "LGE",
    modelo: "DM-01G",
  },
  {
    marca: "LGE",
    modelo: "DM-01K",
  },
  {
    marca: "LGE",
    modelo: "DM-02H",
  },
  {
    marca: "LGE",
    modelo: "Qua phone PX",
  },
  {
    marca: "LGE",
    modelo: "V20 PRO",
  },
  {
    marca: "LGE",
    modelo: "V30+",
  },
  {
    marca: "LGE",
    modelo: "LG style2",
  },
  {
    marca: "LGE",
    modelo: "JOJO",
  },
  {
    marca: "LGE",
    modelo: "L-03K",
  },
  {
    marca: "LGE",
    modelo: "LG style3",
  },
  {
    marca: "LGE",
    modelo: "LG V60 ThinQ 5G",
  },
  {
    marca: "LGE",
    modelo: "W30",
  },
  {
    marca: "LGE",
    modelo: "W30",
  },
  {
    marca: "LGE",
    modelo: "W30",
  },
  {
    marca: "LGE",
    modelo: "W10",
  },
  {
    marca: "LGE",
    modelo: "W11",
  },
  {
    marca: "LGE",
    modelo: "W10 Alpha",
  },
  {
    marca: "LGE",
    modelo: "W31",
  },
  {
    marca: "LGE",
    modelo: "W30 Pro",
  },
  {
    marca: "LGE",
    modelo: "Q92",
  },
  {
    marca: "LGE",
    modelo: "K92",
  },
  {
    marca: "LGE",
    modelo: "AKA",
  },
  {
    marca: "LGE",
    modelo: "LG G5 SE",
  },
  {
    marca: "LGE",
    modelo: "LG G8 ThinQ™",
  },
  {
    marca: "LGE",
    modelo: "LG G8 ThinQ™",
  },
  {
    marca: "LGE",
    modelo: "LG G8 ThinQ™",
  },
  {
    marca: "LGE",
    modelo: "Q8",
  },
  {
    marca: "LGE",
    modelo: "G Pro2",
  },
  {
    marca: "LGE",
    modelo: "G Pro2",
  },
  {
    marca: "LGE",
    modelo: "LG G Vista",
  },
  {
    marca: "LGE",
    modelo: "G Vista",
  },
  {
    marca: "LGE",
    modelo: "G3 Stylus",
  },
  {
    marca: "LGE",
    modelo: "Gx2",
  },
  {
    marca: "LGE",
    modelo: "G3 Stylus",
  },
  {
    marca: "LGE",
    modelo: "G3 Stylus",
  },
  {
    marca: "LGE",
    modelo: "LG U",
  },
  {
    marca: "LGE",
    modelo: "G8S ThinQ",
  },
  {
    marca: "LGE",
    modelo: "Nexus 5X",
  },
  {
    marca: "LGE",
    modelo: "LG Zero",
  },
  {
    marca: "LGE",
    modelo: "LG Class",
  },
  {
    marca: "LGE",
    modelo: "LG Leon 4G LTE",
  },
  {
    marca: "LGE",
    modelo: "LG Leon 4G LTE",
  },
  {
    marca: "LGE",
    modelo: "LG Leon 4G LTE",
  },
  {
    marca: "LGE",
    modelo: "LG Spirit LTE",
  },
  {
    marca: "LGE",
    modelo: "LG Volt 4G",
  },
  {
    marca: "LGE",
    modelo: "LG Spirit 4G LTE",
  },
  {
    marca: "LGE",
    modelo: "LG Volt LTE",
  },
  {
    marca: "LGE",
    modelo: "LG G4c",
  },
  {
    marca: "LGE",
    modelo: "LG G4c",
  },
  {
    marca: "LGE",
    modelo: "LG Volt II",
  },
  {
    marca: "LGE",
    modelo: "VELVET",
  },
  {
    marca: "LGE",
    modelo: "VELVET",
  },
  {
    marca: "LGE",
    modelo: "Gentle",
  },
  {
    marca: "LGE",
    modelo: "LG Smart Folder",
  },
  {
    marca: "LGE",
    modelo: "LG it",
  },
  {
    marca: "LGE",
    modelo: "LG K9",
  },
  {
    marca: "LGE",
    modelo: "LG Aristo 3+",
  },
  {
    marca: "LGE",
    modelo: "LG Premier Pro",
  },
  {
    marca: "LGE",
    modelo: "X4+",
  },
  {
    marca: "LGE",
    modelo: "LG Q7+",
  },
  {
    marca: "LGE",
    modelo: "LG Q7+",
  },
  {
    marca: "LGE",
    modelo: "QStylus",
  },
  {
    marca: "LGE",
    modelo: "Q8",
  },
  {
    marca: "LGE",
    modelo: "LG Stylo 5",
  },
  {
    marca: "LGE",
    modelo: "LG Stylo 5+",
  },
  {
    marca: "LGE",
    modelo: "LG ZONE",
  },
  {
    marca: "LGE",
    modelo: "LG K5",
  },
  {
    marca: "LGE",
    modelo: "K22",
  },
  {
    marca: "LGE",
    modelo: "LG K4",
  },
  {
    marca: "LGE",
    modelo: "F60",
  },
  {
    marca: "LGE",
    modelo: "F60",
  },
  {
    marca: "LGE",
    modelo: "Spray",
  },
  {
    marca: "LGE",
    modelo: "F60",
  },
  {
    marca: "LGE",
    modelo: "F60",
  },
  {
    marca: "LGE",
    modelo: "F60",
  },
  {
    marca: "LGE",
    modelo: "F60",
  },
  {
    marca: "LGE",
    modelo: "F60",
  },
  {
    marca: "LGE",
    modelo: "V20",
  },
  {
    marca: "LGE",
    modelo: "Optimus F6",
  },
  {
    marca: "LGE",
    modelo: "F70",
  },
  {
    marca: "LGE",
    modelo: "LG F70",
  },
  {
    marca: "LGE",
    modelo: "LG Q9",
  },
  {
    marca: "LGE",
    modelo: "V50 ThinQ",
  },
  {
    marca: "LGE",
    modelo: "V50 ThinQ",
  },
  {
    marca: "LGE",
    modelo: "Signature",
  },
  {
    marca: "LGE",
    modelo: "LG Optimus LTE3",
  },
  {
    marca: "LGE",
    modelo: "Enact",
  },
  {
    marca: "LGE",
    modelo: "LG G2",
  },
  {
    marca: "LGE",
    modelo: "G2 MINI",
  },
  {
    marca: "LGE",
    modelo: "G2 MINI",
  },
  {
    marca: "LGE",
    modelo: "G2 MINI",
  },
  {
    marca: "LGE",
    modelo: "G2 mini 4G LTE",
  },
  {
    marca: "LGE",
    modelo: "LG G3",
  },
  {
    marca: "LGE",
    modelo: "LG G Stylo",
  },
  {
    marca: "LGE",
    modelo: "LG G Stylo",
  },
  {
    marca: "LGE",
    modelo: "LG G Stylo",
  },
  {
    marca: "LGE",
    modelo: "LG G Stylo",
  },
  {
    marca: "LGE",
    modelo: "LG G Stylo",
  },
  {
    marca: "LGE",
    modelo: "G Stylo",
  },
  {
    marca: "LGE",
    modelo: "LG Optimus G Pro",
  },
  {
    marca: "LGE",
    modelo: "LG Optimus G Pro",
  },
  {
    marca: "LGE",
    modelo: "LG Optimus G",
  },
  {
    marca: "LGE",
    modelo: "LG Optimus G",
  },
  {
    marca: "LGE",
    modelo: "Optimus GK",
  },
  {
    marca: "LGE",
    modelo: "LG G5",
  },
  {
    marca: "LGE",
    modelo: "Nexus 5",
  },
  {
    marca: "LGE",
    modelo: "G3 S",
  },
  {
    marca: "LGE",
    modelo: "G3 S",
  },
  {
    marca: "LGE",
    modelo: "G3 Vigor",
  },
  {
    marca: "LGE",
    modelo: "G3 Beat",
  },
  {
    marca: "LGE",
    modelo: "G3 Beat",
  },
  {
    marca: "LGE",
    modelo: "G3 Vigor",
  },
  {
    marca: "LGE",
    modelo: "V30",
  },
  {
    marca: "LGE",
    modelo: "LG G7 ThinQ",
  },
  {
    marca: "LGE",
    modelo: "LG V35 ThinQ",
  },
  {
    marca: "LGE",
    modelo: "V40 ThinQ",
  },
  {
    marca: "LGE",
    modelo: "LG X screen",
  },
  {
    marca: "LGE",
    modelo: "LG X screen",
  },
  {
    marca: "LGE",
    modelo: "LG X Style",
  },
  {
    marca: "LGE",
    modelo: "LG X power",
  },
  {
    marca: "LGE",
    modelo: "LG X cam",
  },
  {
    marca: "LGE",
    modelo: "LG X cam",
  },
  {
    marca: "LGE",
    modelo: "L5000",
  },
  {
    marca: "LGE",
    modelo: "L Fino",
  },
  {
    marca: "LGE",
    modelo: "L Fino",
  },
  {
    marca: "LGE",
    modelo: "L Fino",
  },
  {
    marca: "LGE",
    modelo: "LG Optimus L9 II",
  },
  {
    marca: "LGE",
    modelo: "G3 Screen",
  },
  {
    marca: "LGE",
    modelo: "L60",
  },
  {
    marca: "LGE",
    modelo: "L45",
  },
  {
    marca: "LGE",
    modelo: "L45",
  },
  {
    marca: "LGE",
    modelo: "LG G6",
  },
  {
    marca: "LGE",
    modelo: "L20",
  },
  {
    marca: "LGE",
    modelo: "L20",
  },
  {
    marca: "LGE",
    modelo: "L20",
  },
  {
    marca: "LGE",
    modelo: "L30 Sporty",
  },
  {
    marca: "LGE",
    modelo: "L30 Sporty",
  },
  {
    marca: "LGE",
    modelo: "L50 Sporty",
  },
  {
    marca: "LGE",
    modelo: "L50 Sporty",
  },
  {
    marca: "LGE",
    modelo: "L50 Sporty",
  },
  {
    marca: "LGE",
    modelo: "L Bello",
  },
  {
    marca: "LGE",
    modelo: "LBello",
  },
  {
    marca: "LGE",
    modelo: "G Pro Lite",
  },
  {
    marca: "LGE",
    modelo: "G Pro Lite",
  },
  {
    marca: "LGE",
    modelo: "G Pro Lite",
  },
  {
    marca: "LGE",
    modelo: "K3 2017",
  },
  {
    marca: "LGE",
    modelo: "Rebel 3",
  },
  {
    marca: "LGE",
    modelo: "LG K8 (2017) Dual",
  },
  {
    marca: "LGE",
    modelo: "LG X300",
  },
  {
    marca: "LGE",
    modelo: "LG Harmony",
  },
  {
    marca: "LGE",
    modelo: "LG K20",
  },
  {
    marca: "LGE",
    modelo: "LG X power2",
  },
  {
    marca: "LGE",
    modelo: "LG X Venture",
  },
  {
    marca: "LGE",
    modelo: "LG X Venture",
  },
  {
    marca: "LGE",
    modelo: "LG Treasure",
  },
  {
    marca: "LGE",
    modelo: "LG K7",
  },
  {
    marca: "LGE",
    modelo: "LG M1",
  },
  {
    marca: "LGE",
    modelo: "LG Phoenix 2",
  },
  {
    marca: "LGE",
    modelo: "LG K10 LTE",
  },
  {
    marca: "LGE",
    modelo: "LG K10",
  },
  {
    marca: "LGE",
    modelo: "LG K10",
  },
  {
    marca: "LGE",
    modelo: "LG K10",
  },
  {
    marca: "LGE",
    modelo: "LG K10",
  },
  {
    marca: "LGE",
    modelo: "LG K10 LTE",
  },
  {
    marca: "LGE",
    modelo: "LG K10 LTE",
  },
  {
    marca: "LGE",
    modelo: "Nexus 4",
  },
  {
    marca: "LGE",
    modelo: "LG Magna LTE",
  },
  {
    marca: "LGE",
    modelo: "LG Prime Plus 4G",
  },
  {
    marca: "LGE",
    modelo: "VELVET",
  },
  {
    marca: "LGE",
    modelo: "LG K8(2018)",
  },
  {
    marca: "LGE",
    modelo: "LG K8s",
  },
  {
    marca: "LGE",
    modelo: "LG K30",
  },
  {
    marca: "LGE",
    modelo: "LG Q7",
  },
  {
    marca: "LGE",
    modelo: "QStylus",
  },
  {
    marca: "LGE",
    modelo: "LG L455DL",
  },
  {
    marca: "LGE",
    modelo: "LG Harmony 4",
  },
  {
    marca: "LGE",
    modelo: "LG K41S",
  },
  {
    marca: "LGE",
    modelo: "Q51",
  },
  {
    marca: "LGE",
    modelo: "K51",
  },
  {
    marca: "LGE",
    modelo: "K51S",
  },
  {
    marca: "LGE",
    modelo: "Q61",
  },
  {
    marca: "LGE",
    modelo: "Stylo 6",
  },
  {
    marca: "LGE",
    modelo: "LG K31",
  },
  {
    marca: "LGE",
    modelo: "LG K3",
  },
  {
    marca: "LGE",
    modelo: "LG K4 LTE",
  },
  {
    marca: "LGE",
    modelo: "LG K4 LTE",
  },
  {
    marca: "LGE",
    modelo: "LM-K420",
  },
  {
    marca: "LGE",
    modelo: "K52",
  },
  {
    marca: "LGE",
    modelo: "LG Q6",
  },
  {
    marca: "LGE",
    modelo: "V50S ThinQ",
  },
  {
    marca: "LGE",
    modelo: "LG Q70",
  },
  {
    marca: "LGE",
    modelo: "LG Q70",
  },
  {
    marca: "LGE",
    modelo: "LG Solo LTE",
  },
  {
    marca: "LGE",
    modelo: "LG K40",
  },
  {
    marca: "LGE",
    modelo: "LG K40",
  },
  {
    marca: "LGE",
    modelo: "MY LG Mobile",
  },
  {
    marca: "LGE",
    modelo: "LG K30",
  },
  {
    marca: "LGE",
    modelo: "LG Q6",
  },
  {
    marca: "LGE",
    modelo: "LG X max",
  },
  {
    marca: "LGE",
    modelo: "LG X power",
  },
  {
    marca: "LGE",
    modelo: "LG X power",
  },
  {
    marca: "LGE",
    modelo: "LG X power",
  },
  {
    marca: "LGE",
    modelo: "LG K4/K7 (2017)",
  },
  {
    marca: "LGE",
    modelo: "LG K8 (2017)",
  },
  {
    marca: "LGE",
    modelo: "LG K10 (2017)",
  },
  {
    marca: "LGE",
    modelo: "LG X400",
  },
  {
    marca: "LGE",
    modelo: "LG X charge",
  },
  {
    marca: "LGE",
    modelo: "LG X5",
  },
  {
    marca: "LGE",
    modelo: "LG K8",
  },
  {
    marca: "LGE",
    modelo: "LG K8 LTE",
  },
  {
    marca: "LGE",
    modelo: "LG K3 LTE",
  },
  {
    marca: "LGE",
    modelo: "LG K3 LTE",
  },
  {
    marca: "LGE",
    modelo: "LM-X420",
  },
  {
    marca: "LGE",
    modelo: "K50S",
  },
  {
    marca: "LGE",
    modelo: "LG Q60",
  },
  {
    marca: "LGE",
    modelo: "LG K50",
  },
  {
    marca: "LGE",
    modelo: "LG K40",
  },
  {
    marca: "LGE",
    modelo: "LG K40S",
  },
  {
    marca: "LGE",
    modelo: "LG Tribute Royal",
  },
  {
    marca: "LGE",
    modelo: "LM-X120",
  },
  {
    marca: "LGE",
    modelo: "LG G4 Stylus",
  },
  {
    marca: "LGE",
    modelo: "LG G4 Stylus",
  },
  {
    marca: "LGE",
    modelo: "Stylo 2 V",
  },
  {
    marca: "LGE",
    modelo: "LG Stylus3",
  },
  {
    marca: "LGE",
    modelo: "LG Stylus3",
  },
  {
    marca: "LGE",
    modelo: "LG Leon",
  },
  {
    marca: "LGE",
    modelo: "LG Leon",
  },
  {
    marca: "LGE",
    modelo: "LG Spirit",
  },
  {
    marca: "LGE",
    modelo: "LG Volt",
  },
  {
    marca: "LGE",
    modelo: "LG Magna",
  },
  {
    marca: "LGE",
    modelo: "LG Magna",
  },
  {
    marca: "LGE",
    modelo: "LG Gx",
  },
  {
    marca: "LGE",
    modelo: "LG Gx",
  },
  {
    marca: "LGE",
    modelo: "LG G4",
  },
  {
    marca: "LGE",
    modelo: "LG G4s",
  },
  {
    marca: "LGE",
    modelo: "LG G4 Beat",
  },
  {
    marca: "LGE",
    modelo: "LG G4 Beat",
  },
  {
    marca: "LGE",
    modelo: "LG G Vista 2",
  },
  {
    marca: "LGE",
    modelo: "LG Stylo 2",
  },
  {
    marca: "LGE",
    modelo: "LG Stylus2",
  },
  {
    marca: "LGE",
    modelo: "LG Stylus2 4G",
  },
  {
    marca: "LGE",
    modelo: "LG Stylo 2 Plus",
  },
  {
    marca: "LGE",
    modelo: "LG G7 One",
  },
  {
    marca: "LGE",
    modelo: "V10",
  },
  {
    marca: "LGE",
    modelo: "LG Stylo3",
  },
  {
    marca: "LGE",
    modelo: "LG Stylo3",
  },
  {
    marca: "LGE",
    modelo: "LG Stylo 3 Plus",
  },
  {
    marca: "LGE",
    modelo: "X Mach",
  },
  {
    marca: "LGE",
    modelo: "LG G3 Cat.6",
  },
  {
    marca: "LGE",
    modelo: "LG G3 A",
  },
  {
    marca: "LGE",
    modelo: "V60 ThinQ",
  },
  {
    marca: "LGE",
    modelo: "LG Bello II",
  },
  {
    marca: "LGE",
    modelo: "LG Optimus L7II",
  },
  {
    marca: "LGE",
    modelo: "LG Optimus L7 II",
  },
  {
    marca: "LGE",
    modelo: "Wine Smart",
  },
  {
    marca: "LGE",
    modelo: "Wine Smart 3G",
  },
  {
    marca: "LGE",
    modelo: "Ice cream Smart",
  },
  {
    marca: "LGE",
    modelo: "Optimus Vu2",
  },
  {
    marca: "LGE",
    modelo: "Optimus Vu2",
  },
  {
    marca: "LGE",
    modelo: "Optimus Vu2",
  },
  {
    marca: "LGE",
    modelo: "VU3",
  },
  {
    marca: "LGE",
    modelo: "Optimus L40",
  },
  {
    marca: "LGE",
    modelo: "LG-D150",
  },
  {
    marca: "LGE",
    modelo: "LG-D157f",
  },
  {
    marca: "LGE",
    modelo: "LG Optimus Zone 2",
  },
  {
    marca: "LGE",
    modelo: "Optimus L40",
  },
  {
    marca: "LGE",
    modelo: "Optimus L40",
  },
  {
    marca: "LGE",
    modelo: "070 touch",
  },
  {
    marca: "LGE",
    modelo: "L70",
  },
  {
    marca: "LGE",
    modelo: "L65",
  },
  {
    marca: "LGE",
    modelo: "L65",
  },
  {
    marca: "LGE",
    modelo: "L65",
  },
  {
    marca: "LGE",
    modelo: "Optimus Exceed 2",
  },
  {
    marca: "LGE",
    modelo: "L70",
  },
  {
    marca: "LGE",
    modelo: "L70",
  },
  {
    marca: "LGE",
    modelo: "L70",
  },
  {
    marca: "LGE",
    modelo: "L80 Single",
  },
  {
    marca: "LGE",
    modelo: "L80 Dual",
  },
  {
    marca: "LGE",
    modelo: "L90",
  },
  {
    marca: "LGE",
    modelo: "L90",
  },
  {
    marca: "LGE",
    modelo: "L90 Dual",
  },
  {
    marca: "LGE",
    modelo: "L90",
  },
  {
    marca: "LGE",
    modelo: "LG WING",
  },
  {
    marca: "LGE",
    modelo: "G Vista",
  },
  {
    marca: "LGE",
    modelo: "LG Volt",
  },
  {
    marca: "LGE",
    modelo: "Y25",
  },
  {
    marca: "LGE",
    modelo: "Y25",
  },
  {
    marca: "LGE",
    modelo: "LG Joy",
  },
  {
    marca: "LGE",
    modelo: "LG Joy",
  },
  {
    marca: "LGE",
    modelo: "LG Joy",
  },
  {
    marca: "LGE",
    modelo: "LG Classic",
  },
  {
    marca: "LGE",
    modelo: "LG Destiny",
  },
  {
    marca: "LGE",
    modelo: "LG Power",
  },
  {
    marca: "LGE",
    modelo: "LG F570S",
  },
  {
    marca: "LGE",
    modelo: "LG G Flex2",
  },
  {
    marca: "LGE",
    modelo: "LG G Flex",
  },
  {
    marca: "LGU+",
    modelo: "WA-U420D",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo Tab M8",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo Tab M8",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo Tab M8",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo Smrat Tab M8",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo Smrat Tab M8",
  },
  {
    marca: "Lenovo",
    modelo: "A1000",
  },
  {
    marca: "Lenovo",
    modelo: "A1010",
  },
  {
    marca: "Lenovo",
    modelo: "A1900",
  },
  {
    marca: "Lenovo",
    modelo: "A2010-a",
  },
  {
    marca: "Lenovo",
    modelo: "A2010l36",
  },
  {
    marca: "Lenovo",
    modelo: "A2016a40",
  },
  {
    marca: "Lenovo",
    modelo: "A2016b30",
  },
  {
    marca: "Lenovo",
    modelo: "A2016b31",
  },
  {
    marca: "Lenovo",
    modelo: "A2580",
  },
  {
    marca: "Lenovo",
    modelo: "A2800",
  },
  {
    marca: "Lenovo",
    modelo: "A2860",
  },
  {
    marca: "Lenovo",
    modelo: "A319",
  },
  {
    marca: "Lenovo",
    modelo: "A320t",
  },
  {
    marca: "Lenovo",
    modelo: "A328",
  },
  {
    marca: "Lenovo",
    modelo: "A328t",
  },
  {
    marca: "Lenovo",
    modelo: "A338t",
  },
  {
    marca: "Lenovo",
    modelo: "A3860",
  },
  {
    marca: "Lenovo",
    modelo: "A358t",
  },
  {
    marca: "Lenovo",
    modelo: "A3600-D",
  },
  {
    marca: "Lenovo",
    modelo: "A3600u",
  },
  {
    marca: "Lenovo",
    modelo: "A360t",
  },
  {
    marca: "Lenovo",
    modelo: "A368t",
  },
  {
    marca: "Lenovo",
    modelo: "A3800-D",
  },
  {
    marca: "Lenovo",
    modelo: "A380t",
  },
  {
    marca: "Lenovo",
    modelo: "A3860",
  },
  {
    marca: "Lenovo",
    modelo: "A5000",
  },
  {
    marca: "Lenovo",
    modelo: "A536",
  },
  {
    marca: "Lenovo",
    modelo: "A5500",
  },
  {
    marca: "Lenovo",
    modelo: "A5800-D",
  },
  {
    marca: "Lenovo",
    modelo: "A6010",
  },
  {
    marca: "Lenovo",
    modelo: "K5",
  },
  {
    marca: "Lenovo",
    modelo: "K5",
  },
  {
    marca: "Lenovo",
    modelo: "K5 Plus",
  },
  {
    marca: "Lenovo",
    modelo: "K5",
  },
  {
    marca: "Lenovo",
    modelo: "K5",
  },
  {
    marca: "Lenovo",
    modelo: "A606",
  },
  {
    marca: "Lenovo",
    modelo: "A616",
  },
  {
    marca: "Lenovo",
    modelo: "A6600 Plus",
  },
  {
    marca: "Lenovo",
    modelo: "A6600",
  },
  {
    marca: "Lenovo",
    modelo: "A6800",
  },
  {
    marca: "Lenovo",
    modelo: "A688t",
  },
  {
    marca: "Lenovo",
    modelo: "A690e",
  },
  {
    marca: "Lenovo",
    modelo: "A7000",
  },
  {
    marca: "Lenovo",
    modelo: "A7000 Plus",
  },
  {
    marca: "Lenovo",
    modelo: "VIBE X3 Lite",
  },
  {
    marca: "Lenovo",
    modelo: "K5 Note",
  },
  {
    marca: "Lenovo",
    modelo: "K5 Note",
  },
  {
    marca: "Lenovo",
    modelo: "A7700",
  },
  {
    marca: "Lenovo",
    modelo: "A806",
  },
  {
    marca: "Lenovo",
    modelo: "A808t",
  },
  {
    marca: "Lenovo",
    modelo: "A808t-i",
  },
  {
    marca: "Lenovo",
    modelo: "A828",
  },
  {
    marca: "Lenovo",
    modelo: "A858t",
  },
  {
    marca: "Lenovo",
    modelo: "A916",
  },
  {
    marca: "Lenovo",
    modelo: "A936",
  },
  {
    marca: "Lenovo",
    modelo: "A938t",
  },
  {
    marca: "Lenovo",
    modelo: "A7",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo A8",
  },
  {
    marca: "Lenovo",
    modelo: "A399",
  },
  {
    marca: "Lenovo",
    modelo: "VIBE K10",
  },
  {
    marca: "Lenovo",
    modelo: "K10e70",
  },
  {
    marca: "Lenovo",
    modelo: "K32c30",
  },
  {
    marca: "Lenovo",
    modelo: "K32",
  },
  {
    marca: "Lenovo",
    modelo: "VIBE K6 Power",
  },
  {
    marca: "Lenovo",
    modelo: "VIBE K6",
  },
  {
    marca: "Lenovo",
    modelo: "VIBE K6",
  },
  {
    marca: "Lenovo",
    modelo: "VIBE K6",
  },
  {
    marca: "Lenovo",
    modelo: "K350t",
  },
  {
    marca: "Lenovo",
    modelo: "K3 Note",
  },
  {
    marca: "Lenovo",
    modelo: "VIBE K6 Note",
  },
  {
    marca: "Lenovo",
    modelo: "VIBE K6 Note",
  },
  {
    marca: "Lenovo",
    modelo: "VIBE K6 Note",
  },
  {
    marca: "Lenovo",
    modelo: "K5 S",
  },
  {
    marca: "Lenovo",
    modelo: "K80M",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo K9",
  },
  {
    marca: "Lenovo",
    modelo: "K910L",
  },
  {
    marca: "Lenovo",
    modelo: "A6000",
  },
  {
    marca: "Lenovo",
    modelo: "A6000-l",
  },
  {
    marca: "Lenovo",
    modelo: "K30-E",
  },
  {
    marca: "Lenovo",
    modelo: "K30-T",
  },
  {
    marca: "Lenovo",
    modelo: "K30-TM",
  },
  {
    marca: "Lenovo",
    modelo: "K30-W",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo A5",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo A5",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo K11",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo K11",
  },
  {
    marca: "Lenovo",
    modelo: "A588t",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo A6 Note",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo_K320t",
  },
  {
    marca: "Lenovo",
    modelo: "P1",
  },
  {
    marca: "Lenovo",
    modelo: "P2",
  },
  {
    marca: "Lenovo",
    modelo: "P70",
  },
  {
    marca: "Lenovo",
    modelo: "P70",
  },
  {
    marca: "Lenovo",
    modelo: "P780",
  },
  {
    marca: "Lenovo",
    modelo: "P780",
  },
  {
    marca: "Lenovo",
    modelo: "P90",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo Tab V7",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo Tab V7",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo Tab V7",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo Tab V7",
  },
  {
    marca: "Lenovo",
    modelo: "PB1-750M/Lenovo PHAB",
  },
  {
    marca: "Lenovo",
    modelo: "PB1-770M/Lenovo PHAB Plus",
  },
  {
    marca: "Lenovo",
    modelo: "PB1-770N",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo PHAB2",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo PHAB2 Plus",
  },
  {
    marca: "Lenovo",
    modelo: "PB2 plus",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo PHAB2 Plus",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo PHAB2 Plus",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo PHAB2 Pro",
  },
  {
    marca: "Lenovo",
    modelo: "S1La40",
  },
  {
    marca: "Lenovo",
    modelo: "S1",
  },
  {
    marca: "Lenovo",
    modelo: "S580",
  },
  {
    marca: "Lenovo",
    modelo: "S650",
  },
  {
    marca: "Lenovo",
    modelo: "S658t",
  },
  {
    marca: "Lenovo",
    modelo: "S660",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo S820",
  },
  {
    marca: "Lenovo",
    modelo: "S820",
  },
  {
    marca: "Lenovo",
    modelo: "S850",
  },
  {
    marca: "Lenovo",
    modelo: "S850t",
  },
  {
    marca: "Lenovo",
    modelo: "S860",
  },
  {
    marca: "Lenovo",
    modelo: "S898t+",
  },
  {
    marca: "Lenovo",
    modelo: "S920",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo S920",
  },
  {
    marca: "Lenovo",
    modelo: "S930",
  },
  {
    marca: "Lenovo",
    modelo: "S938t",
  },
  {
    marca: "Lenovo",
    modelo: "S939",
  },
  {
    marca: "Lenovo",
    modelo: "S960",
  },
  {
    marca: "Lenovo",
    modelo: "Lenvo S960",
  },
  {
    marca: "Lenovo",
    modelo: "S858t",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo TAB 7",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo TAB 7",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo TAB 7",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo TAB3 7 Plus",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo TAB3 7 Plus",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo TAB3 7 Plus",
  },
  {
    marca: "Lenovo",
    modelo: "NEC  PC-TE507FAW",
  },
  {
    marca: "Lenovo",
    modelo: "X2",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo X2-CU/VIBE X2",
  },
  {
    marca: "Lenovo",
    modelo: "X2",
  },
  {
    marca: "Lenovo",
    modelo: "X2-TO/VIBE X2",
  },
  {
    marca: "Lenovo",
    modelo: "X3c50",
  },
  {
    marca: "Lenovo",
    modelo: "X3c70",
  },
  {
    marca: "Lenovo",
    modelo: "Motorola M",
  },
  {
    marca: "Lenovo",
    modelo: "YOGA Tab 3 PRO 10”",
  },
  {
    marca: "Lenovo",
    modelo: "K50",
  },
  {
    marca: "Lenovo",
    modelo: "K3 Note",
  },
  {
    marca: "Lenovo",
    modelo: "K3 Note",
  },
  {
    marca: "Lenovo",
    modelo: "K50-T5",
  },
  {
    marca: "Lenovo",
    modelo: "A7600",
  },
  {
    marca: "Lenovo",
    modelo: "A7600",
  },
  {
    marca: "Lenovo",
    modelo: "A805e",
  },
  {
    marca: "Lenovo",
    modelo: "A768t",
  },
  {
    marca: "Lenovo",
    modelo: "A816",
  },
  {
    marca: "Lenovo",
    modelo: "A2020a40",
  },
  {
    marca: "Lenovo",
    modelo: "A2020a40",
  },
  {
    marca: "Lenovo",
    modelo: "A31910t30",
  },
  {
    marca: "Lenovo",
    modelo: "K5 Note",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo K8",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo Z6 Pro 5G",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo K12 Note",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo Z5 Pro",
  },
  {
    marca: "Lenovo",
    modelo: "Z6",
  },
  {
    marca: "Lenovo",
    modelo: "Z5",
  },
  {
    marca: "Lenovo",
    modelo: "Z5",
  },
  {
    marca: "Lenovo",
    modelo: "Z5s",
  },
  {
    marca: "Lenovo",
    modelo: "L38011",
  },
  {
    marca: "Lenovo",
    modelo: "K5 Note",
  },
  {
    marca: "Lenovo",
    modelo: "K52t38",
  },
  {
    marca: "Lenovo",
    modelo: "VIBE X3 Lite",
  },
  {
    marca: "Lenovo",
    modelo: "VIBE X3 Lite",
  },
  {
    marca: "Lenovo",
    modelo: "K920/VIBE Z2",
  },
  {
    marca: "Lenovo",
    modelo: "K920/VIBE Z2 Pro",
  },
  {
    marca: "Lenovo",
    modelo: "K910",
  },
  {
    marca: "Lenovo",
    modelo: "K910e",
  },
  {
    marca: "Lenovo",
    modelo: "Motorola Moto M",
  },
  {
    marca: "Lenovo",
    modelo: "K5X",
  },
  {
    marca: "Lenovo",
    modelo: "TBD",
  },
  {
    marca: "Lenovo",
    modelo: "P2",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo K8 Note",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo K8 Plus",
  },
  {
    marca: "Lenovo",
    modelo: "拯救者电竞手机",
  },
  {
    marca: "Lenovo",
    modelo: "P1",
  },
  {
    marca: "Lenovo",
    modelo: "P1",
  },
  {
    marca: "Lenovo",
    modelo: "A3900",
  },
  {
    marca: "Lenovo",
    modelo: "X2 Pro",
  },
  {
    marca: "Lenovo",
    modelo: "A1000m",
  },
  {
    marca: "Lenovo",
    modelo: "K520",
  },
  {
    marca: "Lenovo",
    modelo: "S856",
  },
  {
    marca: "Lenovo",
    modelo: "S860e",
  },
  {
    marca: "Lenovo",
    modelo: "S856",
  },
  {
    marca: "Lenovo",
    modelo: "S856",
  },
  {
    marca: "Lenovo",
    modelo: "S856",
  },
  {
    marca: "Lenovo",
    modelo: "S90",
  },
  {
    marca: "Lenovo",
    modelo: "S60",
  },
  {
    marca: "Lenovo",
    modelo: "S60",
  },
  {
    marca: "Lenovo",
    modelo: "S60",
  },
  {
    marca: "Lenovo",
    modelo: "S90-A",
  },
  {
    marca: "Lenovo",
    modelo: "S90-L",
  },
  {
    marca: "Lenovo",
    modelo: "S90-T",
  },
  {
    marca: "Lenovo",
    modelo: "S90-U",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo S5 Pro",
  },
  {
    marca: "Lenovo",
    modelo: "Moto E3 Power",
  },
  {
    marca: "Lenovo",
    modelo: "Moto E3",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo Mirage Solo",
  },
  {
    marca: "Lenovo",
    modelo: "X3a40",
  },
  {
    marca: "Lenovo",
    modelo: "Z2",
  },
  {
    marca: "Lenovo",
    modelo: "Z2",
  },
  {
    marca: "Lenovo",
    modelo: "Z2w",
  },
  {
    marca: "Lenovo",
    modelo: "Lenovo-9",
  },
  {
    marca: "Lenovo",
    modelo: "Z6",
  },
  {
    marca: "Lenovo",
    modelo: "Z90/VIBE Shot",
  },
  {
    marca: "Lenovo",
    modelo: "Z90a40/VIBE Shot",
  },
  {
    marca: "Lenovo",
    modelo: "Z90/VIBE Shot",
  },
  {
    marca: "Motorola",
    modelo: "Moto Z Play Droid",
  },
  {
    marca: "Motorola",
    modelo: "moto e5 plus",
  },
  {
    marca: "Motorola",
    modelo: "Moto Z (2) Play",
  },
  {
    marca: "Motorola",
    modelo: "moto g(6)",
  },
  {
    marca: "Motorola",
    modelo: "moto g(6)",
  },
  {
    marca: "Motorola",
    modelo: "moto g(6) play",
  },
  {
    marca: "Motorola",
    modelo: "moto g(6) play",
  },
  {
    marca: "Motorola",
    modelo: "motorola one fusion",
  },
  {
    marca: "Motorola",
    modelo: "Moto G(4)",
  },
  {
    marca: "Motorola",
    modelo: "Moto G(4) Plus",
  },
  {
    marca: "Motorola",
    modelo: "Moto G(4)",
  },
  {
    marca: "Motorola",
    modelo: "moto e6 play",
  },
  {
    marca: "Motorola",
    modelo: "moto z3 play",
  },
  {
    marca: "Motorola",
    modelo: "moto g(8) power lite",
  },
  {
    marca: "Motorola",
    modelo: "motorola edge plus",
  },
  {
    marca: "Motorola",
    modelo: "Moto G (5th Gen)",
  },
  {
    marca: "Motorola",
    modelo: "moto g(7) play",
  },
  {
    marca: "Motorola",
    modelo: "moto P30 NOTE",
  },
  {
    marca: "Motorola",
    modelo: "motorola one power",
  },
  {
    marca: "Motorola",
    modelo: "Moto X Style",
  },
  {
    marca: "Motorola",
    modelo: "Moto X Style",
  },
  {
    marca: "Motorola",
    modelo: "Moto E (1st Gen)",
  },
  {
    marca: "Motorola",
    modelo: "Moto E (1st Gen)",
  },
  {
    marca: "Motorola",
    modelo: "Moto E (1st Gen)",
  },
  {
    marca: "Motorola",
    modelo: "Moto E (1st Gen)",
  },
  {
    marca: "Motorola",
    modelo: "moto p30 play",
  },
  {
    marca: "Motorola",
    modelo: "Motorola one",
  },
  {
    marca: "Motorola",
    modelo: "motorola one hyper",
  },
  {
    marca: "Motorola",
    modelo: "moto g(8) plus",
  },
  {
    marca: "Motorola",
    modelo: "moto g(8) plus",
  },
  {
    marca: "Motorola",
    modelo: "moto g(6) plus",
  },
  {
    marca: "Motorola",
    modelo: "moto g(6) plus",
  },
  {
    marca: "Motorola",
    modelo: "moto g(6) plus",
  },
  {
    marca: "Motorola",
    modelo: "Moto G (1st Gen)",
  },
  {
    marca: "Motorola",
    modelo: "Moto G (1st Gen)",
  },
  {
    marca: "Motorola",
    modelo: "Moto G (1st Gen)",
  },
  {
    marca: "Motorola",
    modelo: "moto e6s",
  },
  {
    marca: "Motorola",
    modelo: "moto z4",
  },
  {
    marca: "Motorola",
    modelo: "Moto X (1st Gen)",
  },
  {
    marca: "Motorola",
    modelo: "moto e",
  },
  {
    marca: "Motorola",
    modelo: "Moto Z Droid",
  },
  {
    marca: "Motorola",
    modelo: "moto e(7) plus",
  },
  {
    marca: "Motorola",
    modelo: "moto g(9) play",
  },
  {
    marca: "Motorola",
    modelo: "moto e5 plus",
  },
  {
    marca: "Motorola",
    modelo: "Moto G4 Play",
  },
  {
    marca: "Motorola",
    modelo: "Moto G (4) Play",
  },
  {
    marca: "Motorola",
    modelo: "Moto G4 Play",
  },
  {
    marca: "Motorola",
    modelo: "RAZR D1",
  },
  {
    marca: "Motorola",
    modelo: "RAZR D3",
  },
  {
    marca: "Motorola",
    modelo: "moto e(5) play",
  },
  {
    marca: "Motorola",
    modelo: "moto g(6) play",
  },
  {
    marca: "Motorola",
    modelo: "motorola p50",
  },
  {
    marca: "Motorola",
    modelo: "motorola one vision",
  },
  {
    marca: "Motorola",
    modelo: "DROID Turbo 2",
  },
  {
    marca: "Motorola",
    modelo: "Moto X Force",
  },
  {
    marca: "Motorola",
    modelo: "moto g(7) plus",
  },
  {
    marca: "Motorola",
    modelo: "motorola one fusion+",
  },
  {
    marca: "Motorola",
    modelo: "motorola one macro",
  },
  {
    marca: "Motorola",
    modelo: "Moto X Play",
  },
  {
    marca: "Motorola",
    modelo: "Moto X Play",
  },
  {
    marca: "Motorola",
    modelo: "Moto G Turbo Edition",
  },
  {
    marca: "Motorola",
    modelo: "Moto Z(3)",
  },
  {
    marca: "Motorola",
    modelo: "Moto G (5S)",
  },
  {
    marca: "Motorola",
    modelo: "Moto G (5S)",
  },
  {
    marca: "Motorola",
    modelo: "motorola one 5G",
  },
  {
    marca: "Motorola",
    modelo: "Moto C",
  },
  {
    marca: "Motorola",
    modelo: "Moto Z (2) Force",
  },
  {
    marca: "Motorola",
    modelo: "Moto E (4) Plus",
  },
  {
    marca: "Motorola",
    modelo: "Moto E (4) Plus",
  },
  {
    marca: "Motorola",
    modelo: "moto e5",
  },
  {
    marca: "Motorola",
    modelo: "Moto E (5)",
  },
  {
    marca: "Motorola",
    modelo: "moto e5",
  },
  {
    marca: "Motorola",
    modelo: "Droid Ultra",
  },
  {
    marca: "Motorola",
    modelo: "Droid MAXX",
  },
  {
    marca: "Motorola",
    modelo: "Droid Mini",
  },
  {
    marca: "Motorola",
    modelo: "moto g(7) power",
  },
  {
    marca: "Motorola",
    modelo: "moto g(7) power",
  },
  {
    marca: "Motorola",
    modelo: "moto g(7) power",
  },
  {
    marca: "Motorola",
    modelo: "moto g(9) plus",
  },
  {
    marca: "Motorola",
    modelo: "motorola razr",
  },
  {
    marca: "Motorola",
    modelo: "Moto G (3rd Gen)",
  },
  {
    marca: "Motorola",
    modelo: "Moto G (3rd Gen)",
  },
  {
    marca: "Motorola",
    modelo: "Moto G (3rd Gen)",
  },
  {
    marca: "Motorola",
    modelo: "Moto G (3rd Gen)",
  },
  {
    marca: "Motorola",
    modelo: "Moto G (3rd Gen)",
  },
  {
    marca: "Motorola",
    modelo: "Moto G (3rd Gen)",
  },
  {
    marca: "Motorola",
    modelo: "Moto E (2nd Gen)",
  },
  {
    marca: "Motorola",
    modelo: "Moto E (2nd Gen)",
  },
  {
    marca: "Motorola",
    modelo: "Moto E (4) Plus",
  },
  {
    marca: "Motorola",
    modelo: "Moto C Plus",
  },
  {
    marca: "Motorola",
    modelo: "Moto C Plus",
  },
  {
    marca: "Motorola",
    modelo: "Moto C Plus",
  },
  {
    marca: "Motorola",
    modelo: "Moto C Plus",
  },
  {
    marca: "Motorola",
    modelo: "motorola one zoom",
  },
  {
    marca: "Motorola",
    modelo: "Moto X (4)",
  },
  {
    marca: "Motorola",
    modelo: "Moto X (4)",
  },
  {
    marca: "Motorola",
    modelo: "Moto G with 4G LTE (1st Gen)",
  },
  {
    marca: "Motorola",
    modelo: "Moto E (4)",
  },
  {
    marca: "Motorola",
    modelo: "Moto E4",
  },
  {
    marca: "Motorola",
    modelo: "moto e5 play",
  },
  {
    marca: "Motorola",
    modelo: "moto e⁶ˢ",
  },
  {
    marca: "Motorola",
    modelo: "Moto G Plus (5th Gen)",
  },
  {
    marca: "Motorola",
    modelo: "Moto G (5) Plus",
  },
  {
    marca: "Motorola",
    modelo: "Moto G Plus (5th Gen)",
  },
  {
    marca: "Motorola",
    modelo: "Atrix HD",
  },
  {
    marca: "Motorola",
    modelo: "Droid Turbo",
  },
  {
    marca: "Motorola",
    modelo: "Moto MAXX",
  },
  {
    marca: "Motorola",
    modelo: "motorola edge",
  },
  {
    marca: "Motorola",
    modelo: "moto g fast",
  },
  {
    marca: "Motorola",
    modelo: "moto e(5) plus",
  },
  {
    marca: "Motorola",
    modelo: "moto g(7)",
  },
  {
    marca: "Motorola",
    modelo: "moto g(7)",
  },
  {
    marca: "Motorola",
    modelo: "moto e5 play",
  },
  {
    marca: "Motorola",
    modelo: "moto e5 go",
  },
  {
    marca: "Motorola",
    modelo: "moto p30",
  },
  {
    marca: "Motorola",
    modelo: "Moto G (5S) Plus",
  },
  {
    marca: "Motorola",
    modelo: "Moto G (5S) Plus",
  },
  {
    marca: "Motorola",
    modelo: "Moto G (5S) Plus",
  },
  {
    marca: "Motorola",
    modelo: "DROID RAZR M",
  },
  {
    marca: "Motorola",
    modelo: "Nexus 6",
  },
  {
    marca: "Motorola",
    modelo: "Moto X Pro (China)",
  },
  {
    marca: "Motorola",
    modelo: "DROID RAZR i",
  },
  {
    marca: "Motorola",
    modelo: "motorola razr (2020)",
  },
  {
    marca: "Motorola",
    modelo: "RAZR M",
  },
  {
    marca: "Motorola",
    modelo: "XT905",
  },
  {
    marca: "Motorola",
    modelo: "moto g power",
  },
  {
    marca: "Motorola",
    modelo: "moto g stylus",
  },
  {
    marca: "Motorola",
    modelo: "moto g pro",
  },
  {
    marca: "Motorola",
    modelo: "moto g(8) power",
  },
  {
    marca: "Motorola",
    modelo: "Electrify M",
  },
  {
    marca: "Motorola",
    modelo: "Moto E (4)",
  },
  {
    marca: "Motorola",
    modelo: "moto e6",
  },
  {
    marca: "Motorola",
    modelo: "Moto E with 4G LTE (2nd Gen)",
  },
  {
    marca: "Motorola",
    modelo: "Moto E with 4G LTE (2nd Gen)",
  },
  {
    marca: "Motorola",
    modelo: "Moto E with 4G LTE (2nd Gen)",
  },
  {
    marca: "Motorola",
    modelo: "Moto E with 4G LTE (2nd Gen)",
  },
  {
    marca: "Motorola",
    modelo: "Moto G with 4G LTE (2nd Gen)",
  },
  {
    marca: "Motorola",
    modelo: "Moto G with 4G LTE (2nd Gen)",
  },
  {
    marca: "Motorola",
    modelo: "Moto G with 4G LTE (2nd Gen)",
  },
  {
    marca: "Motorola",
    modelo: "Moto G (2nd Gen)",
  },
  {
    marca: "Motorola",
    modelo: "Moto G (2nd Gen)",
  },
  {
    marca: "Motorola",
    modelo: "Moto G (2nd Gen)",
  },
  {
    marca: "Motorola",
    modelo: "motorola one action",
  },
  {
    marca: "Motorola",
    modelo: "motorola one action",
  },
  {
    marca: "Motorola",
    modelo: "RAZR HD",
  },
  {
    marca: "Motorola",
    modelo: "DROID RAZR HD",
  },
  {
    marca: "Motorola",
    modelo: "Moto X (2nd Gen)",
  },
  {
    marca: "Motorola",
    modelo: "Moto C",
  },
  {
    marca: "Motorola",
    modelo: "Moto E (4)",
  },
  {
    marca: "Motorola",
    modelo: "Moto E (4)",
  },
  {
    marca: "OnePlus",
    modelo: "One",
  },
  {
    marca: "OnePlus",
    modelo: "OnePlus Nord",
  },
  {
    marca: "OnePlus",
    modelo: "OnePlus 7 Pro",
  },
  {
    marca: "OnePlus",
    modelo: "X",
  },
  {
    marca: "OnePlus",
    modelo: "2",
  },
  {
    marca: "OnePlus",
    modelo: "OnePlus3",
  },
  {
    marca: "OnePlus",
    modelo: "OnePlus3T",
  },
  {
    marca: "OnePlus",
    modelo: "OnePlus5",
  },
  {
    marca: "OnePlus",
    modelo: "OnePlus5T",
  },
  {
    marca: "OnePlus",
    modelo: "OnePlus 6",
  },
  {
    marca: "OnePlus",
    modelo: "OnePlus6T",
  },
  {
    marca: "OnePlus",
    modelo: "OnePlus6T",
  },
  {
    marca: "OnePlus",
    modelo: "OnePlus 7",
  },
  {
    marca: "OnePlus",
    modelo: "OnePlus 7 Pro",
  },
  {
    marca: "OnePlus",
    modelo: "OnePlus 7 Pro 5G",
  },
  {
    marca: "OnePlus",
    modelo: "OnePlus 7 Pro",
  },
  {
    marca: "OnePlus",
    modelo: "OnePlus 7T",
  },
  {
    marca: "OnePlus",
    modelo: "OnePlus 7T Pro",
  },
  {
    marca: "OnePlus",
    modelo: "OnePlus 7T Pro 5G",
  },
  {
    marca: "OnePlus",
    modelo: "OnePlus 7T",
  },
  {
    marca: "OnePlus",
    modelo: "OnePlus 8",
  },
  {
    marca: "OnePlus",
    modelo: "OnePlus 8 Pro",
  },
  {
    marca: "OnePlus",
    modelo: "OnePlus 8T",
  },
  {
    marca: "OnePlus",
    modelo: "OnePlus 8 5G",
  },
  {
    marca: "OnePlus",
    modelo: "OnePlus 8T+ 5G",
  },
  {
    marca: "OnePlus",
    modelo: "OnePlus 8 5G UW",
  },
  {
    marca: "OnePlus",
    modelo: "OnePlus 8",
  },
  {
    marca: "OnePlus",
    modelo: "OnePlus Nord N10 5G",
  },
  {
    marca: "OnePlus",
    modelo: "OnePlus Nord N100",
  },
  {
    marca: "Redmi",
    modelo: "Redmi 9C",
  },
  {
    marca: "Redmi",
    modelo: "Redmi 9C NFC",
  },
  {
    marca: "Redmi",
    modelo: "Redmi 10X",
  },
  {
    marca: "Redmi",
    modelo: "Redmi Note 8 Pro",
  },
  {
    marca: "Redmi",
    modelo: "Redmi Note 8 pro",
  },
  {
    marca: "Redmi",
    modelo: "Redmi 10X pro",
  },
  {
    marca: "Redmi",
    modelo: "Redmi 9",
  },
  {
    marca: "Redmi",
    modelo: "Redmi 6",
  },
  {
    marca: "Redmi",
    modelo: "Redmi K30 Ultra",
  },
  {
    marca: "Redmi",
    modelo: "Redmi Note 9 Pro",
  },
  {
    marca: "Redmi",
    modelo: "Redmi 9A",
  },
  {
    marca: "Redmi",
    modelo: "Redmi K20",
  },
  {
    marca: "Redmi",
    modelo: "Redmi K20",
  },
  {
    marca: "Redmi",
    modelo: "Redmi Note 9 Pro Max",
  },
  {
    marca: "Redmi",
    modelo: "Redmi 9",
  },
  {
    marca: "Redmi",
    modelo: "Redmi Note 9 pro",
  },
  {
    marca: "Redmi",
    modelo: "Redmi Note 8",
  },
  {
    marca: "Redmi",
    modelo: "Redmi Note 9 Pro",
  },
  {
    marca: "Redmi",
    modelo: "Redmi 9",
  },
  {
    marca: "Redmi",
    modelo: "Redmi  Note  7",
  },
  {
    marca: "Redmi",
    modelo: "K30 PRO",
  },
  {
    marca: "Redmi",
    modelo: "Redmi Note 9",
  },
  {
    marca: "Redmi",
    modelo: "Redmi Note 9",
  },
  {
    marca: "Redmi",
    modelo: "Redmi 8",
  },
  {
    marca: "Redmi",
    modelo: "Redmi 8A",
  },
  {
    marca: "Redmi",
    modelo: "Redmi 8A Dual",
  },
  {
    marca: "Redmi",
    modelo: "Redmi K30",
  },
  {
    marca: "Redmi",
    modelo: "Redmi K30i 5G",
  },
  {
    marca: "Redmi",
    modelo: "Redmi K20 Pro",
  },
  {
    marca: "Redmi",
    modelo: "Mi  9T  Pro",
  },
  {
    marca: "Redmi",
    modelo: "Redmi Note 8T",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6 Edge",
  },
  {
    marca: "Samsung",
    modelo: "SM-G6200",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note Edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Active neo",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note8",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note9",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note10+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S5 Active",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S7 Edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S8",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S9",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Feel2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A20",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S8+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S9+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S10",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6 Edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Feel",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S10+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S10+ Olympic Games Edition",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A41",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A21",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S20 5G",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S20+ 5G",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S20 5G",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S20+ 5G",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S20 Ultra 5G",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Z Flip 5G",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note20 Ultra 5G",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A51 5G",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note Edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6 Edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A8",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S7 Edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S8+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S8",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note8",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S9",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S9+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note9",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S10",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S10+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A30",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A30",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A30",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Fold",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note10+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A20",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Z Flip",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A41",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A01 Core",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A01",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A10",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A10e",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A10e",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy M01s",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A11",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A20",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A20e",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A20",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A20s",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A21",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A21s",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A2 Core",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A30",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A40s",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A30s",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A31",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A3(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A3(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A3(2017)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A40",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A41",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A42 5G",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A50",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A50s",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A51",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A51 5G",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A51 5G",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A5(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A5(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A5(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A5(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A5(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A5(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A5(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A5(2017)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A5(2017)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A5(2017)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A5(2017)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A5(2017)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A60",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A6",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A6",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A6",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A6",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A6",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A6",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A6",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A6",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A6+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A9 Star Lite",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A9 Star Lite",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Jean",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A70",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A70s",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A71",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A Quantum",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A71 5G",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A7(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A7(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A7(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A7(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A7(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A7(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A7(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A7(2017)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A7(2017)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A7 (2018)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A7 (2018)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A8",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A8",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A8",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A8",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A8s",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A8s",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A9 Pro",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A8(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A8(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A9(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A9 Pro",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A9 Pro",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A9 (2018)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A9 2018",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A9 (2018)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Core",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Core",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Avant",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A8 Star",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A8 Star",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A9 Star",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A8 Star",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S10e",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S10e",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S10",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S10",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S10+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S10+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S10 5G",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S10 5G",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Z Flip",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Z Flip 5G",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note20 5G",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note20",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note20 Ultra 5G",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note20 Ultra",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy C5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy C5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy C5 Pro",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy C7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy C7 Pro",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy C7 Pro",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy C9 Pro",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy C9 Pro",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Core Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Core Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Core Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Win2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Core Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Core Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Core Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Core Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Core Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Core Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Pocket SS",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Pocket Neo",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Core Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Core Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note9",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note9",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note9",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note9",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note9",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note9",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S8 Active",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S8 Active",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note10",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note10",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note10 5G",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Pocket Neo",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note10+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note10+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note10+ 5G",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note10+ 5G",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note10+ 5G",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S8+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S8+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S8+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S8+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S8+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S8+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S 轻奢版",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S8",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S8",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S8",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S8",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S8",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S8",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S8",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy E5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy E5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy E5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy E5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy E7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy E7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy E7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy E7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy E7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Elite",
  },
  {
    marca: "Samsung",
    modelo: "Elite",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Elite",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Folder2",
  },
  {
    marca: "Samsung",
    modelo: "Elite",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Z Fold2 5G",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy F41",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Round",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Grand Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Grand Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Grand Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Grand Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Grand Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Grand Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Grand Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note3 Neo",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note3 Neo",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note3 Neo",
  },
  {
    marca: "Samsung",
    modelo: "Garda",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S3 Mini",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S3 Mini",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S3 Mini",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Grand Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Grand Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Grand Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Grand Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Grand Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Grand Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Grand Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note Fan Edition",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note Fan Edition",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note Fan Edition",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note Fan Edition",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Grand Max",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Grand Max",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Grand-Max",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Grand Neo Plus",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Grand Prime Plus",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Grand Prime Plus",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Grand Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Grand Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Go Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Grand Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Grand Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Grand Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Grand Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Grand Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note8",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note8",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note8",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note8",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note8",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note8",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note8",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Tab A 7.0",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy XCover Field Pro",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy XCover FieldPro",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Ace",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Ace Style",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Ace Style",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S7 edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S7 Edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S7 Edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S7 edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S7 Edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S7 Edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S7 Edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S7 edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S7 Edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S7 Edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S7 edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S7 Edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S7 Edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Star2 Plus",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note3 Neo",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note3 Neo",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J1",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J1",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J1 Ace",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J1 Ace",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J1 Ace",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J1",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J1 Mini",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J1 Mini",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J1 Mini",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J1 Mini",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J1 Mini Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J1 Mini Prime",
  },
  {
    marca: "Samsung",
    modelo: "J1 Mini Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J1",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J1 Ace",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J1",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J1(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J1(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J1",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J1",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J1",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J1",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J1",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J2 Core",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J2 Pure",
  },
  {
    marca: "Samsung",
    modelo: "SM-J260A",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J2 Core",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J2(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J2 Pro",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3 Pop",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3 Pop",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3 Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3 Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3 Pop",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3 Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3 Emerge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3 Pop",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3 Eclipse",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3 Achieve",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3 Orbit",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3 Aura",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3",
  },
  {
    marca: "Samsung",
    modelo: "SM-J337AZ",
  },
  {
    marca: "Samsung",
    modelo: "SM-J337A",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3(2018)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3 Orbit",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3 Star",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3 Pro 增强版",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3 Pro",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3 Pro",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3 Pro",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3(2017)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3(2017)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J4 Core",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J4+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J4+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J5(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J5(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J5(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J5(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J5(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J5(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J5 Pro",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J5 Pro",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J5 Pro",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J6",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J6",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J6",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J6+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J7 Duo",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J7(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J7(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J7(2015)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy On Max",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J7 Pop",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J7 Pop",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J7 Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Wide2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J7 Sky Pro",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J7 Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J7 Perx",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J7 V",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J7 Pop",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J7 Refine",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J7 Crown",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J7 Aura",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J7 V",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J7 Star",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Wide3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J7 Crown",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J7 Star",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J7 Neo",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J7(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J7(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J7(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy On8",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J7(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J7 Pro",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J7(2017)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J8",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4 Duos",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A8+(2018)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A8(2018)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A8(2018)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A8(2018)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4 Active",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4 Active",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4 Active",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J7+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy C8",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy C8",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4 Google Play Edition",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Core 2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Core2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Core2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Core2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Core2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S5 LTE-A",
  },
  {
    marca: "Samsung",
    modelo: "SM-W2018",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S5 Google Play Edition",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Core Max",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S5 Active",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S5 Active",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S5 Active",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S5 K Sport",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S5 Mini",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S5 mini",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S5 mini",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S5 Mini",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S5 mini",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4 LTE-A",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy M01",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy M10",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy M10s",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy M11",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy M20",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy M20",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy M21",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy K Zoom",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy K Zoom",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy K Zoom",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy K Zoom",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy M30",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy M30s",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy M31",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy M31s",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy M40",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy M51",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6 Active",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Mega 2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Mega2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Mega2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Mega 6.3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Mega 6.3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Mega 6.3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Mega 6.3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Mega 6.3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Mega 6.3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Mega 6.3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Mega 6.3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Mega 6.3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Mega 6.3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4 Zoom",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4 Zoom",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4 Zoom",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Grand2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Grand2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Grand2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Grand2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Grand2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Grand2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Folder",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Folder",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Folder",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Folder",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Folder",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy On5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy On5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy On5 Pro",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy On7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy On7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy On7 Pro",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy On5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy On5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy On5",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J5 Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy On5 2016 时尚版",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy On5 2016 青春版",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy On5(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy On7",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Wide",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J7 Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy On7(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy On7(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy On7(2016)",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J7 Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J7 Prime2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy J7 Prime2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy On7 Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy On7 Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy On7 Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Golden 2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Pocket2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Pocket2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S7 Active",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A80",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy A90 5G",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S10 Lite",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note10 Lite",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S20 FE 5G",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S20 FE",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Core Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Core Prime",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Core Prime",
  },
  {
    marca: "Samsung",
    modelo: "W2016",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S3 Neo",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S3 Neo",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S3 Neo",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S5 Neo",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S5 Neo",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4 Mini",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4 Mini",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4 Mini",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4 Mini",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4 Mini",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4 Mini",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4 Mini",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4 Mini",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4 Mini",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4 Mini",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4 Mini",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S4 Mini",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Alpha",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Alpha",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Alpha",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Alpha",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Alpha",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Alpha",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Alpha",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S9+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S9+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S9+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S9+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S9+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S9+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S9",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S9",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S9",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S9",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S9",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S9",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S9",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Pop",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note II",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note Edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note Edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note Edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note Edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note Edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note Edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note Edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note Edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note Edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note Edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note Edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note4 S-LTE",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note4 S-LTE",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Note4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Mega2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Mega2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Mega2",
  },
  {
    marca: "Samsung",
    modelo: "领世旗舰8",
  },
  {
    marca: "Samsung",
    modelo: "W2017",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Core Lite",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Ace4 Lite",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S Duos3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Ace4 Lite",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Ace4 Lite",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Ace4 Lite",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Ace4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Ace 4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Ace4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Ace4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Express2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Fold",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S20 5G",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S20",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Xcover3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Xcover3",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy XCover4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Xcover4",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy XCover 4s",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy XCover Pro",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S20+ 5G",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S20+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Young2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Young2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Young2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Young2",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy Young2 Pro",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S20 Ultra 5G",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S20 Ultra 5G",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6 Edge+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6 Edge+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6 Edge+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6 Edge+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6 Edge+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6 Edge+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6 Edge+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6 Edge+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6 Edge+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6 Edge+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6 Edge+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6 Edge+",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6 edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6 Edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6 Edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6 Edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6 Edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6 Edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6 edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6 Edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6 Edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6 Edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6 Edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6 Edge",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S6 Edge",
  },
  {
    marca: "Samsung",
    modelo: "三星W20",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z3",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z4",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z5",
  },
  {
    marca: "Sony",
    modelo: "Xperia X Performance",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZ",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZs",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZ1",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZ2",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZ3",
  },
  {
    marca: "Sony",
    modelo: "Xperia 1",
  },
  {
    marca: "Sony",
    modelo: "Xperia 5",
  },
  {
    marca: "Sony",
    modelo: "Xperia 8",
  },
  {
    marca: "Sony",
    modelo: "Xperia 10 II",
  },
  {
    marca: "Sony",
    modelo: "Xperia 5 II",
  },
  {
    marca: "Sony",
    modelo: "Xperia ZR",
  },
  {
    marca: "Sony",
    modelo: "Xperia ZR",
  },
  {
    marca: "Sony",
    modelo: "Xperia ZL",
  },
  {
    marca: "Sony",
    modelo: "Xperia ZL",
  },
  {
    marca: "Sony",
    modelo: "Xperia ZL",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z Ultra",
  },
  {
    marca: "Sony",
    modelo: "Smartphone Z Ultra Google Play edition",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z Ultra",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z Ultra",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z1",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z1",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z1",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z1",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z1",
  },
  {
    marca: "Sony",
    modelo: "Xperia E1",
  },
  {
    marca: "Sony",
    modelo: "Xperia E1",
  },
  {
    marca: "Sony",
    modelo: "Xperia E1 dual",
  },
  {
    marca: "Sony",
    modelo: "Xperia E1 dual",
  },
  {
    marca: "Sony",
    modelo: "Xperia  E1 dual",
  },
  {
    marca: "Sony",
    modelo: "Xperia E3",
  },
  {
    marca: "Sony",
    modelo: "Xperia E3",
  },
  {
    marca: "Sony",
    modelo: "Xperia E3",
  },
  {
    marca: "Sony",
    modelo: "Xperia E3 Dual",
  },
  {
    marca: "Sony",
    modelo: "Xperia E3",
  },
  {
    marca: "Sony",
    modelo: "Xperia M2 Dual",
  },
  {
    marca: "Sony",
    modelo: "Xperia M2",
  },
  {
    marca: "Sony",
    modelo: "Xperia M2",
  },
  {
    marca: "Sony",
    modelo: "Xperia M2",
  },
  {
    marca: "Sony",
    modelo: "Xperia M2 Aqua",
  },
  {
    marca: "Sony",
    modelo: "Xperia M2 Aqua",
  },
  {
    marca: "Sony",
    modelo: "Xperia C3 Dual",
  },
  {
    marca: "Sony",
    modelo: "Xperia C3",
  },
  {
    marca: "Sony",
    modelo: "Xperia T3",
  },
  {
    marca: "Sony",
    modelo: "Xperia T3",
  },
  {
    marca: "Sony",
    modelo: "Xperia T3",
  },
  {
    marca: "Sony",
    modelo: "Xperia T2 Ultra",
  },
  {
    marca: "Sony",
    modelo: "Xperia T2 Ultra",
  },
  {
    marca: "Sony",
    modelo: "Xperia T2 Ultra",
  },
  {
    marca: "Sony",
    modelo: "Xperia T2 Ultra",
  },
  {
    marca: "Sony",
    modelo: "Xperia T2 Ultra dual",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z1 Compact",
  },
  {
    marca: "Sony",
    modelo: "Xperia J1 Compact",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z3 Compact",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z3 Compact",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z2",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z2",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z2",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z2a",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z3",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z3",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z3 Dual",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z3",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z3",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z3",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z3 Dual",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z3v",
  },
  {
    marca: "Sony",
    modelo: "Xperia™ E4g",
  },
  {
    marca: "Sony",
    modelo: "Xperia™ E4g",
  },
  {
    marca: "Sony",
    modelo: "Xperia E4g Dual",
  },
  {
    marca: "Sony",
    modelo: "Xperia E4g Dual",
  },
  {
    marca: "Sony",
    modelo: "Xperia E4g",
  },
  {
    marca: "Sony",
    modelo: "Xperia™ E4",
  },
  {
    marca: "Sony",
    modelo: "Xperia™ E4",
  },
  {
    marca: "Sony",
    modelo: "Xperia™ E4 Dual",
  },
  {
    marca: "Sony",
    modelo: "Xperia™ E4 Dual",
  },
  {
    marca: "Sony",
    modelo: "Xperia™ M4 Aqua",
  },
  {
    marca: "Sony",
    modelo: "Xperia™ M4 Aqua",
  },
  {
    marca: "Sony",
    modelo: "Xperia™ M4 Aqua Dual",
  },
  {
    marca: "Sony",
    modelo: "Xperia™ M4 Aqua Dual",
  },
  {
    marca: "Sony",
    modelo: "Xperia™ M4 Aqua",
  },
  {
    marca: "Sony",
    modelo: "Xperia™ M4 Aqua Dual",
  },
  {
    marca: "Sony",
    modelo: "Xperia™ C4",
  },
  {
    marca: "Sony",
    modelo: "Xperia™ C4",
  },
  {
    marca: "Sony",
    modelo: "Xperia™ C4 Dual",
  },
  {
    marca: "Sony",
    modelo: "Xperia™ C4 Dual",
  },
  {
    marca: "Sony",
    modelo: "Xperia™ C4",
  },
  {
    marca: "Sony",
    modelo: "Xperia™ C4 Dual",
  },
  {
    marca: "Sony",
    modelo: "Xperia C5 Ultra",
  },
  {
    marca: "Sony",
    modelo: "Xperia C5 Ultra Dual",
  },
  {
    marca: "Sony",
    modelo: "Xperia C5 Ultra",
  },
  {
    marca: "Sony",
    modelo: "Xperia C5 Ultra Dual",
  },
  {
    marca: "Sony",
    modelo: "Xperia M5",
  },
  {
    marca: "Sony",
    modelo: "Xperia M5",
  },
  {
    marca: "Sony",
    modelo: "Xperia M5 Dual",
  },
  {
    marca: "Sony",
    modelo: "Xperia M5 Dual",
  },
  {
    marca: "Sony",
    modelo: "Xperia M5",
  },
  {
    marca: "Sony",
    modelo: "Xperia M5 Dual",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z5 Compact",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z5 Compact",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z4v",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z3+ Dual",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z3+",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z5",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z5 dual",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z5",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z5 dual",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z5 Premium Dual",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z5 Premium",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z5 Premium",
  },
  {
    marca: "Sony",
    modelo: "Xperia XA",
  },
  {
    marca: "Sony",
    modelo: "Xperia XA",
  },
  {
    marca: "Sony",
    modelo: "Xperia XA",
  },
  {
    marca: "Sony",
    modelo: "Xperia XA",
  },
  {
    marca: "Sony",
    modelo: "Xperia XA",
  },
  {
    marca: "Sony",
    modelo: "Xperia XA Ultra",
  },
  {
    marca: "Sony",
    modelo: "Xperia XA Ultra",
  },
  {
    marca: "Sony",
    modelo: "Xperia XA Ultra",
  },
  {
    marca: "Sony",
    modelo: "Xperia XA Ultra",
  },
  {
    marca: "Sony",
    modelo: "Xperia XA Ultra",
  },
  {
    marca: "Sony",
    modelo: "Xperia E5",
  },
  {
    marca: "Sony",
    modelo: "Xperia E5",
  },
  {
    marca: "Sony",
    modelo: "Xperia X",
  },
  {
    marca: "Sony",
    modelo: "Xperia X",
  },
  {
    marca: "Sony",
    modelo: "Xperia X Compact",
  },
  {
    marca: "Sony",
    modelo: "Xperia X Performance",
  },
  {
    marca: "Sony",
    modelo: "Xperia X Performance",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZ",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZ",
  },
  {
    marca: "Sony",
    modelo: "Xperia Hello",
  },
  {
    marca: "Sony",
    modelo: "Xperia R1",
  },
  {
    marca: "Sony",
    modelo: "Xperia R1 Plus",
  },
  {
    marca: "Sony",
    modelo: "Xperia XA1",
  },
  {
    marca: "Sony",
    modelo: "Xperia XA1",
  },
  {
    marca: "Sony",
    modelo: "Xperia XA1",
  },
  {
    marca: "Sony",
    modelo: "Xperia XA1",
  },
  {
    marca: "Sony",
    modelo: "Xperia XA1",
  },
  {
    marca: "Sony",
    modelo: "Xperia XA1 Ultra",
  },
  {
    marca: "Sony",
    modelo: "Xperia XA1 Ultra",
  },
  {
    marca: "Sony",
    modelo: "Xperia XA1 Ultra",
  },
  {
    marca: "Sony",
    modelo: "Xperia XA1 Ultra",
  },
  {
    marca: "Sony",
    modelo: "Xperia L1",
  },
  {
    marca: "Sony",
    modelo: "Xperia L1",
  },
  {
    marca: "Sony",
    modelo: "Xperia L1",
  },
  {
    marca: "Sony",
    modelo: "Xperia XA1 Plus",
  },
  {
    marca: "Sony",
    modelo: "Xperia XA1 Plus",
  },
  {
    marca: "Sony",
    modelo: "Xperia XA1 Plus",
  },
  {
    marca: "Sony",
    modelo: "Xperia XA1 Plus",
  },
  {
    marca: "Sony",
    modelo: "Xperia XA1 Plus",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZ Premium",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZ Premium",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZ Premium",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZs",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZs",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZ1",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZ1",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZ1",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZ1 Compact",
  },
  {
    marca: "Sony",
    modelo: "Xperia XA2",
  },
  {
    marca: "Sony",
    modelo: "Xperia XA2",
  },
  {
    marca: "Sony",
    modelo: "Xperia XA2",
  },
  {
    marca: "Sony",
    modelo: "Xperia XA2 Ultra",
  },
  {
    marca: "Sony",
    modelo: "Xperia XA2 Ultra",
  },
  {
    marca: "Sony",
    modelo: "Xperia L2",
  },
  {
    marca: "Sony",
    modelo: "Xperia L2",
  },
  {
    marca: "Sony",
    modelo: "Xperia XA2 Plus",
  },
  {
    marca: "Sony",
    modelo: "Xperia XA2",
  },
  {
    marca: "Sony",
    modelo: "Xperia XA2",
  },
  {
    marca: "Sony",
    modelo: "Xperia XA2 Ultra",
  },
  {
    marca: "Sony",
    modelo: "Xperia XA2 Ultra",
  },
  {
    marca: "Sony",
    modelo: "Xperia L2",
  },
  {
    marca: "Sony",
    modelo: "Xperia L2",
  },
  {
    marca: "Sony",
    modelo: "Xperia XA2 Plus",
  },
  {
    marca: "Sony",
    modelo: "Xperia XA2 Plus",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZ2 Premium",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZ2 Premium",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZ2",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZ2",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZ2",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZ2",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZ2 Compact",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZ2 Compact",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZ3",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZ3",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZ3",
  },
  {
    marca: "Sony",
    modelo: "Xperia 10",
  },
  {
    marca: "Sony",
    modelo: "Xperia 10",
  },
  {
    marca: "Sony",
    modelo: "Xperia 10 Plus",
  },
  {
    marca: "Sony",
    modelo: "Xperia 10 Plus",
  },
  {
    marca: "Sony",
    modelo: "Xperia L3",
  },
  {
    marca: "Sony",
    modelo: "Xperia 10",
  },
  {
    marca: "Sony",
    modelo: "Xperia 10",
  },
  {
    marca: "Sony",
    modelo: "Xperia 10 Plus",
  },
  {
    marca: "Sony",
    modelo: "Xperia 10 Plus",
  },
  {
    marca: "Sony",
    modelo: "Xperia L3",
  },
  {
    marca: "Sony",
    modelo: "Xperia L3",
  },
  {
    marca: "Sony",
    modelo: "Xperia Ace",
  },
  {
    marca: "Sony",
    modelo: "Xperia 8 Lite",
  },
  {
    marca: "Sony",
    modelo: "Xperia 1",
  },
  {
    marca: "Sony",
    modelo: "Xperia 1",
  },
  {
    marca: "Sony",
    modelo: "Xperia 5",
  },
  {
    marca: "Sony",
    modelo: "Xperia 5",
  },
  {
    marca: "Sony",
    modelo: "Xperia 1",
  },
  {
    marca: "Sony",
    modelo: "Xperia 1 Professional Edition",
  },
  {
    marca: "Sony",
    modelo: "Xperia 1",
  },
  {
    marca: "Sony",
    modelo: "Xperia 5",
  },
  {
    marca: "Sony",
    modelo: "Xperia 5",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z Ultra",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z1",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z3",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z5",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZ",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZ1",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZ3",
  },
  {
    marca: "Sony",
    modelo: "Xperia 5",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z1f",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z3 Compact",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z5 Compact",
  },
  {
    marca: "Sony",
    modelo: "Xperia X Compact",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZ1 Compact",
  },
  {
    marca: "Sony",
    modelo: "Xperia Ace",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z2",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z4",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z5 Premium",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZs",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZ2",
  },
  {
    marca: "Sony",
    modelo: "Xperia 1",
  },
  {
    marca: "Sony",
    modelo: "Xperia A2",
  },
  {
    marca: "Sony",
    modelo: "Xperia A4",
  },
  {
    marca: "Sony",
    modelo: "Xperia X Performance",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZ Premium",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZ2 Premium",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZ2 Compact",
  },
  {
    marca: "Sony",
    modelo: "Xperia 10 II",
  },
  {
    marca: "Sony",
    modelo: "Xperia 1 II",
  },
  {
    marca: "Sony",
    modelo: "Xperia 1 II",
  },
  {
    marca: "Sony",
    modelo: "Xperia 5 II",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z1",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z Ultra",
  },
  {
    marca: "Sony",
    modelo: "Xperia ZL2",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z3",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z4",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z5",
  },
  {
    marca: "Sony",
    modelo: "Xperia X Performance",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZ",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZs",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZ1",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZ2",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZ2 Premium",
  },
  {
    marca: "Sony",
    modelo: "Xperia XZ3",
  },
  {
    marca: "Sony",
    modelo: "Xperia 1",
  },
  {
    marca: "Sony",
    modelo: "Xperia 5",
  },
  {
    marca: "Sony",
    modelo: "Xperia 8",
  },
  {
    marca: "Sony",
    modelo: "Xperia 8",
  },
  {
    marca: "Sony",
    modelo: "Xperia 10 II",
  },
  {
    marca: "Sony",
    modelo: "Xperia L4",
  },
  {
    marca: "Sony",
    modelo: "Xperia L4",
  },
  {
    marca: "Sony",
    modelo: "Xperia 5 II",
  },
  {
    marca: "Sony",
    modelo: "Xperia 5 II",
  },
  {
    marca: "Sony",
    modelo: "Xperia 1 II",
  },
  {
    marca: "Sony",
    modelo: "Xperia 1 II",
  },
  {
    marca: "Sony",
    modelo: "Xperia 1 II",
  },
  {
    marca: "Sony",
    modelo: "Xperia 10 II",
  },
  {
    marca: "Sony",
    modelo: "Xperia 10 II",
  },
  {
    marca: "Sony",
    modelo: "Xperia 10 II",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z3 Compact",
  },
  {
    marca: "Sony",
    modelo: "Xperia Z3",
  },
  {
    marca: "Sony",
    modelo: "Xperia X",
  },
  {
    marca: "Vivo",
    modelo: "1601",
  },
  {
    marca: "Vivo",
    modelo: "Y55",
  },
  {
    marca: "Vivo",
    modelo: "Y53",
  },
  {
    marca: "Vivo",
    modelo: "1609",
  },
  {
    marca: "Vivo",
    modelo: "Y55s",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1611",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1714",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1716",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1718",
  },
  {
    marca: "Vivo",
    modelo: "vivo Y65",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1723",
  },
  {
    marca: "Vivo",
    modelo: "V9 6GB",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1724",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1725",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1726",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1727",
  },
  {
    marca: "Vivo",
    modelo: "V9",
  },
  {
    marca: "Vivo",
    modelo: "Y71",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1802",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1803",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1804",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1805",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1806",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1807",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1807",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1808",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1811",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1812",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1813",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1814",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1815",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1816",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1817",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1818",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1818",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1819",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1819",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1820",
  },
  {
    marca: "Vivo",
    modelo: "V9 Pro",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1901",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1902",
  },
  {
    marca: "Vivo",
    modelo: "Y17",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1904",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1906",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1907",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1907",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1909",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1910",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1910",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1912",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1913",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1915",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1916",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1917",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1919",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1920",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1921",
  },
  {
    marca: "Vivo",
    modelo: "V1926",
  },
  {
    marca: "Vivo",
    modelo: "V1930",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1933",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1935",
  },
  {
    marca: "Vivo",
    modelo: "V1937",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1938",
  },
  {
    marca: "Vivo",
    modelo: "Z1 Pro",
  },
  {
    marca: "Vivo",
    modelo: "X50",
  },
  {
    marca: "Vivo",
    modelo: "vivo 2005",
  },
  {
    marca: "Vivo",
    modelo: "X50 Pro",
  },
  {
    marca: "Vivo",
    modelo: "vivo 2015",
  },
  {
    marca: "Vivo",
    modelo: "vivo 2018",
  },
  {
    marca: "Vivo",
    modelo: "V2022",
  },
  {
    marca: "Vivo",
    modelo: "V2025",
  },
  {
    marca: "Vivo",
    modelo: "V2026",
  },
  {
    marca: "Vivo",
    modelo: "V2027",
  },
  {
    marca: "Vivo",
    modelo: "V2028",
  },
  {
    marca: "Vivo",
    modelo: "I1928",
  },
  {
    marca: "Vivo",
    modelo: "X5M",
  },
  {
    marca: "Vivo",
    modelo: "X6A",
  },
  {
    marca: "Vivo",
    modelo: "X6S A",
  },
  {
    marca: "Vivo",
    modelo: "X6D",
  },
  {
    marca: "Vivo",
    modelo: "X5Pro V",
  },
  {
    marca: "Vivo",
    modelo: "X6Plus D",
  },
  {
    marca: "Vivo",
    modelo: "Y35A",
  },
  {
    marca: "Vivo",
    modelo: "Y35",
  },
  {
    marca: "Vivo",
    modelo: "Y937",
  },
  {
    marca: "Vivo",
    modelo: "Y31",
  },
  {
    marca: "Vivo",
    modelo: "Y51A",
  },
  {
    marca: "Vivo",
    modelo: "X6Plus A",
  },
  {
    marca: "Vivo",
    modelo: "X6SPlusA",
  },
  {
    marca: "Vivo",
    modelo: "Xplay5A",
  },
  {
    marca: "Vivo",
    modelo: "V3Max A",
  },
  {
    marca: "Vivo",
    modelo: "V3",
  },
  {
    marca: "Vivo",
    modelo: "V3M A",
  },
  {
    marca: "Vivo",
    modelo: "X7",
  },
  {
    marca: "Vivo",
    modelo: "X7Plus",
  },
  {
    marca: "Vivo",
    modelo: "Xplay6",
  },
  {
    marca: "Vivo",
    modelo: "Y67",
  },
  {
    marca: "Vivo",
    modelo: "Y55A",
  },
  {
    marca: "Vivo",
    modelo: "X9",
  },
  {
    marca: "Vivo",
    modelo: "vivo X9s",
  },
  {
    marca: "Vivo",
    modelo: "vivo X9Plus",
  },
  {
    marca: "Vivo",
    modelo: "Y66",
  },
  {
    marca: "Vivo",
    modelo: "vivo Y66i A",
  },
  {
    marca: "Vivo",
    modelo: "X9i",
  },
  {
    marca: "Vivo",
    modelo: "Y53L",
  },
  {
    marca: "Vivo",
    modelo: "vivo X9s Plus",
  },
  {
    marca: "Vivo",
    modelo: "vivo Y69A",
  },
  {
    marca: "Vivo",
    modelo: "Y79A",
  },
  {
    marca: "Vivo",
    modelo: "vivo  Y75s",
  },
  {
    marca: "Vivo",
    modelo: "vivo X20",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1721",
  },
  {
    marca: "Vivo",
    modelo: "vivo X20Plus",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1720",
  },
  {
    marca: "Vivo",
    modelo: "vivo Y75A",
  },
  {
    marca: "Vivo",
    modelo: "vivo X20Plus UD",
  },
  {
    marca: "Vivo",
    modelo: "vivo X21A",
  },
  {
    marca: "Vivo",
    modelo: "vivo X21UD A",
  },
  {
    marca: "Vivo",
    modelo: "vivo  Y85A",
  },
  {
    marca: "Vivo",
    modelo: "Z1",
  },
  {
    marca: "Vivo",
    modelo: "vivo Z1i",
  },
  {
    marca: "Vivo",
    modelo: "V1730EA",
  },
  {
    marca: "Vivo",
    modelo: "vivo Z3x",
  },
  {
    marca: "Vivo",
    modelo: "vivo Y71A",
  },
  {
    marca: "Vivo",
    modelo: "V1731CA",
  },
  {
    marca: "Vivo",
    modelo: "PD1731D",
  },
  {
    marca: "Vivo",
    modelo: "V1732A",
  },
  {
    marca: "Vivo",
    modelo: "vivo  X21i  A",
  },
  {
    marca: "Vivo",
    modelo: "vivo Y83A",
  },
  {
    marca: "Vivo",
    modelo: "vivo NEX S",
  },
  {
    marca: "Vivo",
    modelo: "vivo NEX A",
  },
  {
    marca: "Vivo",
    modelo: "NEX A",
  },
  {
    marca: "Vivo",
    modelo: "V1809A",
  },
  {
    marca: "Vivo",
    modelo: "Y97",
  },
  {
    marca: "Vivo",
    modelo: "V1813BA",
  },
  {
    marca: "Vivo",
    modelo: "Z3i",
  },
  {
    marca: "Vivo",
    modelo: "V1813BT",
  },
  {
    marca: "Vivo",
    modelo: "Z3i",
  },
  {
    marca: "Vivo",
    modelo: "V1814A",
  },
  {
    marca: "Vivo",
    modelo: "V1816A",
  },
  {
    marca: "Vivo",
    modelo: "V1818A",
  },
  {
    marca: "Vivo",
    modelo: "Y93标准版 64G",
  },
  {
    marca: "Vivo",
    modelo: "Y93s",
  },
  {
    marca: "Vivo",
    modelo: "V1818CA",
  },
  {
    marca: "Vivo",
    modelo: "V1818A",
  },
  {
    marca: "Vivo",
    modelo: "V1821BA",
  },
  {
    marca: "Vivo",
    modelo: "V1824A",
  },
  {
    marca: "Vivo",
    modelo: "V1829A",
  },
  {
    marca: "Vivo",
    modelo: "vivo S1",
  },
  {
    marca: "Vivo",
    modelo: "vivo 1818",
  },
  {
    marca: "Vivo",
    modelo: "V1836A",
  },
  {
    marca: "Vivo",
    modelo: "V1838A",
  },
  {
    marca: "Vivo",
    modelo: "V1901A",
  },
  {
    marca: "Vivo",
    modelo: "V1911A",
  },
  {
    marca: "Vivo",
    modelo: "V1913A",
  },
  {
    marca: "Vivo",
    modelo: "V1914A",
  },
  {
    marca: "Vivo",
    modelo: "V1916A",
  },
  {
    marca: "Vivo",
    modelo: "V1921A",
  },
  {
    marca: "Vivo",
    modelo: "V1922A",
  },
  {
    marca: "Vivo",
    modelo: "V1923A",
  },
  {
    marca: "Vivo",
    modelo: "V1924A",
  },
  {
    marca: "Vivo",
    modelo: "V1928A",
  },
  {
    marca: "Vivo",
    modelo: "V1930A",
  },
  {
    marca: "Vivo",
    modelo: "V1932A",
  },
  {
    marca: "Vivo",
    modelo: "V1934A",
  },
  {
    marca: "Vivo",
    modelo: "V1936A",
  },
  {
    marca: "Vivo",
    modelo: "V1936AL",
  },
  {
    marca: "Vivo",
    modelo: "V1938CT",
  },
  {
    marca: "Vivo",
    modelo: "V1941A",
  },
  {
    marca: "Vivo",
    modelo: "V1945A",
  },
  {
    marca: "Vivo",
    modelo: "V1950A",
  },
  {
    marca: "Vivo",
    modelo: "V1955A",
  },
  {
    marca: "Vivo",
    modelo: "V1962A",
  },
  {
    marca: "Vivo",
    modelo: "V1963A",
  },
  {
    marca: "Vivo",
    modelo: "V1965A",
  },
  {
    marca: "Vivo",
    modelo: "V1981A",
  },
  {
    marca: "Vivo",
    modelo: "V1986A",
  },
  {
    marca: "Vivo",
    modelo: "V1990A",
  },
  {
    marca: "Vivo",
    modelo: "V2001A",
  },
  {
    marca: "Vivo",
    modelo: "V2002A",
  },
  {
    marca: "Vivo",
    modelo: "V2005A",
  },
  {
    marca: "Vivo",
    modelo: "V2011A",
  },
  {
    marca: "Vivo",
    modelo: "V2012A",
  },
  {
    marca: "Vivo",
    modelo: "V2002A",
  },
  {
    marca: "Vivo",
    modelo: "V2020A",
  },
  {
    marca: "Vivo",
    modelo: "V2023A",
  },
  {
    marca: "Vivo",
    modelo: "V2025A",
  },
  {
    marca: "Vivo",
    modelo: "V2031A",
  },
  {
    marca: "Vivo",
    modelo: "V2034A",
  },
  {
    marca: "Vivo",
    modelo: "V1",
  },
  {
    marca: "Vivo",
    modelo: "V3",
  },
  {
    marca: "Vivo",
    modelo: "V3Lite",
  },
  {
    marca: "Vivo",
    modelo: "V3Max",
  },
  {
    marca: "Vivo",
    modelo: "X5",
  },
  {
    marca: "Vivo",
    modelo: "X5Max",
  },
  {
    marca: "Vivo",
    modelo: "X5Pro",
  },
  {
    marca: "Vivo",
    modelo: "Y11",
  },
  {
    marca: "Vivo",
    modelo: "Y15",
  },
  {
    marca: "Vivo",
    modelo: "Y15S",
  },
  {
    marca: "Vivo",
    modelo: "Y21",
  },
  {
    marca: "Vivo",
    modelo: "Y21L",
  },
  {
    marca: "Vivo",
    modelo: "Y22",
  },
  {
    marca: "Vivo",
    modelo: "Y27",
  },
  {
    marca: "Vivo",
    modelo: "Y28",
  },
  {
    marca: "Vivo",
    modelo: "Y31",
  },
  {
    marca: "Vivo",
    modelo: "Y31L",
  },
  {
    marca: "Vivo",
    modelo: "Y31i",
  },
  {
    marca: "Vivo",
    modelo: "V1Max",
  },
  {
    marca: "Vivo",
    modelo: "Y51",
  },
  {
    marca: "Vivo",
    modelo: "Y33",
  },
  {
    marca: "Vivo",
    modelo: "X5Pro D",
  },
  {
    marca: "Vivo",
    modelo: "X5MaxV",
  },
  {
    marca: "Xiaomi",
    modelo: "Hong Mi",
  },
  {
    marca: "Xiaomi",
    modelo: "Redmi",
  },
  {
    marca: "Xiaomi",
    modelo: "HM 1STD",
  },
  {
    marca: "Xiaomi",
    modelo: "HM 1SLTETD",
  },
  {
    marca: "Xiaomi",
    modelo: "HM 2LTE-CU",
  },
  {
    marca: "Xiaomi",
    modelo: "HM 2LTE-CT",
  },
  {
    marca: "Xiaomi",
    modelo: "HM 2LTE-CMCC",
  },
  {
    marca: "Xiaomi",
    modelo: "HM 2LTE-SA",
  },
  {
    marca: "Xiaomi",
    modelo: "HM 2LTE-IN",
  },
  {
    marca: "Xiaomi",
    modelo: "HM 2LTE-BR",
  },
  {
    marca: "Xiaomi",
    modelo: "Mi MIX 3 5G",
  },
  {
    marca: "Xiaomi",
    modelo: "Mi 10T",
  },
  {
    marca: "Xiaomi",
    modelo: "MI 4s",
  },
  {
    marca: "Xiaomi",
    modelo: "MI 2",
  },
  {
    marca: "Xiaomi",
    modelo: "HM 1SC",
  },
  {
    marca: "Xiaomi",
    modelo: "POCO F1",
  },
  {
    marca: "Xiaomi",
    modelo: "Redmi 6A",
  },
  {
    marca: "Xiaomi",
    modelo: "MI 4LTE",
  },
  {
    marca: "Xiaomi",
    modelo: "Mi 5s",
  },
  {
    marca: "Xiaomi",
    modelo: "Mi 10 Ultra",
  },
  {
    marca: "Xiaomi",
    modelo: "MI 9",
  },
  {
    marca: "Xiaomi",
    modelo: "MIX 2",
  },
  {
    marca: "Xiaomi",
    modelo: "Mi 10 Pro",
  },
  {
    marca: "Xiaomi",
    modelo: "Mi9 Pro 5G",
  },
  {
    marca: "Xiaomi",
    modelo: "Mi A2 Lite",
  },
  {
    marca: "Xiaomi",
    modelo: "HM NOTE 1LTETD",
  },
  {
    marca: "Xiaomi",
    modelo: "MI 8",
  },
  {
    marca: "Xiaomi",
    modelo: "MI  8  Pro",
  },
  {
    marca: "Xiaomi",
    modelo: "Mi 4i",
  },
  {
    marca: "Xiaomi",
    modelo: "Mi 10T Lite",
  },
  {
    marca: "Xiaomi",
    modelo: "Mi 5",
  },
  {
    marca: "Xiaomi",
    modelo: "MI 9 SE",
  },
  {
    marca: "Xiaomi",
    modelo: "HM NOTE 1S CT",
  },
  {
    marca: "Xiaomi",
    modelo: "MI MAX",
  },
  {
    marca: "Xiaomi",
    modelo: "Redmi Note 3",
  },
  {
    marca: "Xiaomi",
    modelo: "HM Note 2",
  },
  {
    marca: "Xiaomi",
    modelo: "MI MAX",
  },
  {
    marca: "Xiaomi",
    modelo: "Redmi 3",
  },
  {
    marca: "Xiaomi",
    modelo: "Mi A2",
  },
  {
    marca: "Xiaomi",
    modelo: "MI Note 3",
  },
  {
    marca: "Xiaomi",
    modelo: "Redmi Note 3",
  },
  {
    marca: "Xiaomi",
    modelo: "Redmi Note 3",
  },
  {
    marca: "Xiaomi",
    modelo: "Redmi 3S",
  },
  {
    marca: "Xiaomi",
    modelo: "Mi A3",
  },
  {
    marca: "Xiaomi",
    modelo: "MI CC 9e",
  },
  {
    marca: "Xiaomi",
    modelo: "HM NOTE 1W",
  },
  {
    marca: "Xiaomi",
    modelo: "HM NOTE 1TD",
  },
  {
    marca: "Xiaomi",
    modelo: "MI NOTE Pro",
  },
  {
    marca: "Xiaomi",
    modelo: "Mi 4c",
  },
  {
    marca: "Xiaomi",
    modelo: "MIX",
  },
  {
    marca: "Xiaomi",
    modelo: "K30 pro",
  },
  {
    marca: "Xiaomi",
    modelo: "K30 PRO",
  },
  {
    marca: "Xiaomi",
    modelo: "Redmi K30 Pro Zoom Edition",
  },
  {
    marca: "Xiaomi",
    modelo: "MI  PLAY",
  },
  {
    marca: "Xiaomi",
    modelo: "HM 2A",
  },
  {
    marca: "Xiaomi",
    modelo: "Redmi 4 Pro",
  },
  {
    marca: "Xiaomi",
    modelo: "MI 5C",
  },
  {
    marca: "Xiaomi",
    modelo: "Redmi Note 4",
  },
  {
    marca: "Xiaomi",
    modelo: "Mi 10 lite 5G",
  },
  {
    marca: "Xiaomi",
    modelo: "MI 5s Plus",
  },
  {
    marca: "Xiaomi",
    modelo: "Redmi Note 4",
  },
  {
    marca: "Xiaomi",
    modelo: "MI MAX 3",
  },
  {
    marca: "Xiaomi",
    modelo: "Redmi Pro",
  },
  {
    marca: "Xiaomi",
    modelo: "Redmi 7",
  },
  {
    marca: "Xiaomi",
    modelo: "MI MAX 2",
  },
  {
    marca: "Xiaomi",
    modelo: "MIX 3",
  },
  {
    marca: "Xiaomi",
    modelo: "Redmi 7A",
  },
  {
    marca: "Xiaomi",
    modelo: "Mi 3",
  },
  {
    marca: "Xiaomi",
    modelo: "MI 8 Lite",
  },
  {
    marca: "Xiaomi",
    modelo: "MIX 2S",
  },
  {
    marca: "Xiaomi",
    modelo: "Redmi 4",
  },
  {
    marca: "Xiaomi",
    modelo: "Mi 9 Lite",
  },
  {
    marca: "Xiaomi",
    modelo: "Redmi 5A",
  },
  {
    marca: "Xiaomi",
    modelo: "Redmi 4A",
  },
  {
    marca: "Xiaomi",
    modelo: "Redmi 5",
  },
  {
    marca: "Xiaomi",
    modelo: "MI6",
  },
  {
    marca: "Xiaomi",
    modelo: "Redmi 6Pro",
  },
  {
    marca: "Xiaomi",
    modelo: "Redmi 6 Pro",
  },
  {
    marca: "Xiaomi",
    modelo: "Redmi 4X",
  },
  {
    marca: "Xiaomi",
    modelo: "Mi Note2",
  },
  {
    marca: "Xiaomi",
    modelo: "MI 8 SE",
  },
  {
    marca: "Xiaomi",
    modelo: "Redmi Go",
  },
  {
    marca: "Xiaomi",
    modelo: "MI 5X",
  },
  {
    marca: "Xiaomi",
    modelo: "Mi A1",
  },
  {
    marca: "Xiaomi",
    modelo: "Mi Note 10 Lite",
  },
  {
    marca: "Xiaomi",
    modelo: "MI CC9 Pro",
  },
  {
    marca: "Xiaomi",
    modelo: "Redmi  Note  6  Pro",
  },
  {
    marca: "Xiaomi",
    modelo: "Redmi Note 5A",
  },
  {
    marca: "Xiaomi",
    modelo: "Redmi Note 5A",
  },
  {
    marca: "Xiaomi",
    modelo: "Mi 10",
  },
  {
    marca: "Xiaomi",
    modelo: "MI  8  Explorer  Edition",
  },
  {
    marca: "Xiaomi",
    modelo: "Mi 10 Lite zoom",
  },
  {
    marca: "Xiaomi",
    modelo: "Redmi 5 Plus",
  },
  {
    marca: "Xiaomi",
    modelo: "Redmi  Note  7 Pro",
  },
  {
    marca: "Xiaomi",
    modelo: "MI NOTE LTE",
  },
  {
    marca: "Xiaomi",
    modelo: "MI 6X",
  },
  {
    marca: "Xiaomi",
    modelo: "Redmi Note 5",
  },
  {
    marca: "Xiaomi",
    modelo: "Redmi S2",
  },
];

const IncepaDevices: React.FC = () => {
  const [devices, setDevices] = useState<Data[]>(rows);
  const [input, setInput] = useState("");

  useEffect(() => {
    setDevices(
      rows.filter((device) =>
        device.modelo.toLowerCase().includes(input.toLowerCase())
      )
    );
  }, [input]);

  return (
    <div className="styled-container">
      <input
        className="styled-input"
        placeholder="Pesquise seu modelo de telefone aqui..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <table className="styled-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.id}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {devices.map((row) => (
            <tr key={`${row.modelo}${Date.now()}${Math.random()}`}>
              <td>{row.marca}</td>
              <td>{row.modelo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IncepaDevices;
