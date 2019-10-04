
/**
 * Color Ranges
 * basis color are also included to framework
 */
export const colors = {
    button_prim: "#841584",
    text_input: "#A0DCFF",
    
}

/**
 * Give alpha to color
 * @param {string} Hex color in hexadecimal or transparent
 * @param {number} Int between 0 and 99 for opacity
 * @return grba color
 */
export const alpha = (color, opacity) => {
    if(color === "transparent") {
        return "rgba(135, 189, 67, 0)";
    }
    if(alpha){
        var c;
        if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(color)){
            c = color.substring(1).split('');
            if(c.length == 3){
                c = [c[0], c[1], c[1], c[0], c[2], c[2]];
            }
            c = '0x'+c.join('');
            return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+', 0.'+opacity+')';
        }
        throw new Error('Bad Hex Information')
    }
    return color
}