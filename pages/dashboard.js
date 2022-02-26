import { useEffect, useState } from "react";
import { getSession, signIn, useSession } from "next-auth/react";
const DashboardPage = () => {
  // const [loading, setLoading] = useState(true);
  // const [userData, setUserData] = useState(null);
  const { data: session, status } = useSession();

  // useEffect(() => {
  //   (async function () {
  //     const session = await getSession();
  //     if (!session) signIn();
  //     else {
  //       setLoading(false);
  //       console.log(session.user);
  //       setUserData(session.user);
  //     }
  //   })();
  // }, []);

  if(status === 'loading') {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1>Dashboard page</h1>
      <p>{session.user.name}</p>
    </>
  );
};

export default DashboardPage;
