import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  единицы: DS.attr('i-i-s-kursovaya-rabota-borisova-anna-единицы'),
  количество: DS.attr('string'),
  товар: DS.belongsTo('i-i-s-kursovaya-rabota-borisova-anna-товар', { inverse: null, async: false }),
  услуга: DS.belongsTo('i-i-s-kursovaya-rabota-borisova-anna-услуга', { inverse: 'составУслуги', async: false })
});

export let ValidationRules = {
  единицы: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-borisova-anna-состав-услуги.validations.единицы.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  количество: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-borisova-anna-состав-услуги.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  товар: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-borisova-anna-состав-услуги.validations.товар.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  услуга: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-borisova-anna-состав-услуги.validations.услуга.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СоставУслугиE', 'i-i-s-kursovaya-rabota-borisova-anna-состав-услуги', {
    единицы: attr('Единицы', { index: 0 }),
    количество: attr('Количество', { index: 1 })
  });
};
