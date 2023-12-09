import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya-rabota-borisova-anna-состав-услуги', 'Unit | Serializer | i-i-s-kursovaya-rabota-borisova-anna-состав-услуги', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kursovaya-rabota-borisova-anna-состав-услуги',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-kursovaya-rabota-borisova-anna-единицы',
    'transform:i-i-s-kursovaya-rabota-borisova-anna-пол',

    'model:i-i-s-kursovaya-rabota-borisova-anna-визит',
    'model:i-i-s-kursovaya-rabota-borisova-anna-должности',
    'model:i-i-s-kursovaya-rabota-borisova-anna-запись-визита',
    'model:i-i-s-kursovaya-rabota-borisova-anna-клиент',
    'model:i-i-s-kursovaya-rabota-borisova-anna-состав-услуги',
    'model:i-i-s-kursovaya-rabota-borisova-anna-сотрудник',
    'model:i-i-s-kursovaya-rabota-borisova-anna-товар',
    'model:i-i-s-kursovaya-rabota-borisova-anna-услуга',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
