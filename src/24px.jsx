var React = require('react'),
    assign = require('object-assign'),
    Icon = require('./icons/24px');

var SvgIcon = React.createClass({

    getDefaultStyle: function(fill) {
        return {
            display: 'inline-block',
            height: '24px',
            width: '24px',
            fill: (undefined == fill) ? 'initial' : fill
        };
    },

    render: function() {
        var {name, fill, style,viewBox, ...other} = this.props;
        var icon = Icon[name];
        var svgStyle;

        if (undefined == icon)
        {
            throw new Error(name + ' does not exists !');
        }

        if(undefined ==viewBox){
            viewBox="0 0 24 24";
        }

        svgStyle = assign({}, this.getDefaultStyle(fill), style);

        var key = 0;
        var path = 'path';
        var pathList = icon.map(function(item){
            if(item.element){
                path = item.element;
            }else{
                path = 'path';
            }
            item['key'] = ++key;
            return React.createElement(path, item, null);
        });

        return (
            <svg viewBox={viewBox} style={svgStyle} {...other}>
                {pathList}
            </svg>
        );
    }
});

module.exports = SvgIcon;