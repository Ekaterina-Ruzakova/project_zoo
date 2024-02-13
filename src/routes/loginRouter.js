// const express = require('express');
// const bcrypt = require('bcrypt');

// const loginRouter = express.Router();
// const { User } = require('../../db/models');

// const renderTemplate = require('../lib/renderTemplate');
// const Login = require('../views/Login');

// loginRouter.get('/', async (req, res) => {
//   renderTemplate(Login, { login: req.session.login }, res);
// });
// loginRouter.post('/', async (req, res) => {
//   const { login, password } = req.body;
//   try {
//     const user = await User.findOne({ where: { login } });
//     if (user) {
//       const checkPass = await bcrypt.compare(password, user.password);
//       if (checkPass) {
//         req.session.login = user.login;
//         req.session.userId = user.id;
//         req.session.save(() => {
//           res.json({ msg: 'Вы успешно авторизованы!' });
//         });
//       } else {
//         res.json({ err: 'Введен неверный пароль!' });
//       }
//     } else {
//       res.json({ err: 'Такой пользователь не найден!' });
//     }
//   } catch (error) {
//     console.log(error);
//     res.json({ err: 'Ошибка при авторизации' });
//   }
// });

// module.exports = loginRouter;
