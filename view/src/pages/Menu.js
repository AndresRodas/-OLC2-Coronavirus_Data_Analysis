import React, {Component} from "react";

//prime react
import { TabMenu } from 'primereact/tabmenu';

//pages
import Home from "./Home";
import Data from "./Data";
import Variables from "./Variables";
import Graphics from "./Graphics";

export class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            data: null,
            report: null
        }
        this.items = [
            { label: 'Home', icon: 'pi pi-fw pi-home' },
            { label: 'Data', icon: 'pi pi-fw pi-database' },
            { label: 'Variables', icon: 'pi pi-fw pi-pencil' },
            { label: 'Graphics', icon: 'pi pi-fw pi-chart-line' }
        ];
    }

    getResponseData(res_data) {
        this.setState({data: res_data})
        this.setState({ activeIndex: 2 })
    }

    GraphReport(res_report){
        this.setState({report: res_report})
        this.setState({ activeIndex: 3 })
    }

    render() {
        if (this.state.activeIndex === 1) {
            return (
                <div>
                    <TabMenu model={this.items} activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })} />
                    <Data callback={this.getResponseData.bind(this)} />
                </div>
            )
        }
        if (this.state.activeIndex === 2) {
            return (
                <div>
                    <TabMenu model={this.items} activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })} />
                    <Variables data={this.state.data} callback={this.GraphReport.bind(this)}/>
                </div>
            )
        }
        if (this.state.activeIndex === 3) {
            return (
                <div>
                    <TabMenu model={this.items} activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })} />
                    <Graphics  report={this.state.report}/>
                </div>
            )
        }
        return (
            <div>
                <TabMenu model={this.items} activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })} />
                <Home />
            </div>
        )
    }
}

export default Menu