const logMiddleware = ({getState, dispatch}) => (next) => (action) => {
    log(action.type);
    next(action);
}

const log = () => {
    if (process.env.DISABLE_LOGGING) {
        return;
    }
    console.log.apply(console.log, [new Date().toISOString()].concat(Array.prototype.slice.call(arguments, 0)));
};

export default logMiddleware;
