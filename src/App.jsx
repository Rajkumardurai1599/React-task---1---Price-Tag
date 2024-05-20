import React from "react";
import Card from "./Components/Card";

const App = () => {
  const priceTag = [
    {
      id: 1,
      title: "FREE",
      price: "$0/month",
      user: "single-user",
      storage: "50GB storage",
      project: "Unlimited Public Project",
      community: "Community Access",
      project1: "Unlimited Private Project",
      support: "Dedicated Phone Support",
      domain: "Free Sub Domain",
      reports: "Monthly Status Reports",
      iconproject: false,
      iconsupport: false,
      icondomain: false,
      iconreports: false,
      tick: "fa-duotone fa-check",
      cross: "fa-solid fa-xmark",
      text: "text muted",
    },
    {
      id: 2,
      title: "FREE",
      price: "$99/month",
      user: "single-user",
      storage: "50GB storage",
      project: "Unlimited Public Project",
      community: "Community Access",
      project1: "Unlimited Private Project",
      support: "Dedicated Phone Support",
      domain: "Free Sub Domain",
      reports: "Monthly Status Reports",
      iconproject: true,
      iconsupport: true,
      icondomain: true,
      iconreports: false,
    },
    {
      id: 3,
      title: "FREE",
      price: "$49/month",
      user: "single-user",
      storage: "50GB storage",
      project: "Unlimited Public Project",
      community: "Community Access",
      project1: "Unlimited Private Project",
      support: "Dedicated Phone Support",
      domain: "Free Sub Domain",
      reports: "Monthly Status Reports",
      iconproject: true,
      iconsupport: true,
      icondomain: true,
      iconreports: true,
    },
  ];
  return (
    <>
      <Card priceTag={priceTag} />
    </>
  );
};

export default App;
