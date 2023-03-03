import { useEffect } from 'react';

export const useChangeInventory = ({ shopName, shoesModel, inventory }) => {
  useEffect(() => {
    const socket = new WebSocket(
      `ws://localhost:8080?shop=${shopName}&shoesModel=${shoesModel}&inventory=${inventory}`,
    );

    socket.onmessage = (event) => {
      console.log('event', event);
      const inventoryItem = JSON.parse(event.data);
      console.log('inventoryItem', inventoryItem);
      setInventory((prevInventory) => [...prevInventory, inventoryItem]);
      socket.close();
    };

    return () => {
      socket.close();
    };
  }, []);
};
