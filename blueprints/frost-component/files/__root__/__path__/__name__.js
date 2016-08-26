import Ember from 'ember'
const { Component } = Ember
import PropTypesMixin, { PropTypes } from 'ember-prop-types'
import layout from '<%= templatePath %>'

const <%= classifiedModuleName %> = Component.extend(PropTypesMixin, {

  // == Dependencies ==========================================================

  // == Component properties ==================================================

  layout,

  // == State properties ======================================================

  propTypes: {
    hook: PropTypes.string
  },

  getDefaultProps () {
    return {
      hook: '<%= dasherizedModuleName %>'
    }
  }

  // == Functions =============================================================

  // == Events ================================================================

  // == Actions ===============================================================

})

export default <%= classifiedModuleName %>
