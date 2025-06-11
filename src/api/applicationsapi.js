const myApplicationsPromise = (email, accessToken) => {
  return fetch(
    `https://career-code-server-silk.vercel.app/applications?email=${email}`,
    {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    }
  ).then((res) => res.json());
};

export default myApplicationsPromise;
// {
//     credentials: "include",
//   }
