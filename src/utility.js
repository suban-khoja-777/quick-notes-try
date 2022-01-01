import {checkbox_unchecked_code , checkbox_checked_code , list_disc , checkbox_unchecked_code_sanitized , checkbox_checked_code_sanitized , list_disc_sanitized} from './constants';

export const sanitizeContent = (content) => {
    return (
        content
        .replaceAll(checkbox_unchecked_code,checkbox_unchecked_code_sanitized)
        .replaceAll(checkbox_checked_code,checkbox_checked_code_sanitized)
        .replaceAll(list_disc,list_disc_sanitized)
    );
}

export const normalizeContent = (content) => {
    return (
        content
        .replaceAll(checkbox_unchecked_code_sanitized,checkbox_unchecked_code)
        .replaceAll(checkbox_checked_code_sanitized,checkbox_checked_code)
        .replaceAll(list_disc_sanitized,list_disc)
    );
}

export const debounce = (func, wait) => {
    var timeout;

    return function executedFunction() {
        var context = this;
        var args = arguments;
            
        var later = function() {
            timeout = null;
            func.apply(context, args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

