/**
 * @author cici
 * @date 2019-05-23
 * @Description:
 */
import React from 'react';
import { Icon } from 'antd';


const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_474802_t9ei1ktlkyq.js',
});

export default function Page1({ children }) {
    return (
        <div>
            <h1>Paged1</h1>
            <div>
                dsadas
            </div>
            <div>{children}</div>
            <Icon type="up-circle" theme="twoTone" twoToneColor="#52c41a" />
            <IconFont theme="twoTone" twoToneColor="#52c41a" type="icon-e604" />
            <IconFont theme="twoTone" twoToneColor="#52c41a" type="icon-e6f4" />
            <IconFont style={{ color: 'blue', fontSize: '20px' }} type="icon-e6d2" />
            <svg>
                <use xlinkHref="#icon-e6f4" />
            </svg>
            <svg className="icon">
                <use xlinkHref="#icon-e71a" />
            </svg>
        </div>
    );
}
