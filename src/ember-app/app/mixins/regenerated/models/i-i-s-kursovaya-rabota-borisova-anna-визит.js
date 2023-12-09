import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаВизита: DS.attr('date'),
  кодВизита: DS.attr('number'),
  конецСеанса: DS.attr('string'),
  началоСеанса: DS.attr('string'),
  клиент: DS.belongsTo('i-i-s-kursovaya-rabota-borisova-anna-клиент', { inverse: null, async: false }),
  записьВизита: DS.hasMany('i-i-s-kursovaya-rabota-borisova-anna-запись-визита', { inverse: 'визит', async: false })
});

export let ValidationRules = {
  датаВизита: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-borisova-anna-визит.validations.датаВизита.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  кодВизита: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-borisova-anna-визит.validations.кодВизита.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  конецСеанса: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-borisova-anna-визит.validations.конецСеанса.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  началоСеанса: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-borisova-anna-визит.validations.началоСеанса.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-borisova-anna-визит.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  записьВизита: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-borisova-anna-визит.validations.записьВизита.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВизитE', 'i-i-s-kursovaya-rabota-borisova-anna-визит', {
    кодВизита: attr('Код визита', { index: 0 }),
    началоСеанса: attr('Начало сеанса', { index: 1 }),
    конецСеанса: attr('Конец сеанса', { index: 2 }),
    датаВизита: attr('Дата визита', { index: 3 })
  });

  modelClass.defineProjection('ВизитL', 'i-i-s-kursovaya-rabota-borisova-anna-визит', {
    кодВизита: attr('Код визита', { index: 0 }),
    началоСеанса: attr('Начало сеанса', { index: 1 }),
    конецСеанса: attr('Конец сеанса', { index: 2 }),
    датаВизита: attr('Дата визита', { index: 3 })
  });
};
