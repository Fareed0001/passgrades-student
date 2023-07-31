//Auth token we will use to generate a meeting and connect to it
export const authToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJlYWE5NzZiYS0yNWQxLTQ0OTEtYjhjZS0wMDhlYzBjNmJkYmQiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY5MDc0NzkxOSwiZXhwIjoxNjkxMzUyNzE5fQ.HOv8K7Twx8XgAHd1PJkeNCQfPd-m26tS1yZPeQd-ako";
// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  //Destructuring the roomId from the response
  const { roomId } = await res.json();
  return roomId;
};
