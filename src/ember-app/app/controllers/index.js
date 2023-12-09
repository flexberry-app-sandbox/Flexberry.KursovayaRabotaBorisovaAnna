import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочник-услуги.caption'),
          title: i18n.t('forms.application.sitemap.справочник-услуги.title'),
          children: [{
            link: 'i-i-s-kursovaya-rabota-borisova-anna-услуга-l',
            caption: i18n.t('forms.application.sitemap.справочник-услуги.i-i-s-kursovaya-rabota-borisova-anna-услуга-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-услуги.i-i-s-kursovaya-rabota-borisova-anna-услуга-l.title'),
            icon: 'edit',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочник-товары.caption'),
          title: i18n.t('forms.application.sitemap.справочник-товары.title'),
          children: [{
            link: 'i-i-s-kursovaya-rabota-borisova-anna-товар-l',
            caption: i18n.t('forms.application.sitemap.справочник-товары.i-i-s-kursovaya-rabota-borisova-anna-товар-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-товары.i-i-s-kursovaya-rabota-borisova-anna-товар-l.title'),
            icon: 'chart bar',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочник-сотрудники.caption'),
          title: i18n.t('forms.application.sitemap.справочник-сотрудники.title'),
          children: [{
            link: 'i-i-s-kursovaya-rabota-borisova-anna-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.справочник-сотрудники.i-i-s-kursovaya-rabota-borisova-anna-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-сотрудники.i-i-s-kursovaya-rabota-borisova-anna-сотрудник-l.title'),
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-borisova-anna-должности-l',
            caption: i18n.t('forms.application.sitemap.справочник-сотрудники.i-i-s-kursovaya-rabota-borisova-anna-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-сотрудники.i-i-s-kursovaya-rabota-borisova-anna-должности-l.title'),
            icon: 'file',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочник-клиенты.caption'),
          title: i18n.t('forms.application.sitemap.справочник-клиенты.title'),
          children: [{
            link: 'i-i-s-kursovaya-rabota-borisova-anna-клиент-l',
            caption: i18n.t('forms.application.sitemap.справочник-клиенты.i-i-s-kursovaya-rabota-borisova-anna-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-клиенты.i-i-s-kursovaya-rabota-borisova-anna-клиент-l.title'),
            icon: 'tags',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.запись-на-визит.caption'),
          title: i18n.t('forms.application.sitemap.запись-на-визит.title'),
          children: [{
            link: 'i-i-s-kursovaya-rabota-borisova-anna-визит-l',
            caption: i18n.t('forms.application.sitemap.запись-на-визит.i-i-s-kursovaya-rabota-borisova-anna-визит-l.caption'),
            title: i18n.t('forms.application.sitemap.запись-на-визит.i-i-s-kursovaya-rabota-borisova-anna-визит-l.title'),
            icon: 'paperclip',
            children: null
          }]
        }
      ]
    };
  }),
})