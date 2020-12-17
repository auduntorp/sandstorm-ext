function boros(name, text, url) {
    let boros = document.createElement('div')
    boros.setAttribute("id", "zedgestorm-" + name)
    boros.setAttribute("class", "ui-widget-content")
    let img = document.createElement('IMG')
    img.setAttribute("src", url)
    boros.append(img)
    document.body.appendChild(boros)

    let keyword = $( "#" + name );
    let card = $( "#zedgestorm-" + name );
    keyword.mouseenter(function (e) {
        card.css({display: "block"})
    });
    keyword.mousemove(function (e) {
        card.position({
            my: "left+10 top",
            of: e.originalEvent,
            collision: "flip"
        });
    });

    var timeout = {};
    const addTimeout = function() {
        timeout[name] = setTimeout(function() {
            card.css({display: "none"})
        }, 3000)
    }

    keyword.mouseleave(addTimeout);
    card.mousemove(function() {
        clearTimeout(timeout[name])
    });
    card.mouseleave(addTimeout);
}


window.addEventListener('load', (event) => {
    document.body.innerHTML = document.body.innerHTML.replaceAll('some games', '<span class="zedge-confetti">some games</span>')
    let classname = document.getElementsByClassName("zedge-confetti");

    var animateButton = function(e) {
        e.target.classList.add('animate');
        setTimeout(function(){
            e.target.classList.remove('animate');
        },700);
    };

    console.log('confetties', classname.length)
    for (var i = 0; i < classname.length; i++) {
        classname[i].addEventListener('mouseenter', animateButton, false);
    }

    let cards = [
        ["chemister", 'Chemister\'s Insight', "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=482736&type=card"],
        ["capture", 'Capture Sphere', "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=485370&type=card"],
        ["boros", 'Boros Guildgate', "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=366390&type=card"]
    ]
    for (i in cards) {
        let card = cards[i]
        console.log(card)
        document.body.innerHTML = document.body.innerHTML.replaceAll(card[1], '<span id=' + card[0] + ' class="zedgestorm-keyword">' + card[1] + '</span>')
    }
    for (i in cards) {
        let card = cards[i]
        boros(card[0], card[1], card[2])
    }
});
