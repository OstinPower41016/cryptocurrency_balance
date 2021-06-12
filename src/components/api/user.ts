export const getUser = (userId: string = "1") => {
  try {
    return fetch(`http://api.sbit500.pro/api/testjob?id_user=${userId}`).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
};
