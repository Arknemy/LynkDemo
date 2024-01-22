export const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJlYzRkYjhhOC0zYzVmLTRkMmMtOWMwZi05YWE3ZTM1MGJjYzAiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcwNTc3NTAyNywiZXhwIjoxNzA4MzY3MDI3fQ.WziUn1MpLnj8WM-dVEHbnn5ZSTn6rInnV6QjIhCaqc8";
// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

  const { roomId } = await res.json();
  return roomId;
};