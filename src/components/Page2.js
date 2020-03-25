/**
 * @author cici
 * @date 2019-05-23
 * @Description:
 */
import React from 'react';
import pinyin from 'pinyin';

export default function Page2({ children }) {
    console.log(pinyin('张')[0][0].indexOf('z'));
    return (
        <div>
            <h1>Page2</h1>
            <div>{children}</div>
        </div>
    );
}
