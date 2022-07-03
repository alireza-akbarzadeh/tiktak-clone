// @React
import React from "react";
// @utils
import { footerList1, footerList2, footerList3 } from "../utils/constants";
// @JSX
const Footer = () => {
  const List = ({ footerList }: { footerList: string[] }) => (
    <div className='flex flex-wrap gap-2 mt-5'>
      {footerList.map((footer) => (
        <p
          className='text-gray-4000 text-sm hover:underline cursor-pointer'
          key={footer}
        >
          {footer}
        </p>
      ))}
    </div>
  );
  return (
    <div className='mt-6 hidden xl:block'>
      <List footerList={footerList1} />
      <List footerList={footerList2} />
      <List footerList={footerList3} />
      <p className='text-gray-400 text-sm mt-5'>2022 TikTik</p>
    </div>
  );
};

export default Footer;
