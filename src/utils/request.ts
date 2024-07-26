import { extend } from 'umi-request';

interface ApiResponse<T> {
  code: number;
  msg: string;
  data: T;
  totalCount?: number;
}

const request = extend({
  headers: {
    'Content-Type': 'application/json',
  },
  errorHandler: (error) => {
    console.log("错误信息：", error)
  },
});

request.interceptors.request.use((url, options) => {
  return {
    url,
    options: {
      ...options,
      headers: {
        ...options.headers,
      },
    },
  };
});

request.interceptors.response.use(async (response) => {
  const res: ApiResponse<any> = await response.clone().json();
  if (res.code !== 2000) {
    throw new Error(res.msg || '请求失败');
  }
  return res.data;
});

export default request;
