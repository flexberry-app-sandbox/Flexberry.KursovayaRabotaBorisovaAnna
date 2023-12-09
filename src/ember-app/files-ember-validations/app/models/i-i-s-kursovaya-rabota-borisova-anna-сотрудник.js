import {
  defineNamespace,
  defineProjections,
  Model as сотрудникMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-borisova-anna-сотрудник';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(сотрудникMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
