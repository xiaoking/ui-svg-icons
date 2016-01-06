# ui-svg-icons
Use the eagle - UI and UNicon - SVG ICONS of the UI

## Examples

```	
		var React = require('react'),
        var icon = require('ui-svg-icons');
        var SvgIcon = icon.s;
        
        var Main = React.createClass({
            render : function(){
                return (
                    <div>
                    <SvgIcon name={'close'} style={{fill:'red'}}/>
                    </div>            
                );
            }
        });
        React.render(<Main/>, document.getElementById("app"));
```


