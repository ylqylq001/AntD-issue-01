"use client";
import { useState, useEffect } from "react";
import { App, Menu, Button } from "antd";

const MenuBtn = () => (
  <Menu
    mode="horizontal"
    items={[
      {
        key: "",
        label: "首页",
      },
    ]}
  />
);

const Demo = () => {
  const { modal } = App.useApp();
  const [modalIsOpen, setModal] = useState(false);

  useEffect(() => {
    modalIsOpen && modal.confirm();
  }, [modalIsOpen]);

  return (
    <>
      <Button type="primary" onClick={() => setModal(!modalIsOpen)}>
        Click Me!
      </Button>
      {modalIsOpen && <MenuBtn />}
    </>
  );
};

export default () => (
  <App>
    <Demo />
  </App>
);
