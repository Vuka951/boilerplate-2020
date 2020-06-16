export const fetchUsers = async (oldUsers) => {
  console.log(oldUsers);
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return data;
};
