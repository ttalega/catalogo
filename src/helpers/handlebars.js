module.exports = {
    eq: (a, b) => a === b,
    gt: (a, b) => a > b,
    gte: (a, b) => a >= b,
    lt: (a, b) => a < b,
    lte: (a, b) => a <= b,
    ifLt: function (a, b, options) {
        return a < b ? options.fn(this) : options.inverse(this);
    },
    // Puedes agregar más helpers aquí
    neq: (a, b) => a =! b,
};