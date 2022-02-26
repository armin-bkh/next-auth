import { useEffect, useState } from "react";
import { getSession, signIn } from "next-auth/react";
const DashboardPage = () => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    (async function () {
      const session = await getSession();
      if (!session) signIn();
      else {
        setLoading(false);
        console.log(session.user);
        setUserData(session.user);
      }
    })();
  }, []);

  if(loading && !userData) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1>Dashboard page</h1>
      <p>{userData?.name}</p>
    </>
  );
};

export default DashboardPage;
