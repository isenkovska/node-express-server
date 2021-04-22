import User from './Model';

export default function userGetAll(req, res) {
  User.find('6081c18d69e8f08654348f4a')
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('User get all error');
    });
}
