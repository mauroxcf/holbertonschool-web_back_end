import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ])
    .then((values) => values.map((value) => {
      if (value.reason) {
        return {
          status: value.status,
          value: `Error: ${value.reason.message}`,
        };
      }
      return {
        status: value.status,
        value: value.value,
      };
    }));
}
