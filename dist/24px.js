'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var React = require('react'),
    assign = require('object-assign'),
    Icon = require('./icons/24px');

var SvgIcon = React.createClass({
    displayName: 'SvgIcon',

    getDefaultStyle: function getDefaultStyle(fill) {
        return {
            display: 'inline-block' /*,
                                    height: '24px',
                                    width: '24px',
                                    fill: (undefined == fill) ? 'initial' : fill*/
        };
    },

    render: function render() {
        var _props = this.props;
        var name = _props.name;
        var fill = _props.fill;
        var style = _props.style;
        var viewBox = _props.viewBox;

        var other = _objectWithoutProperties(_props, ['name', 'fill', 'style', 'viewBox']);

        var icon = Icon[name];
        var svgStyle;

        if (undefined == icon) {
            throw new Error(name + ' does not exists !');
        }

        if (undefined == viewBox) {
            viewBox = "0 0 24 24";
        }

        svgStyle = assign({}, this.getDefaultStyle(fill), style);

        var key = 0;
        var path = 'path';
        var pathList = icon.map(function (item) {
            if (item.element) {
                path = item.element;
            } else {
                path = 'path';
            }
            item['key'] = ++key;
            return React.createElement(path, item, null);
        });

        return React.createElement(
            'svg',
            _extends({ viewBox: viewBox, style: svgStyle }, other),
            pathList
        );
    }
});

module.exports = SvgIcon;