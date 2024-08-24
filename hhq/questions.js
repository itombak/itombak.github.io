const questions = `
        I am a hypocrite.|Ich bin ein Heuchler.|0|-1|0|0
        I feel identityless.|Ich fühle mich identitätslos.|0|0|0|-1
        I know myself.|Ich kenne mich selbst.|0|-1|0|1
        Everyone is a stranger.|Alle sind Fremde.|-1|1|0|0
        I am sure you will call me one day.|Ich bin sicher, dass du mich eines Tages anrufen wirst.|0|0|1|0
        I don't believe in empathy.|Ich glaube nicht an Empathie.|-1|-1|0|0
        I don't believe that I am primitive.|Ich glaube nicht, dass ich primitiv bin.|0|-1|0|1
        I would have liked to remain/be a woman.|Ich hätte gerne eine Frau geblieben/gewesen.|1|1|0|0
        I always feel lonely.|Ich fühle mich immer allein.|-1|-1|0|0
        I am afraid.|Ich habe Angst.|-1|0|-1|0
        I feel hopeless for everyone.|Ich fühle mich für alle hoffnungslos.|-1|1|-1|0
        Our story was very real.|Unsere Geschichte war sehr real.|0|0|1|-1
        I don't believe in the successes of successful people in my field.|Ich glaube nicht an die Erfolge erfolgreicher Menschen in meinem Bereich.|-1|-1|-1|-1
        I find it hard to say that I want to be a parent.|Ich finde es schwer zu sagen, dass ich Eltern werden möchte.|0|-1|1|1
        I pray.|Ich bete.|1|0|0|-1
        I am afraid of rich people.|Ich habe Angst vor reichen Menschen.|0|1|-1|0
        I don't want a lover, I want him.|Ich will nicht den Geliebten, sondern ihn.|0|0|1|-1
        Answers are always lost in the drawer.|Die Antworten sind immer in der Schublade verloren gegangen.|-1|0|0|-1
        I don't miss my father.|Ich vermisse meinen Vater nicht.|-1|-1|-1|0
        We resemble each other.|Wir ähneln uns.|0|1|1|0
        I wouldn't want to have been born earlier.|Ich hätte nicht früher geboren werden wollen.|-1|-1|-1|0
        I don't believe in the ecological crisis.|Ich glaube nicht an die ökologische Krise.|0|-1|0|-1
        I am uncomfortable because I am successful in the system.|Ich bin unzufrieden, weil ich im System erfolgreich bin.|0|1|-1|-1
        I believe in God.|Ich glaube an Gott.|0|1|0|-1
        I always dream of bigger cities.|Ich träume immer von größeren Städten.|0|-1|1|0
        Being and being able to be mean the same.|„Sein“ und „sein können“ bedeuten dasselbe.|0|0|1|-1
        Non-humans are also subjects.|Nicht-Menschen sind auch Subjekte.|0|1|-1|0
        I believe that I am in reality.|Ich glaube, dass ich in der Realität bin.|0|-1|0|1
        I am at the center of everything.|Ich stehe im Mittelpunkt von allem.|0|-1|0|-1
        The body is a battlefield.|Der Körper ist ein Schlachtfeld.|-1|0|-1|0
        Objects create subjects.|Objekte schaffen Subjekte.|0|1|0|0
        Subjects create objects.|Subjekte schaffen Objekte.|0|-1|0|0
        Objects create labels.|Objekte schaffen Etiketten.|0|-1|1|0
        Time is an object.|Zeit ist ein Objekt.|-1|0|0|-1
        Objects have subjects.|Objekte haben Subjekte.|1|1|0|0
        Time exists thanks to space.|Zeit existiert dank des Raums.|1|1|0|0
        I need God.|Ich brauche Gott.|1|0|1|0
        I have left a person before.|Ich habe schon einmal einen Menschen verlassen.|0|-1|-1|0
        I don't know wine culture.|Ich kenne die Weinkultur nicht.|0|1|-1|0
        `.trim().split('\n').map(line => {
            const parts = line.split('|');
            return {
                english: parts[0],
                german: parts[1],
                entropy: parseInt(parts[2]),
                society: parseInt(parts[3]),
                will: parseInt(parts[4]),
                logic: parseInt(parts[5])
            };
        });