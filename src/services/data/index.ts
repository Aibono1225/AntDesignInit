import request from '@/utils/request';

interface DataType {
  id: number;
  name: string;
}

export async function fetchData(params: any): Promise<DataType> {
  return request('/api/data', {
    method: 'GET',
    params,
  });
}
