import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

import './index.scss';

moment.locale('zh-cn');

ReactDOM.render(<ConfigProvider locale={zhCN}><App /></ConfigProvider>, document.getElementById('root'));
