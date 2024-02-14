const express = require("express");

const pricePageRouter = express.Router();
const renderTemplate = require("../lib/renderTemplate");
const Prices = require("../views/Prices");
const { Price } = require("../../db/models");
const PriceCreate = require("../views/PriceCreate");
const PriceEdit = require("../views/PriceEdit");
const { checkUser } = require("../lib/middlewares/middlewares");

pricePageRouter.get("/", async (req, res) => {
  try {
    const login = req.user?.login;
    const prices = await Price.findAll();
    const pricesPlained = prices.map((price) => price.get({ plain: true }));
    renderTemplate(Prices, { login, prices: pricesPlained }, res);
  } catch (err) {
    console.log(err, "Ошибка");
  }
});

pricePageRouter.get("/:id/edit", checkUser, async (req, res) => {
  try {
    const price = await Price.findOne({ where: { id: req.params.id } });
    renderTemplate(PriceEdit, { price, login: req.user?.login }, res);
  } catch (err) {
    console.log(err, "Ошибка при загрузке страницы создания");
  }
});

pricePageRouter.put("/:id", checkUser, async (req, res) => {
  try {
    await Price.update(
      {
        title_price: req.body.title_price,
        all_price: +req.body.all_price,
        children_price: +req.body.children_price,
      },
      {
        where: { id: req.params.id },
        returning: true,
        plain: true,
      },
    );
    res.json({ msg: "Данные обновлены" });
  } catch (error) {
    res.json({ error: "Ошибка при обновлении данных" });
  }
});

// pricePageRouter.put('/id',)

pricePageRouter.get("/create", checkUser, async (req, res) => {
  try {
    renderTemplate(PriceCreate, { login: req.user?.login }, res);
  } catch (err) {
    console.log(err, "Ошибка при загрузке страницы создания");
  }
});

pricePageRouter.post("/create", checkUser, async (req, res) => {
  try {
    await Price.create(
      {
        title_price: req.body.title_price,
        all_price: req.body.all_price,
        children_price: req.body.children_price,
      },
      {
        returning: true,
        plain: true,
      },
    );
    res.json({ msg: "Запись добавлена" });
  } catch (err) {
    console.log(err, "Ошибка при создании записи");
    res.json({ err: "Ошибка при создании записи" });
  }
});

pricePageRouter.delete("/:id", checkUser, async (req, res) => {
  try {
    await Price.destroy({ where: { id: req.params.id } });
    res.json({ msg: "Запись удалена" });
  } catch (err) {
    console.log(err, "Ошибка при удалении записи");
    res.json({ err: "Ошибка при удалении записи" });
  }
});
module.exports = pricePageRouter;
