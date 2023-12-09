import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKursovaya_rabota_Borisova_AnnaВизитLForm from './forms/i-i-s-kursovaya-rabota-borisova-anna-визит-l';
import IISKursovaya_rabota_Borisova_AnnaДолжностиLForm from './forms/i-i-s-kursovaya-rabota-borisova-anna-должности-l';
import IISKursovaya_rabota_Borisova_AnnaКлиентLForm from './forms/i-i-s-kursovaya-rabota-borisova-anna-клиент-l';
import IISKursovaya_rabota_Borisova_AnnaсотрудникLForm from './forms/i-i-s-kursovaya-rabota-borisova-anna-сотрудник-l';
import IISKursovaya_rabota_Borisova_AnnaТоварLForm from './forms/i-i-s-kursovaya-rabota-borisova-anna-товар-l';
import IISKursovaya_rabota_Borisova_AnnaУслугаLForm from './forms/i-i-s-kursovaya-rabota-borisova-anna-услуга-l';
import IISKursovaya_rabota_Borisova_AnnaВизитEForm from './forms/i-i-s-kursovaya-rabota-borisova-anna-визит-e';
import IISKursovaya_rabota_Borisova_AnnaДолжностиEForm from './forms/i-i-s-kursovaya-rabota-borisova-anna-должности-e';
import IISKursovaya_rabota_Borisova_AnnaКлиентEForm from './forms/i-i-s-kursovaya-rabota-borisova-anna-клиент-e';
import IISKursovaya_rabota_Borisova_AnnaсотрудникEForm from './forms/i-i-s-kursovaya-rabota-borisova-anna-сотрудник-e';
import IISKursovaya_rabota_Borisova_AnnaТоварEForm from './forms/i-i-s-kursovaya-rabota-borisova-anna-товар-e';
import IISKursovaya_rabota_Borisova_AnnaУслугаEForm from './forms/i-i-s-kursovaya-rabota-borisova-anna-услуга-e';
import IISKursovaya_rabota_Borisova_AnnaВизитModel from './models/i-i-s-kursovaya-rabota-borisova-anna-визит';
import IISKursovaya_rabota_Borisova_AnnaДолжностиModel from './models/i-i-s-kursovaya-rabota-borisova-anna-должности';
import IISKursovaya_rabota_Borisova_AnnaЗаписьВизитаModel from './models/i-i-s-kursovaya-rabota-borisova-anna-запись-визита';
import IISKursovaya_rabota_Borisova_AnnaКлиентModel from './models/i-i-s-kursovaya-rabota-borisova-anna-клиент';
import IISKursovaya_rabota_Borisova_AnnaСоставУслугиModel from './models/i-i-s-kursovaya-rabota-borisova-anna-состав-услуги';
import IISKursovaya_rabota_Borisova_AnnaсотрудникModel from './models/i-i-s-kursovaya-rabota-borisova-anna-сотрудник';
import IISKursovaya_rabota_Borisova_AnnaТоварModel from './models/i-i-s-kursovaya-rabota-borisova-anna-товар';
import IISKursovaya_rabota_Borisova_AnnaУслугаModel from './models/i-i-s-kursovaya-rabota-borisova-anna-услуга';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya-rabota-borisova-anna-визит': IISKursovaya_rabota_Borisova_AnnaВизитModel,
    'i-i-s-kursovaya-rabota-borisova-anna-должности': IISKursovaya_rabota_Borisova_AnnaДолжностиModel,
    'i-i-s-kursovaya-rabota-borisova-anna-запись-визита': IISKursovaya_rabota_Borisova_AnnaЗаписьВизитаModel,
    'i-i-s-kursovaya-rabota-borisova-anna-клиент': IISKursovaya_rabota_Borisova_AnnaКлиентModel,
    'i-i-s-kursovaya-rabota-borisova-anna-состав-услуги': IISKursovaya_rabota_Borisova_AnnaСоставУслугиModel,
    'i-i-s-kursovaya-rabota-borisova-anna-сотрудник': IISKursovaya_rabota_Borisova_AnnaсотрудникModel,
    'i-i-s-kursovaya-rabota-borisova-anna-товар': IISKursovaya_rabota_Borisova_AnnaТоварModel,
    'i-i-s-kursovaya-rabota-borisova-anna-услуга': IISKursovaya_rabota_Borisova_AnnaУслугаModel
  },

  'application-name': 'Kursovaya_rabota_ borisova_ anna',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Kursovaya_rabota_ borisova_ anna',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya_rabota_ borisova_ anna',
          title: 'Kursovaya_rabota_ borisova_ anna'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'справочник-услуги': {
          caption: 'Справочник услуги',
          title: 'Справочник услуги',
          'i-i-s-kursovaya-rabota-borisova-anna-услуга-l': {
            caption: 'Услуга',
            title: 'Услуга'
          }
        },
        'справочник-товары': {
          caption: 'Справочник товары',
          title: 'Справочник товары',
          'i-i-s-kursovaya-rabota-borisova-anna-товар-l': {
            caption: 'Товар',
            title: 'Товар'
          }
        },
        'справочник-сотрудники': {
          caption: 'Справочник сотрудники',
          title: 'Справочник сотрудники',
          'i-i-s-kursovaya-rabota-borisova-anna-сотрудник-l': {
            caption: 'сотрудник',
            title: 'Сотрудник'
          },
          'i-i-s-kursovaya-rabota-borisova-anna-должности-l': {
            caption: 'Должности',
            title: 'Должности'
          }
        },
        'справочник-клиенты': {
          caption: 'Справочник клиенты',
          title: 'Справочник клиенты',
          'i-i-s-kursovaya-rabota-borisova-anna-клиент-l': {
            caption: 'Клиент',
            title: 'Клиент'
          }
        },
        'запись-на-визит': {
          caption: 'Запись на визит',
          title: 'Запись на визит',
          'i-i-s-kursovaya-rabota-borisova-anna-визит-l': {
            caption: 'Визит',
            title: 'Визит'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-kursovaya-rabota-borisova-anna-визит-l': IISKursovaya_rabota_Borisova_AnnaВизитLForm,
    'i-i-s-kursovaya-rabota-borisova-anna-должности-l': IISKursovaya_rabota_Borisova_AnnaДолжностиLForm,
    'i-i-s-kursovaya-rabota-borisova-anna-клиент-l': IISKursovaya_rabota_Borisova_AnnaКлиентLForm,
    'i-i-s-kursovaya-rabota-borisova-anna-сотрудник-l': IISKursovaya_rabota_Borisova_AnnaсотрудникLForm,
    'i-i-s-kursovaya-rabota-borisova-anna-товар-l': IISKursovaya_rabota_Borisova_AnnaТоварLForm,
    'i-i-s-kursovaya-rabota-borisova-anna-услуга-l': IISKursovaya_rabota_Borisova_AnnaУслугаLForm,
    'i-i-s-kursovaya-rabota-borisova-anna-визит-e': IISKursovaya_rabota_Borisova_AnnaВизитEForm,
    'i-i-s-kursovaya-rabota-borisova-anna-должности-e': IISKursovaya_rabota_Borisova_AnnaДолжностиEForm,
    'i-i-s-kursovaya-rabota-borisova-anna-клиент-e': IISKursovaya_rabota_Borisova_AnnaКлиентEForm,
    'i-i-s-kursovaya-rabota-borisova-anna-сотрудник-e': IISKursovaya_rabota_Borisova_AnnaсотрудникEForm,
    'i-i-s-kursovaya-rabota-borisova-anna-товар-e': IISKursovaya_rabota_Borisova_AnnaТоварEForm,
    'i-i-s-kursovaya-rabota-borisova-anna-услуга-e': IISKursovaya_rabota_Borisova_AnnaУслугаEForm
  },

});

export default translations;
