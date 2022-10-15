import React from "react";
import Link from "next/link";
const FooterWidget = ({ about }) => {
  return (
    <>
      <Link href="/">
        <a className="no-underline text-stone-600 capitalize">{about.title}</a>
      </Link>
    </>
  );
};

export default FooterWidget;
