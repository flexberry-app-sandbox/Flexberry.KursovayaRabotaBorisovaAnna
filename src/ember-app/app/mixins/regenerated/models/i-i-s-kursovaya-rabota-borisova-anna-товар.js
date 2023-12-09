import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодМатериала: DS.attr('number'),
  наименование: DS.attr('string'),
  производитель: DS.attr('string')
});

export let ValidationRules = {
  кодМатериала: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-borisova-anna-товар.validations.кодМатериала.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-borisova-anna-товар.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  производитель: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-borisova-anna-товар.validations.производитель.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТоварE', 'i-i-s-kursovaya-rabota-borisova-anna-товар', {
    наименование: attr('Производитель', { index: 0 }),
    кодМатериала: attr('Код материала', { index: 1 }),
    производитель: attr('Наименование', { index: 2 })
  });

  modelClass.defineProjection('ТоварL', 'i-i-s-kursovaya-rabota-borisova-anna-товар', {
    наименование: attr('Производитель', { index: 0 }),
    кодМатериала: attr('Код материала', { index: 1 }),
    производитель: attr('Наименование', { index: 2 })
  });
};
