import React, {Component} from "react";

//prime react
import { TabMenu } from 'primereact/tabmenu';

//components
import Home from "./Home";
import Data from "./Data";
// import AST from "./AST";

export class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        }
        this.items = [
            { label: 'Home', icon: 'pi pi-fw pi-home' },
            { label: 'Data', icon: 'pi pi-fw pi-database' },
            { label: 'Variables', icon: 'pi pi-fw pi-pencil' },
            { label: 'Graphics', icon: 'pi pi-fw pi-chart-line' }
        ];
    }

    render() {
        if (this.state.activeIndex === 1) {
            return (
                <div>
                    <TabMenu model={this.items} activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })} />
                    <Data value="Estamos en el Analisis" />
                </div>
            )
        }
        if (this.state.activeIndex === 2) {
            return (
                <div>
                    <TabMenu model={this.items} activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })} />
                    <Home value="Estamos en el Edit" />
                </div>
            )
        }
        if (this.state.activeIndex === 3) {
            return (
                <div>
                    <TabMenu model={this.items} activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })} />
                    <Home value="Estamos en el Edit" />
                </div>
            )
        }
        return (
            <div>
                <TabMenu model={this.items} activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })} />
                <Home value="Estamos en el Home" />
            </div>
        )
    }
}

export default Menu