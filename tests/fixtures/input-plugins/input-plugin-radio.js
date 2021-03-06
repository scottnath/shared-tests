const utils = require('../_utils');

module.exports = {
  name: 'Radio Selector',
  description: 'Select a radio option',
  validation: {
    validation: utils.validation,
  },
  inputs: {
    radioSelector: {
      validation: {
        function: 'validation',
        on: 'blur',
      },
      label: 'Select a radio',
      type: 'radio',
      options: [
        { label: 'red',
          value: 'red',
        },
        { label: 'blue',
          value: 'blue',
        },
        { label: 'green',
          value: 'green',
        },
        { label: 'yellow',
          value: 'yellow',
        },
      ],
      settings: {
        empty: false,
      },
    },
  },
  html: `{% if radioSelector.options.length > 1 %}<radiogroup>{% endif %}
    {% for option in radioSelector.options %}<label for="{{radioSelector.id}}--{{loop.index}}"><input type="{{radioSelector.type}}" name="{{radioSelector.name}}" id="{{radioSelector.id}}--{{loop.index}}" value="{{option.value}}" {% if option.value == radioSelector.value %}checked{% endif %}>{{option.label}}</label>{% endfor %}
    {% if radioSelector.options.length > 1 %}</radiogroup>{% endif %}`,
};
