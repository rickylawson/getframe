module.exports = (input = {}, output = '') => {
    let domain = input.domain
        ? input.domain
        : input.url && /^http/i.test(input.url)
            ? require('url').parse(input.url).hostname
            : input.url;

    if (!domain) return '';

    let code = input.code
        ? input.code
        : typeof output === 'object' && output.code
            ? output.code
            : '';
    let uploat = '';
    try {
        if (output && typeof output !== 'undefined') {
            uploat = typeof output === 'string'
                ? JSON.parse(output)
                : output;
        }
    } catch (e) {
    }

    if (!code && uploat) {
        if (/upvid/i.test(domain)) {

        } else if (/vidlox/i.test(domain)) {

        } else if (/vidoza/i.test(domain)) {
            code = uploat.status === 'success'
                ? uploat.code
                : '';
        } else if (/openload/i.test(domain)) {

        } else if (/vidcloud/i.test(domain)) {

        } else if (/flix555/i.test(domain)) {

        } else if (/gounlimited/i.test(domain)) {

        } else if (/rapidvideo/i.test(domain)) {

        } else if (/streamango/i.test(domain)) {

        } else if (/verystream/i.test(domain)) {

        } else if (/streamcherry/i.test(domain)) {

        } else if (/youtube/i.test(domain)) {

        }
    }

    if (!code) return '';
    if (input.iframe) return input.iframe.replace('[code]', code);

    if (/upvid/i.test(domain)) {
        return 'https://upvid.co/embed-' + code + '.html';
    } else if (/vidlox/i.test(domain)) {
        return 'https://vidlox.me/embed-' + code + '.html';
    } else if (/vidoza/i.test(domain)) {
        return 'https://vidoza.net/embed-' + code + '.html';
    } else if (/openload/i.test(domain)) {
        return 'https://openload.co/embed/' + code + '/';
    } else if (/vidcloud/i.test(domain)) {
        return 'https://vidcloud.co/embed/' + code + '/';
    } else if (/flix555/i.test(domain)) {
        return 'https://flix555.com/embed-' + code + '.html';
    } else if (/gounlimited/i.test(domain)) {
        return 'https://gounlimited.to/embed-' + code + '.html';
    } else if (/rapidvideo/i.test(domain)) {
        return 'https://www.rapidvideo.com/embed/' + code + '/';
    } else if (/streamango/i.test(domain)) {
        return 'https://streamango.com/embed/' + code + '/';
    } else if (/verystream/i.test(domain)) {
        return 'https://verystream.com/e/' + code + '/';
    } else if (/streamcherry/i.test(domain)) {
        return 'https://streamcherry.com/embed/' + code + '/';
    } else if (/youtube/i.test(domain)) {
        return 'https://www.youtube.com/embed/' + code + '/';
    }
};