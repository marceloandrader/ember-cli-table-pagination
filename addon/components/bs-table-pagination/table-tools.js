import Ember from 'ember';
import layout from '../../templates/components/bs-table-pagination/table-tools';

export default Ember.Component.extend({
  layout,
  classNames: ['col-md-7'],

  // properties
  perPageOptions: [50, 100, 250]
});
