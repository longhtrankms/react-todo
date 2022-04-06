import { PureComponent } from "react";
import { Provider } from "react-redux";
import rootStore from "store/root-store";

class Gate extends PureComponent<any,any>{
    render(){
        return(
            <Provider store={rootStore}>
                {this.props.children}
            </Provider>
        )
    }
}

export default Gate