import React, {Component} from 'react';
import WORDS_TO_WRAP from 'demo/consts/words_to_wrap';
import DEFAULT_WIDTH from 'demo/consts/default_width';
import WidthChanger from 'demo/components/WidthChanger';
import WordList from 'demo/components/WordList';
import BtnAdd from 'demo/components/BtnAdd';
import BtnRemove from 'demo/components/BtnRemove';
import wordbreaker from '@/wordbreaker-russian';
import './style.css';

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
        this.setState({words: WORDS_TO_WRAP.map(wordbreaker)})
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
