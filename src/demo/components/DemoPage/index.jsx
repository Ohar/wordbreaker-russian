import React, {Component} from 'react';
import './style.css';
import WORDS_TO_WRAP from './../../consts/words_to_wrap';
import DEFAULT_WIDTH from './../../consts/default_width';
import WidthChanger from './../WidthChanger';
import DemoDescription from './../DemoDescription';
import WordList from './../WordList';
import BtnAdd from './../BtnAdd';
import BtnRemove from './../BtnRemove';
import wordwrapper from './../../../wordbreaker-russian';

export default class DemoPage extends Component {
    constructor (props) {
        super(props)

        this.addSoftHyphens    = this.addSoftHyphens.bind(this)
        this.removeSoftHyphens = this.removeSoftHyphens.bind(this)
        this.widthChange       = this.widthChange.bind(this)

        this.state = {
            words: WORDS_TO_WRAP,
            width: DEFAULT_WIDTH,
        }
    }

    addSoftHyphens () {
        this.setState({words: WORDS_TO_WRAP.map(wordwrapper)})
    }

    removeSoftHyphens () {
        this.setState({words: WORDS_TO_WRAP})
    }

    widthChange ({target}) {
        this.setState({width: target.value})
    }

    render () {
        return (
            <section className="DemoPage">
                <h1>WordWrapper — расстановщик мягких переносов</h1>

                <DemoDescription/>

                <h2>Демо</h2>

                <WidthChanger onChange={this.widthChange}
                              width={this.state.width}/>

                <p>
                    <BtnAdd onClick={this.addSoftHyphens}/>
                    <BtnRemove onClick={this.removeSoftHyphens}/>
                </p>

                <WordList words={this.state.words}
                          width={this.state.width}/>
            </section>
        )
    }
}
