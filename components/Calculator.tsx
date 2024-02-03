'use client'

import React, { useState, useEffect } from 'react';

type Item = {
  item: string;
  price: number;
  points: number;
  valuePerPoint?: number;
};

const Calculator: React.FC = () => {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        const jsonData: Item[] = await response.json();
        const itemsWithValue = jsonData.map(item => ({
          ...item,
          valuePerPoint: item.price / item.points, // calculate value per point
        }));
        // sort by value per point 
        itemsWithValue.sort((a, b) => b.valuePerPoint - a.valuePerPoint);
        setData(itemsWithValue);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold my-4">Optimal Points Redemption</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <div key={index} className="border p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold">{item.item}</h2>
            <p>Price: ${item.price.toFixed(2)}</p>
            <p>Points: {item.points}</p>
            {item.valuePerPoint && (
                <p>Value per point: ${item.valuePerPoint.toFixed(7)}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
