const getframe = require('../');

describe('getframe', function () {
    describe('#()', function () {
        this.timeout(30000);
        it('get embed code', function (done) {
            if (getframe({
                "url": "youtube.com"
            }, {
                "code": "dQw4w9WgXcQ"
            }) === 'https://www.youtube.com/embed/dQw4w9WgXcQ/') {
                return done();
            }
            else {
                return done('ERROR!');
            }
        });
    });
});