'use strict';

const chai               = require('chai'),
      wordbreakerRussian = require('./../../wordbreaker-russian');

describe(
  'wordbreakerRussian', () => {
    it(
      'Это функция', () => {
        chai.assert.isFunction(wordbreakerRussian);
      }
    );

    it(
      'Возвращает строку', () => {
        chai.assert.isString(wordbreakerRussian('test'));
      }
    );


    // TODO: Написать тесты на все правила
    describe(
      'Правильно расставляет переносы', () => {
        it(
          'собака → со­ба­ка', () => {
            chai.assert.equal(wordbreakerRussian('собака'), 'со­ба­ка');
          }
        );

        it(
          'кот → кот', () => {
            chai.assert.equal(wordbreakerRussian('кот'), 'кот');
          }
        );

        it(
          'Колорадо → Ко­ло­ра­до', () => {
            chai.assert.equal(wordbreakerRussian('Колорадо'), 'Ко­ло­ра­до');
          }
        );
      }
    );
  }
);
