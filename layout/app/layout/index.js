/**
 * Created by feichongzheng on 17/10/13.
 */
import React from 'react';
import {Bundle} from '../../../base';
import load from 'bundle-loader?lazy&name=Layout12!./lazy';

const Layout12 = (props) => <Bundle load={load}>{(View) => <View {...props}/>}</Bundle>;

export {Layout12};