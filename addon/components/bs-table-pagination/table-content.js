import Ember from 'ember';
import layout from '../../templates/components/bs-table-pagination/table-content';

const {computed} = Ember;
const {reads} = computed;

export default Ember.Component.extend({
  layout,
  classNames: ['ember-cli-table-content'],
  // tagName: '',

  showFilter: false
});