// src/pages/DataPage.tsx

import { fetchData } from '@/services/data';
import React, { useEffect, useState } from 'react';

const DataPage: React.FC = () => {
  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    async function getData() {
      try {
        const result = await fetchData({});
        setData(result.list);
      } catch (error) {
        console.error('请求失败', error);
      }
    }

    getData();
  }, []);

  return (
    <div>
      <h1>Data List</h1>
      {!!data.length && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataPage;
