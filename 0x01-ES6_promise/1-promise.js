export default function getFullResponseFromAPI(success) {
  if (success) {
    const person = {
      status: 200,
      body: 'Success',
    };
    return Promise.resolve(person);
  }
  return Promise.reject(new Error('The fake API is not working currently'));
}
