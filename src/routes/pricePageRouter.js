const express = require("express");
const pricePageRouter = express.Router();
const renderTemplate = require("../lib/renderTemplate");
const Prices = require("../views/Prices");
const { Price } = require("../../db/models");
const PriceCreate = require("../views/PriceCreate");
const PriceEdit = require("../views/PriceEdit");
const { where } = require("sequelize");

pricePageRouter.get("/", async (req, res) => {
  try {
    const { login } = req.session;
    const prices = await Price.findAll();
    console.log(prices);
    const result = prices.map((price) => price.get({ plain: true }));
    renderTemplate(Prices, { login: "fdsdfs", prices }, res);
  } catch (err) {
    console.log(err, "Ошибкаааа");
  }
});

pricePageRouter.get("/:id/edit", async (req, res) => {
  try {
    const price = await Price.findOne({ where: { id: req.params.id } });
    renderTemplate(PriceEdit, { price }, res);
  } catch (err) {
    console.log(err, "Ошибка при загрузке страницы создания");
  }
});

pricePageRouter.put("/:id", async (req, res) => {
  console.log(req.body);
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
      }
    );
    res.json({ msg: "Данные обновлены" });
  } catch (error) {
    res.json({ error: "Ошибка при обновлении данных" });
  }
});

// pricePageRouter.put('/id',)

pricePageRouter.get("/create", async (req, res) => {
  try {
    renderTemplate(PriceCreate, {}, res);
  } catch (err) {
    console.log(err, "Ошибка при загрузке страницы создания");
  }
});

pricePageRouter.post("/create", async (req, res) => {
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
      }
    );
    res.json({ msg: "Карточка созданна " });
  } catch (err) {
    console.log(err, "Ошибка при создании новой карточки");
    res.json({ err: "Ошибка при создании новой карточки" });
  }
});

pricePageRouter.delete("/:id", async (req, res) => {
  try {
    await Price.destroy({ where: { id: req.params.id } });
    res.json({ msg: "Запись удалена" });
  } catch (err) {
    console.log(err, "Ошибка при удалении карточки");
    res.json({ err: "Ошибка при удалении карточки" });
  }
});
module.exports = pricePageRouter;
