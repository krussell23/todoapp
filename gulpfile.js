
//premade gulp txt

const {src, dest} = require('gulp')

//Gulp has a way of handling async processes, this function takes in a callback function
const static = function(cb) {
    //task
    return src('src/static/data/*.*')
        .pipe(dest('dist/data'))

    //call the callback function
    //temporial dead zone
    cb()
}

exports.default = static