import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ПолEnum from '../enums/i-i-s-kursovaya-rabota-borisova-anna-пол';

export default FlexberryEnum.extend({
  enum: ПолEnum,
  sourceType: 'IIS.Kursovaya_rabota_Borisova_Anna.Пол'
});
