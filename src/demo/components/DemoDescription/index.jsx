import React from 'react';

export default function DemoDescription () {
    return (
        <section className="DemoDescription">
            <h2>Описание</h2>

            <p>
                Расставляет мягкие переносы в текстах на русском языке.<br/>
                Решает проблему Константина <span className="constantine">Константинопольского</span>
            </p>

            <p>
                <a target="_blank"
                   href="https://github.com/Ohar/wordbreaker-russian">
                    Код на GitHub
                </a>
            </p>

            <p>
                TODO: полное соответсвие
                <a target="_blank"
                   rel="nofollow"
                   href="http://new.gramota.ru/spravka/rules/141-perenos">
                    правилам русской орфографии и пунктуации (1956)
                </a>
            </p>
        </section>
    )
}