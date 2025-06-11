const myJobsPromise = (email, accessToken) => {
  return fetch(
    `https://career-code-server-silk.vercel.app/jobs?email=${email}`,
    {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    }
  ).then((res) => {
    return res.json();
  });
};
export default myJobsPromise;
