import React from 'react'
import {useStyles } from "../styles/lib/body.styles";


const WelcomePage =()=> {
    const classes = useStyles();

    return (<>
        <div className={classes.welcome} >
            WELCOME 
        </div>
        <div className={classes.text}><h4 className={classes.h4}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Et magnam, libero dicta consequatur placeat consectetur qui in minus necessitatibus excepturi dolorum cupiditate, architecto nostrum recusandae esse quaerat dolor dolores facere!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem reprehenderit ad consequuntur <h1>facilis dolor esse eveniet nulla!</h1> Illo ad harum et quis quae dignissimos, magni ducimus mollitia alias odit ipsa?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ab adipisci atque deserunt ex aliquid blanditiis nulla voluptatum nesciunt reprehenderit? Quam consequuntur voluptatibus sunt, inventore cumque a mollitia fugit maxime? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis veritatis officia velit exercitationem assumenda labore maiores provident temporibus. Dolores aperiam temporibus aliquid mollitia earum debitis placeat, esse illum minima excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic nam rerum consequatur quibusdam natus ipsam veniam incidunt voluptatum. Quod nisi nobis enim corrupti perspiciatis illo est quaerat fugit eos sint?
</h4></div>
    </>)
}

export default WelcomePage
