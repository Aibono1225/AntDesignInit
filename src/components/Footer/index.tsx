import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      links={[
        {
          key: 'Footer Key',
          title: 'Footer',
          href: '#',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
