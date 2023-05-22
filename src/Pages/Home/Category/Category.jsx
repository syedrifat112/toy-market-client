import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Card from "./Card";

const Category = () => {
  const [data, setData] = useState([]);
  const [monster, setMonster] = useState([]);
  const [dumper, setDumper] = useState([]);
  const [marcedes, setMarcedes] = useState([]);
  useEffect(() => {
    fetch("https://kids-truck-server.vercel.app/kidsTruck")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);

  //   first

  const handleMonster = () => {
    const monster = data.filter((d) => d.category_name === "Monster Truck");
    setMonster(monster);
  };

  //   second
  const handleMarcedes = () => {
    const marcedes = data.filter((d) => d.category_name === "Marcedes Actors");
    setMarcedes(marcedes);
  };

  //   third
  const handleDumper = () => {
    const dumper = data.filter((d) => d.category_name === "Dumper");
    setDumper(dumper);
  };

  return (
    <Tabs className="w-7xl mx-auto">
      <TabList>
        <Tab>All Products</Tab>
        <Tab onClick={handleMonster}>Monster</Tab>
        <Tab onClick={handleDumper}>Dumper</Tab>
        <Tab onClick={handleMarcedes}>Marcedes</Tab>
      </TabList>
      <TabPanel>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          {data?.map((toyData) => (
            <Card key={toyData._id} toyData={toyData}></Card>
          ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          {monster?.map((toyData) => (
            <Card key={toyData._id} toyData={toyData}></Card>
          ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          {dumper?.map((toyData) => (
            <Card key={toyData._id} toyData={toyData}></Card>
          ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          {marcedes?.map((toyData) => (
            <Card key={toyData._id} toyData={toyData}></Card>
          ))}
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default Category;
