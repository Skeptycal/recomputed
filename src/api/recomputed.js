import Computable from '../core/Computable';

export default function recomputed(instance) {
  return (...funcs) => {
    // apply arguments instead of spreading for performance.
    const computable = Computable.from.apply(null, funcs);

    const computed = (context = instance) => computable.value(context);

    computed.getComputationCount = () => computable.getComputationCount();
    return computed;
  };
}