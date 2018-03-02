import { createSelector } from 'reselect';

function defaultPicker(object) {
  return [object.props, object.state];
}

function createComputedCreater() {
  return (instance, ...args) => {
    const selector = createSelector(...args);

    const computed = () => selector(...defaultPicker(instance), instance);

    return computed;
  };
}

const recomputed = createComputedCreater(defaultPicker);

export default recomputed;

export { createComputedCreater };
