// An example page. Each page should be located in a folder pages/[page name]/index.tsx
// NOTE: casing of the folder name MATTERS for the url path.
// This is a bit unconsistent with our casing, but should be fine as pages are not imported anywhere.
// Nextjs provides typing for the page function via NextPage.

import type { NextPage } from "next";
import Head from "next/head";

const ExamplePage: NextPage = () => {
  return (
    <div className="text-gray-800">
      {/* Each page should have or inherit a head component. */}
      <Head>
        <title>ExamplePage</title>
      </Head>
      ExamplePage
    </div>
  );
};

// Export at the end of the file.
export default ExamplePage;
