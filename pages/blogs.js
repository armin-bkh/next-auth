import { getSession, useSession } from "next-auth/react";

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  return {
    props: {
      session,
      data: session ? "list of 100 blogs" : "list of free blogs",
    },
  };
};

const BlogsPage = ({ data }) => {
  return (
    <>
      <h1>Blogs Page - {data}</h1>
    </>
  );
};

export default BlogsPage;
